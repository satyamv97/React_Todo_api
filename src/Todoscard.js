import React from "react";
import { useNavigate} from "react-router-dom"


const Todoscard=({onEdit,onDelete,todo})=>{
    let navigate =useNavigate();
  

    
    return(< div style={{display:"flex"}}>
        <div style={{display:"flex", backgroundColor:"green",width:"80%",margin:"5px",padding:"5px",justifyContent:"space-between"}}
        onClick={()=>
            
            navigate(`/todo/${todo.id}`)
            
        } >
          
                
                <h4>{todo.title}</h4>
                <h3>{`completed:${todo.completed}`}</h3>
                
            
        </div>
        <span style={{width:"20%"}}  >
            <button style={{height:"90%",width:"40%"}} onClick={()=>onDelete(todo.id)}
            >Delete</button>
        <button style={{height:"90%",width:"45%", margin:"5px"}}  onClick={()=>onEdit(todo.id)}>Edit</button>
        </span>
        </div>
    )
}
export default Todoscard;