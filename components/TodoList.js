import React from 'react'
import { withRouter } from 'react-router-dom'
import { BrowserRouter as Router,} from 'react-router-dom'

function TodoList (props){

    const completeTodo=(index)=>{
        console.log(index);
        // if(index>=0 && index<todos.length){
            const todosCopy=[...props.todos]
            todosCopy[index].completed=!todosCopy[index].completed
            props.settodos(todosCopy)
        // }
    }

    const deleteTodo=(index)=>{
        const todosCopy=[...props.todos]
        const filteredTodos=todosCopy.filter((wasteValue,i)=>{
            return  i!==index
        })
        props.settodos(filteredTodos)
    }

    return (
        <Router>
        <div style={{color:'blue',textAlign:'center'}}> 
        {props.todos.length>0 ? props.todos.map((todo,index)=>{
                return <div key={index} className='todoList'>

                        <span style={todo.completed? {textDecoration:'line-through'}:{}}
                             className={todo.completed ? 'todoListcompleted' : 'todoListPending'}>  {todo.task}</span>

                        <button onClick={()=>{completeTodo(index)}} className='completedButton' style={{color:'blue',textAlign:'center'}}>Completed</button>
                        <button onClick={()=>{deleteTodo(index)}} className='deleteButton' style={{color:'blue',textAlign:'center'}}>Delete</button>
                    </div>
        }):<p style={{color:'blue',textAlign:'center'}}>{'Add Todos...'}</p>}

    </div>
    </Router>
    )
}

export default TodoList