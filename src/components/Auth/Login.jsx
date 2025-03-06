import React from "react";
import "./Login.css";
import { useState } from "react";


const Login = () =>{

    const[email, setEmail] = useState("")

    const[password, setPassword] = useState("")

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log("email is", email)
        console.log('password is', password)

        setEmail("")
        setPassword("")
        
    }



    return (
        <div className="LoginContainer">
            <div className="OuterContainer">
                <form 
                className="InnerLoginContainer"
                onSubmit ={(e)=>{
                    submitHandler(e)}}
                >

                    <input
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    className="EmailContainer"
                    type="email" 
                    placeholder="Enter the Email"/>
                    
                    
                    <input
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}} 
                    maxLength={8}
                    className="PasswordContainer"
                    type="password" 
                    placeholder="Enter the Password"/>

                    <button 
                    className="SubmitContainer">
                        Login
                    </button>


                </form>



            </div>

        </div>
    )

}

export default Login;