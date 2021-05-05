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
        if(newTodo === ''){
            return
        }
        setTodos([...todos,{id:uuid(),name:newTodo,completed:false}])
    }
    const clearAll = () =>{
        intialTodos.splice(0,todos.length)
       setTodos([...intialTodos])
    }
    const removeTodo = (e) =>{
        const id = e.target.parentElement.id
        const newTodos= [...todos.filter(item => item.id!== id )]
        setTodos([...newTodos])
        console.log(e.target.parentElement.id);
    }
    const editTodo = (id,newTodo) =>{
        const updated = todos.map(todo =>
            todo.id===id? {...todo,name:newTodo}:todo )
            setTodos(updated)
    }
    return (
        <div className="container p-2">
            <div className="row">
            <div className="col-md-6  bg shadow my-2 mx-auto  p-2">
            <h1>Todos</h1>
            <TodoForm clearAll={clearAll} addTodo={addTodo} />
            <TodoList edit={editTodo} removeTodo={removeTodo} todos={todos}/>
            </div>

            </div>

            </div>
    )
}
export default TodoApp