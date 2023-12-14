import { useEffect,useState } from "react";

export default function Wishcard(){

    let [wish,setWish] = useState({});

    const data = {
        info1: "lorem ipsum dolor sit amet con  laoreet et justo so simple as possible  here in the future",
        info2: "  justo so simple as possible  here in the future",
        info3: "lorem ipsum dolor sit amet con  laoreet et justo so simple as possible  here in the future"
    };

    const getnewWishes = async ()=>{
        let res = data;
        setWish({info1: res.info1, info2: res.info2});
    };

    useEffect(()=>{
        async function getnewWishes() {
        let res = await fetch (data);
        console.log(res);
        setWish({ info1:res.info1, info2:res.info2})
        }
         getnewWishes();
    },[]);

    return(
        <div>
            <h1>Good wishes start from here!</h1>
            <p>{wish.info1}</p>
            <p>{wish.info2}</p>
            <button onClick={getnewWishes}>See Next</button>
        </div>
    )
}