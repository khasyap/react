import { useState } from "react"

function Contact(){
var [counter,setCounter]=useState(0)
    return(
        <>
        <h1>Hello Contact</h1>
        <h2>{counter}</h2>
        <button className="btn btn-success" onClick={()=>setCounter(counter+1)}>Increment</button>
        <button className="btn btn-danger" onClick={()=>setCounter(counter-1)}>Decrement</button>
        <button className="btn btn-warning" onClick={()=>setCounter(0)}>Reset</button>

        </>
    )
}
export default Contact