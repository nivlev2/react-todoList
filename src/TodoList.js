import React from 'react'

function TodoList(props){
    return (
        <div className="text-start">
            {props.todos.map(todo => <div className="border p-2 m-2 shadow h4">{todo.name}
            <button className="float-end btn text-decoration-none ">
            ❌</button></div>)}
        </div>
    )
}

export default TodoList