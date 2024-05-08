import { useEffect, useState } from "react"
import Cards from "./cards"
function Api ({
    name
}) {
    const [src, setSrc] = useState("")
    const [label, setLabel] = useState('')
    useEffect( () => {
    const imageSource =  async function (picName) {
        const source = await fetch ('https://pokeapi.co/api/v2/pokemon/' + picName)
        const info = await source.json()        
        let image =  info.sprites.front_default
        setSrc(image)
        setLabel(name.name)
    }
    imageSource(name.name)
    }, )
    return <>
        <Cards
            info={src}
        />
        <h3>{label}</h3>
    </>
}
export default Api