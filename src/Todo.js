import React,{useContext} from 'react'
import tools from "./hooks/FormTools"
import toggleState from './hooks/ToggleTodo'
import {TodosContext} from './contexts.js/todoContext'

function Todo (props){
    // const clName = props.onEdit ? 'form-control':''
    // const cl = `border p-2 m-2 shadow h4 ${clName}`
    const [isEditing,setIsEditing] = toggleState(false)
    const name = props.todo.name
    const [newVal,setVal] = tools(name)
    const  {editTodo,removeTodo}=useContext(TodosContext)
     return (
        <div className="text-start ">
            
        {isEditing?<div><div className="row p-2 ">
            <div className="col-lg-10"> <input value={newVal} onChange={setVal}  type="text" className=" float-start form-control ml-2"/>
            </div>
            <div className="col-lg-2">
        <button onClick={()=>{
            editTodo(props.id,newVal)
            setIsEditing()     
               }} className="btn btn-success mx-2 float-start">Finish</button></div></div>
               
        {/* <button className="btn btn-danger mx-2 float-start">Cancel</button> */}
        </div>:
                <div id={props.id} key={props.id} className={"border p-2 m-2 shadow h4"}>{props.todo.name}
        <button onClick={removeTodo} className={`float-end 
        btn text-decoration-none `} >
        ❌</button>
        <button onClick={setIsEditing} className=" float-end btn text-decoration-none ">✏️</button></div>

        }
    </div>

    )
}
export default Todo