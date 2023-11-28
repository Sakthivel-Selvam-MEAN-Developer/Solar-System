import './mars.css'

const Mars = ({ data }) => {
    return (
        <>
            {data.id ? (
                <div className="mars planet">
                    <img src="/mars-rotate.svg" alt="mars" className='mars-rotate' />
                    <div className="mars-details " key={data.id}>
                        <div className="title">
                            <h5>
                                <a href={data.wikiLink}>{data.name}</a>
                            </h5>
                        </div>
                        <div className="description">
                            <p>{data.description}</p>
                        </div>
                        <div className="details">
                            <p>Mass : <em>{data.basicDetails.mass}</em></p>
                            <p>Volume : <em>{data.basicDetails.volume}</em> </p>
                        </div>
                    </div>
                </div>
            ) : (
                <p className='text-white text-center'>Loading...</p>
            )}
        </>
    )
}

export { Mars }