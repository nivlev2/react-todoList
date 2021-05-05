import React from 'react'
import {useState} from 'react'
import Todo from './Todo'

function TodoList(props){
    const [onEdit,setOnEdit] = useState(false)
    const togleOnEdit = (e) =>{
        setOnEdit(!onEdit)
    }
    return (
        <div className="text-start">
            {props.todos.map(todo => <Todo key={todo.id} edit={props.edit} togleOnEdit={togleOnEdit} onEdit={onEdit} removeTodo={props.removeTodo} todo={todo}/>)}
        </div>
    )
}

export default TodoList