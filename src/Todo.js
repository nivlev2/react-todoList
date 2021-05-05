import tools from "./hooks/FormTools"
function Todo (props){
    // const clName = props.onEdit ? 'form-control':''
    // const cl = `border p-2 m-2 shadow h4 ${clName}`
    console.log(props.todo.name);
    const papy = props.todo.name
    const [newVal,setVal] = tools(papy)
     return (
        <div className="text-start">
        {props.onEdit ?<div> <input value={newVal} onChange={setVal}  type="text" className=" float-start form-control w-50"/>
        <button onClick={()=>{
            props.edit(props.todo.id,newVal)
            props.togleOnEdit()
        }} className="btn btn-success mx-2 float-start">Finish</button>
        {/* <button className="btn btn-danger mx-2 float-start">Cancel</button> */}
        </div>:
                <div id={props.todo.id} key={props.todo.id} className={"border p-2 m-2 shadow h4"}>{props.todo.name}
        <button onClick={props.removeTodo} className={`float-end btn text-decoration-none `} >
        ❌</button>
        <button onClick={props.togleOnEdit} className=" float-end btn text-decoration-none ">✏️</button></div>

        }
    </div>

    )
}
export default Todo