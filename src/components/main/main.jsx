import { NavBar } from "../navbar/navbar"
import { Planets } from "../planets/planets"
import './main.css'


const Main = () => {
    return (
        <div className="main">
            <NavBar />
            <p className="sub-title"> the safest way to</p>
            <h3 className="title">explore solar system</h3>
        </div>
    )
}

export { Main }