import './earth.css'

const Earth = ({ data }) => {
    return (
        <>
            {data.id ? (
                <div className="earth planet">
                    <img src="/earth-rotate.svg" alt="earth" className='earth-rotate' />
                    <div className="earth-details " key={data.id}>
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
                <p className='text-center text-white'>Loading...</p>
            )}
        </>
    )
}

export { Earth }