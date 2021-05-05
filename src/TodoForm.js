import React from 'react'
import FormTools from './hooks/FormTools'
function TodoForm(props){
    const [todo,setTodo,reset] = FormTools('')
    return(
        <div className="container">
           <div className="row">
               <div className="col-lg-8 float-start">
                   <label>Task </label>
                   <input value={todo} onChange={setTodo} type="text" className="form-control my-2 p-2"/>
                   <button onClick={()=>{
                       props.addTodo(todo)
                       reset()
                   }} className="btn btn-primary m-2 p-2 w-25  float-start w-25">Add todo</button>
                   <button onClick={props.clearAll} className="btn btn-danger  m-2 p-2 w-25 float-start">Add todo</button>

               </div>
           </div>
        </div>
    )
}

export default TodoForm