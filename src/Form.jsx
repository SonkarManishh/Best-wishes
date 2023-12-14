import { useState } from "react";

export default function Form(){
    let [formData,setFormData] = useState({
        Fullname:"",
        Username:"",
        Password:""
    })

    let HandleInputChange = (event)=>{ 
        setFormData((currData)=>{ 
            return{...currData, [event.target.name]: event.target.value};
        })
    }
    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData)
        setFormData({
            Fullname:"",
            Username:"",
            Password:""
        });
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="username">FullName </label>
            <input placeholder="Enter your name" 
            type="text" value={formData.Fullname} 
            onChange={HandleInputChange} 
            id="username"
            name="Fullname"/>
            <br /><br />

            <label htmlFor="username">UserName </label>
            <input placeholder="Enter username" 
            type="text" 
            value={formData.Username} 
            onChange={HandleInputChange}  
            id="username"
            name="Username"/> 
            <br /><br />

            <label htmlFor="Password">Password</label>
            <input placeholder="Enter Password" 
            type="Password" 
            value={formData.Password} 
            onChange={HandleInputChange}  
            id="Password"
            name="Password"/>
            <button type="submit">Submit</button>
            </form>

        </div>
    )
}