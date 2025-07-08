import { useEffect, useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";

export default function Items() {
    const [state ,setState] = useState("loading")//loading,success,error
    const [items, setItems] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("token"); // or sessionStorage.getItem("token")
        
        if(state == "loading"){
             axios.get(`${import.meta.env.VITE_BACKEND_URL}/products`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            setItems(res.data);
            setState("success")
        })
        .catch((err) => {
            toast.error(err?.response?.data?.error || "An error occured")
            setState("error")
            console.error(err);
        });
        
    } 
    }, []);

    return (
        <div className="w-full h-full ">
          
        </div>
    );
}
