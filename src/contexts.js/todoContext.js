import React,{createContext} from 'react'
import useTodoState from '../hooks/useTodosState'

const todosFromLS = localStorage.getItem('todos')? JSON.parse(localStorage.getItem('todos')): []

// const defaultTodos = [
// ]

export const TodosContext = createContext();

export function TodosProvider(props) {
    const todosStuff = useTodoState(todosFromLS)
    return (
        <TodosContext.Provider value={todosStuff}>
            {props.children}
        </TodosContext.Provider>
    )
}