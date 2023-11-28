import { About } from "../about/about"
import { Footer } from "../footer/footer"
import { Main } from "../main/main"
import { PlanetDetails } from "../planet-details/planetDetails"
import { Planets } from "../planets/planets"
import { useEffect, useState } from "react"


const Home = () => {
    const [route, setRoute] = useState('')
    const [data, setData] = useState({})

    const OPTIONS = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '17726a31a5mshc46aed9a990da4fp1898bbjsn8e28114111b7',
            'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
        }
    }
    var API_URL = 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets'

    if (route == 'earth')  API_URL += '/3'
    else if(route == 'mars')  API_URL += '/4'

    useEffect(() => {
        if(route != ''){
            const data = async () => {
                try {
                    const response = await fetch(API_URL, OPTIONS);
                    if (!response.ok) throw Error('Error : Data not Fetched')
                    const result = await response.text();
                    const finalResult = JSON.parse(result)
                    setData(finalResult)
                } catch (error) {
                    console.error(error);
                }
            }
            data()
        }
    }, [route])

    return (
        <>
            <Main />
            <Planets />
            <PlanetDetails setRoute={setRoute} route={route} data={data}/>
            <About />
            <Footer />
        </>
    )
}

export { Home }