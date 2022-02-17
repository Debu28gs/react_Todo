import React from 'react'
import { withRouter } from 'react-router-dom'
import { BrowserRouter as Router,} from 'react-router-dom'

function AddTodo (props){
    // console.log('add todo>>',props);
    const addTodo=()=>{
        // console.log('add todo fun running');
        const todosCopy=[...props.todos]
        // console.log('copy',todosCopy);
        const index=todosCopy.findIndex((todo)=>{
            return todo.task===props.newTodo.task
        })
        if (index === -1){
            todosCopy.push(props.newTodo)
            props.settodos(todosCopy)
        }else{
            console.error('todo already present');
        }
    }

    const  handleChange=(event)=>{
        const newTodoCopy={...props.newTodo}
        newTodoCopy.task=event.target.value
        newTodoCopy.completed=false
        props.setnewTodo(newTodoCopy)
        // console.log("handle change running");
    }

    return (
        <Router>
        <div className='App-Image' style={{textAlign:'center'}}>
            <input type={'text'} name='task' value={props.newTodo.task} 
                onChange={(event)=>{
                    handleChange(event)}} className='input'/>

            <button onClick={()=>{addTodo()}} className='addButton'>+</button>
        </div>
        </Router>
    )
}

export default AddTodo