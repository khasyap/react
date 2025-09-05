import { useState } from "react";
import {useNavigate} from "react-router-dom"
function Login(){
    var [username,setUsername]=useState("");
    var[password,setPassword]=useState("");
    var navigate=useNavigate()
    function checkLogin(e){
        e.preventDefault();
        if(password=="12345"){
            alert("Login success")
            navigate("/app/home")
        }
        else{
            alert("Login failed")
        }
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <form action="" onSubmit={checkLogin}>
                        <div className="form-group">
                            <label htmlFor=""className="form-group">Username</label>
                            <input type="text" className="form-control" onChange={(e)=>setUsername(e.target.value)} value={username} name="" id="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor=""className="form-group">Password</label>
                            <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} value={password} name="" id="" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success" type="submit">Login Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login