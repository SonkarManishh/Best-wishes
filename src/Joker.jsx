import { useEffect, useState } from "react"

export default function Joker(){

    
    let [joke,setJoke] = useState({ });
    
    const url = "https://official-joke-api.appspot.com/random_joke";

    const getNewjoke = async () =>{
        let respose = await fetch(url);
        let jsonResponse = await respose.json();
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    };

    useEffect(()=>{
        async function getFirstJoke() {
        let respose = await fetch (url);
        let jsonResponse = await respose.json();
        console.log(jsonResponse);
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline})
        }
         getFirstJoke();
    },[]);
    return(
        <div>
            <h1>Joke Time!</h1>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewjoke}>New Joke</button>
        </div>
    )
}