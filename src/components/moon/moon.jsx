import { useEffect } from 'react';
import './moon.css'

const Moon = () => {

    return (
        <div className="moon planet">
            <img src="/moon-rotate.svg" alt="moon" className='moon-rotate' />
            <div className="moon-details ">
                <div className="title">
                    <h5>
                        <a href="https://en.wikipedia.org/wiki/Moon">moon</a>
                    </h5>
                </div>
                <div className="description">
                    <p>The Moon is Earth's only natural satellite. It orbits at an average distance of 384400 km (238900 mi), about 30 times the planet's diameter. The Moon always presents the same side to Earth, because gravitational pull has locked its rotation to the planet. This results in the lunar day of 29.5 days matching the lunar month. The Moon's gravitational pull – and to a lesser extent the Sun's – are the main drivers of the tides.</p>
                </div>
                <div className="details">
                    <p>Mass : <em>7.347x10<sup>22</sup> kg</em></p>
                    <p>Volumn : <em>2.1958x10<sup>10</sup> km<sup>3</sup></em> </p>
                </div>
            </div>
        </div>
    )
}

export { Moon }