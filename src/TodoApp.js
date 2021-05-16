import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
// import FormTools from './hooks/FormTools'
import useTodoState from './hooks/useTodosState'
import {TodosProvider} from './contexts.js/todoContext'
import {v4 as uuid} from 'uuid'
import {useState} from 'react'
import {useEffect} from 'react'

function TodoApp(){
    
    return (
        <div className="container p-2">
            <div className="row">
            <div className="col-md-6  bg shadow my-2 mx-auto  p-2">
            <h1>Todos</h1>
            <TodosProvider>
            <TodoForm  />
            <TodoList />
            </TodosProvider>
            </div>

            </div>

            </div>
    )
}
export default TodoApp