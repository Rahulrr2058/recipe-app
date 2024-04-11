import { useEffect, useState } from "react"
import styles from "./search.module.css"
const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY="210ae79d75b34a40b962b7fac6c21524"
function Search({foodData, setFoodData}){

    const [query,setQuery]=useState("")
    useEffect(()=>{
        async function fetchFood(){
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data = await res.json();
            setFoodData(data.results);
        }
        fetchFood();

    },[query])
    return(
        <div className={styles.searchContainer}>
            <input 
            className={styles.input}
            type="text"
            value={query}
            onChange={(e)=>setQuery(e.target.value)} />
        </div>
    )
}

export default Search