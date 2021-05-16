import {useState,useEffect} from 'react';
import {v4 as uuid} from 'uuid'


export default intialTodos => {

    const [todos,setTodos] = useState(intialTodos)
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    })
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
    return {
        todos,
        addTodo,
        clearAll,
        editTodo,
        removeTodo
    }
}

