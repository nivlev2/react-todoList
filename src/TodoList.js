import React from 'react'

function TodoList(props){
    return (
        <div>
            {props.todos.map(todo => <div className="border p-2 m-2 text-light h4">{todo.name}
            <a className="float-end text-decoration-none text-light">
                {todo.completed ? "✔️":"❌"}</a></div>)}
        </div>
    )
}

export default TodoList