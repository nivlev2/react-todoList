import {useState} from 'react'

function ToggleState(intialVal){
    const [state,setState] = useState(intialVal)
    const toggleState = () =>{
        setState(!state)
    }
    return [state, toggleState]
}
export default ToggleState