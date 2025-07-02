import "./login.css";
import { useState } from "react"
import axios from "axios";

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleOnSubmit(e){
       e.preventDefault()
       console.log(email, password)

       axios.post("http://localhost:3004/users/login",
        {
            email : email,
            password : password
        }
       ).then((res)=>{
        console.log(res)
       }).catch((err)=>{
        console.log(err)
       })
    }

    return(
        <div className="bg-picture w-full h-screen flex justify-center items-center">
            <form onSubmit={handleOnSubmit}>
            <div className="w-[400px] h-[400px] backdrop-blur-xl rounded-2xl flex flex-col justify-center items-center relative gap-6">
                <img src="./audio-logo.png" alt="logo" className="w-[100px] h-[100px] object-cover" />
                <input type="email" placeholder="Email" className="w-[300px] h-[50px] bg-transparent border-b-2 border-white text-white placeholder-white text-xl outline-none" 
                value={email}
                onChange={
                    (e)=>{
                    setEmail(e.target.value)
                }} />
                <input type="password" placeholder="Password" className="mt-6 w-[300px] h-[50px] bg-transparent border-b-2 border-white text-white placeholder-white text-xl outline-none"
                value={password}
                onChange={
                    (e)=>{
                    setPassword(e.target.value)
                }} />
                <button className="w-[300px] h-[50px] bg-[#efac38] text-2xl text-white rounded-lg">Login</button>
            </div>
            </form>
        </div>
    )
}