import {useState} from "react"
export default (input) =>{
    const [value,setValue] = useState(input)
    const handleInput = (e)=>{
        setValue(e.target.value)
    }
    const reset = ()=>{
        value = ""
    }
    return [value,handleInput]
}