import { Earth } from "../earth/earth"
import { Moon } from "../moon/moon"
import { Mars } from "../mars/mars";
import './planetDetails.css'
import { Routes, Route, Link } from 'react-router-dom';

const PlanetDetails = ({ setRoute, route, data }) => {

    return (
        <div className="planet-details" id='planets'>
            <div className="planet-title">
                <p className="m-0">our</p>
                <h5 className="m-0">planets</h5>
            </div>
            <div className="navbar">
                <ul className="navbar-nav ms-auto me-auto me-5 mb-2 mb-lg-0 d-flex flex-row">
                    <Link to={'/moon'} onClick={() => setRoute('moon')}>
                        <li className="nav-item text-center">
                            <span className="nav-link ms-2 me-2">Moon</span>
                        </li>
                    </Link>
                    <Link to={'/mars'} onClick={() => setRoute('mars')}>
                        <li className="nav-item text-center">
                            <span className="nav-link ms-2 me-2">mars</span>
                        </li>
                    </Link>
                    <Link to={'/earth'} onClick={() => setRoute('earth')}>
                        <li className="nav-item text-center">
                            <span className="nav-link ms-2 me-2">earth</span>
                        </li>
                    </Link>
                </ul>
            </div>
            {route == '' ?
                (
                    <p className="text-white text-center">Pleace Click above button to Show Details.</p>
                ) : (
                    <Routes>
                        <Route path="/moon" element={<Moon />} />
                        <Route path="/mars" element={<Mars data={data}/>} />
                        <Route path="/earth" element={<Earth data={data}/>} />
                    </Routes>
                )
            }
        </div>
    )
}

export { PlanetDetails }