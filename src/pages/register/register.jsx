import axios from "axios";
import "./register.css";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();


    function handleOnSubmit(e) {
        e.preventDefault();
        console.log({ email, password, firstname, lastname, address, phone });

        axios.post(`${import.meta.env.VITE_BACKEND_URL}/users` ,{
            email: email,
            firstName: firstname,
            lastName: lastname,
            password: password,
            address: address,
            phone: phone,
        }).then((res)=>{
            toast.success("Registration Success")
            navigate("/login")
        }).catch((err)=>{
            toast.error(err?.response?.data?.error || "An error occured")
        })
    }

    return (
        <div className="bg-picture h-screen flex justify-center items-center">
            <form onSubmit={handleOnSubmit}>
                <div className="w-[400px] h-[600px] backdrop-blur-xl rounded-2xl flex flex-col justify-center items-center gap-4 relative">
                    <img src="./audio-logo.png" alt="logo" className="w-[80px] h-[80px] object-cover mb-2" />
                    
                    <input type="text" placeholder="First Name" className="w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white placeholder-white text-lg outline-none"
                        value={firstname} onChange={(e) => setFirstname(e.target.value)} />

                    <input type="text" placeholder="Last Name" className="w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white placeholder-white text-lg outline-none"
                        value={lastname} onChange={(e) => setLastname(e.target.value)} />

                    <input type="text" placeholder="Address" className="w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white placeholder-white text-lg outline-none"
                        value={address} onChange={(e) => setAddress(e.target.value)} />

                    <input type="text" placeholder="Phone" className="w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white placeholder-white text-lg outline-none"
                        value={phone} onChange={(e) => setPhone(e.target.value)} />

                    <input type="email" placeholder="Email" className="w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white placeholder-white text-lg outline-none"
                        value={email} onChange={(e) => setEmail(e.target.value)} />

                    <input type="password" placeholder="Password" className="w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white placeholder-white text-lg outline-none"
                        value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button className="mt-4 w-[300px] h-[45px] bg-[#efac38] text-xl text-white rounded-lg">Register</button>
                </div>
            </form>
        </div>
    );
}
