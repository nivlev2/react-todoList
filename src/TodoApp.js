import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import FormTools from './hooks/FormTools'

function TodoApp(){
    const intialTodos = [
        {id:1,name:"go to gym",completed:true},
        {id:1,name:"go to gym",completed:false}
    ]
    const [todos,setTodos] = FormTools(intialTodos)
    const addTodo = newTodo =>{
        setTodos(...todos,{id:3,name:newTodo,completed:false})
        console.log(intialTodos);
    }
    // const addTask = () =>{
    //     let task = {id:4,name:taskInput,completed:false}
    //     intialTodos.push(task)
    // }
    return (
        <div className="container  text-light">
            <div className="row ">
            <div className="col-md-6 my-2 mx-auto p-2 bg-success">
            <h1>Todos</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={intialTodos}/>
            </div>

            </div>

            </div>
    )
}
export default TodoApp