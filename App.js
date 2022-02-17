import React, {useState} from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function TodoApp(props){

    const [todos,settodos]=useState([])
    const [newTodo,setnewTodo]=useState({
        task:'',
        completed:false
    })
    

    return(
        
        <div className='App-image'>
            <AddTodo todos={todos} settodos={settodos} newTodo={newTodo} setnewTodo={setnewTodo}/>
            <TodoList todos={todos} settodos={settodos} newTodo={newTodo} setnewTodo={setnewTodo}/>
        </div>
    )
}

export default TodoApp
