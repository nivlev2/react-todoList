import React from 'react'
function TodoList(props){
    console.log(props.todos);
    return (
        <div className="text-start">
            {props.todos.map(todo => <div id={todo.id} key={todo.id} className="border p-2 m-2 shadow h4">{todo.name}
            <button onClick={props.removeTodo} className="float-end btn text-decoration-none ">
            ❌</button></div>)}
        </div>
    )
}

export default TodoList