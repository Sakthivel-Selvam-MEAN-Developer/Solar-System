import './planets.css'

const Planets = () => {
    return (
        <div className="planets" id='adventures'>
            <div className="planets-title">
                <p className='m-0'>featured</p>
                <h5>adventures</h5>
            </div>
            <div className="planet-cards d-flex justify-content-lg-evenly overflow-x-scroll">
                <div className="card moon">
                    <img src="/moon.jpg" alt="" />
                    <div className="card-body moon">
                        <p className="card-text m-0">
                            moon
                        </p>
                        <h5 className='card-title'>
                            dune buggy <br /> tours
                        </h5>
                    </div>
                </div>
                <div className="card mars">
                    <img src="/mars.jpg" alt="" />
                    <div className="card-body ">
                        <p className="card-text m-0">
                            mars 
                        </p>
                        <h5 className='card-title'>
                            canyon<br /> adventures
                        </h5>
                    </div>
                </div>
                <div className="card earth">
                    <img src="/earth.jpg" alt="" />
                    <div className="card-body">
                        <p className="card-text m-0">
                            earth
                        </p>
                        <h5 className='card-title'>
                            ocean aerial<br /> tours
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Planets }