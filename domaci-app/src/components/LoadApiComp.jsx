import { useEffect, useState } from "react"
import {Card} from './CardComp'
export const LoadApi = ()=>{
    
    var apiLink = "https://rickandmortyapi.com/api/character"
    const [results, setResults] = useState([])

    const loadDataFromApi = async () => {
        try {
            let jsonFile = await fetch(apiLink)
            let jsonResult = await jsonFile.json()
            setResults(jsonResult.results)
        } catch (error) {
            //console.error(error)
        }
    }


    useEffect(()=>{
        loadDataFromApi()
    },[])

    return results.map(({image, name, status, url},index) => <Card key={index} image={image} name={name} status={status} url={url}/>)

}