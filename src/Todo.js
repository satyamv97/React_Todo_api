import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const Todo=()=>{
    const {id} = useParams();
    const [todoDetails,setTodoDetails] =useState({})
    // this will be called on first render and show all todo
    //on the screen for that particular id
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res)=>{
            const responseTodo = res.data;
            setTodoDetails(responseTodo);
        })

    },[id]);
    
  
    return(
        <div style={{backgroundColor:"purple", width:"50%",padding:"10px"}}> 
           <p>{`Todo id is:${todoDetails.id}`}</p>
            <p>{`Todo userid is:${todoDetails.userId}`}</p>
            <p>{`Todo usertitle is:${todoDetails.title}`}</p>
           <p> {`Todo status is:${todoDetails.completed}`}</p>

        </div>
    )
}
export default Todo;