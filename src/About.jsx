import { useState } from "react"

function About(){
var [username,setUsername]=useState("")
return(
    <>
    <h1>Hello About</h1>
    <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username} name="" id="" />
    <p>{username}</p>
    </>
)
}
export default About