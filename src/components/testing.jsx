import { useState } from "react"

export default function Testing(){
    const[file,setFile] = useState(0)

    return(
   <div className="w-full h-screen flex flex-col items-center justify-center">
    <input type="file" onChange={(e)>=console.log(e)} />
    <button className="w-[200px] h-[50px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
        Upload
    </button>
    </div>
    
    )
}