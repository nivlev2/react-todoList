import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
// import FormTools from './hooks/FormTools'
import {v4 as uuid} from 'uuid'
import {useState} from 'react'

function TodoApp(){
    const intialTodos = []
    const [todos,setTodos] = useState(intialTodos)

    const addTodo = newTodo =>{
        setTodos([...todos,{id:uuid(),name:newTodo,completed:false}])
    }
    const clearAll = () =>{
        intialTodos.splice(0,todos.length)
       setTodos([...intialTodos])
    }
    const removeTodo = (e) =>{
        const id = e.target.parentElement.id
        const newTodos= [...todos.filter(item => item.id!= id )]
        setTodos([...newTodos])
        console.log(e.target.parentElement.id);
    }
    return (
        <div className="container border p-2 bg shadow">
            <div className="row ">
            <div className="col-md-6 my-2 mx-auto p-2">
            <h1>Todos</h1>
            <TodoForm clearAll={clearAll} addTodo={addTodo} />
            <TodoList removeTodo={removeTodo} todos={todos}/>
            </div>

            </div>

            </div>
    )
}
export default TodoApp