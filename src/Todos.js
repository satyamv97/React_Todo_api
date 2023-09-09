
import axios from 'axios'
import React from "react";
import { useEffect,useState } from "react";
import Todoscard from './Todoscard';


const Todos=()=>{
    const [todos,setTodos] = useState([]);
    const [input,setInput] = useState("");
    const [edit,setEdit] = useState(false);
    const [updatedId,setUpdatedId] = useState("");

    // this will be called on first render and show all todo
    //on the screen
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res)=>{
            const responseTodos = res.data;
            console.log("renderd")
            setTodos(responseTodos);
        })

    },[]);

    //this will be called on clicking delete button
    const onDelete =(id)=>{
        const filterItem = todos.filter((todo)=>{
            return todo.id!==id;
        })
        setTodos(filterItem)
        console.log(id)

    }
    
    //on every input on input bar it will call
    const onChange=(e)=>{
        setInput(e.target.value)
    }
  
    //this will be called on clicking add button which 
    // will work as 'add' button or ' update' as per condition

    const addTolist=()=>{
        
        if(edit){
            //this will work if we are on editting mode
            setTodos(
                todos.map((elem)=>{
                    if(elem.id === updatedId){
                        return {...elem,title:input}
                    }
                    return elem;
                })
            )
            setEdit(false)
            setInput("")
        }
        else{
            //this will be called on clicking adding button
        setTodos([{title:input,id:new Date(),completed:true},...todos])
        setInput("")
        }
    }

    //this will be called on clicking edit button of particular id
        
    const onEdit =(id)=>{
        const editedItem = todos.filter((todo)=>{
            return todo.id===id;
        })

        setEdit(true)
        
        setInput(editedItem[0].title)
        setUpdatedId(id)
        
        console.log("ssss",editedItem)

    }
   
    console.log(todos)

    return(
        <div>
            <div>
                <input type="text" value={input} onChange={onChange} ></input>
                
                <button onClick={addTolist}>{edit?"UPDATE":'ADD'}</button>
            </div>
        
            {todos.map((todo,index)=>{
                return(
                    <Todoscard todo={todo} onDelete={onDelete} onEdit={onEdit} index={index} />
                )
                    
            })}
        </div>
    )
}
export default Todos;