import { useState } from "react"

export default function CommentForm(){

    let [formData, setFormData] = useState({
        username: "",
        remark: "",
        rating: 5,
    })

    let HandleInputChange = (event) =>{
        setFormData((currData)=>{
            return{...currData,[event.target.name]:event.target.value};
        })
    }

    let handleSubmit = (event) =>{ 
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: "",
            remark: "",
            rating: 5,
        })
    }
    return(
        <div>
            <h3>Give a Comment!</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input placeholder="username" type="text" 
                value={formData.username}
                id="username"
                name="username"
                onChange={HandleInputChange}/><br /><br /> 
                
                <label htmlFor="remark">Feedback</label>
                <textarea 
                id="remark"
                onChange={HandleInputChange}
                name="remark" placeholder="Remark" value={formData.remark}  cols="22" rows="3"></textarea><br /><br /> 

                <label htmlFor="rating">Rating</label>
                <input id="rating"placeholder="rating" value={formData.rating} 
                name="rating"
                type="number" min={1} max={5} 
                onChange={HandleInputChange}/><br /><br /> 


                <button type="submit">Add Comment</button>
            </form>
        </div>
    )
}