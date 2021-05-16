import React,{useContext} from 'react'
import FormTools from './hooks/FormTools'
import {TodosContext} from './contexts.js/todoContext'
function TodoForm(){
    console.log("FORM render");
    const [todo,setTodo,reset] = FormTools('')
    const {addTodo,clearAll} = useContext(TodosContext)
    return(
        <div className="container">
           <div className="row">
               <div className="">
                   <label>Task </label>
                   <input value={todo} onChange={setTodo} type="text" className="form-control my-2 p-2"/>
                   <button onClick={()=>{
                       addTodo(todo)
                       reset()
                   }} className="btn btn-primary m-2 p-2 w-25  float-start w-25">Add todo</button>
                   <button onClick={clearAll} className="btn btn-danger  m-2 p-2 w-25 float-start">Add todo</button>

               </div>
           </div>
        </div>
    )
}

export default TodoForm