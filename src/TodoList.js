import React, { useContext } from 'react'
import {useState} from 'react'
import Todo from './Todo'
import {TodosContext} from './contexts.js/todoContext'
function TodoList(){
    // const [onEdit,setOnEdit] = useState(false)
    // const togleOnEdit = (e) =>{
        
    //     setOnEdit(!onEdit)
    // }
    const {todos}=useContext(TodosContext)
    if(localStorage["todos"]){
        return (
            <div className="text-start">
                {todos.map(todo => <Todo key={todo.id} id={todo.id}  todo={todo}/>)}
            </div>
        )
    }
    return null
}

export default TodoList