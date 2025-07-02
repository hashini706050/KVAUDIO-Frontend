import { useState } from "react"

export default function Testing(){
    const[count,setCount] = useState(0)
    const  [itemName, setItemName] = useState("Coconut")

    return(
   <div className="w-full h-screen flex flex-col items-center justify-center">

        <h1 className=" text-9xl">{count} {itemName}s</h1>

        <button className="w-[200px] h-[60px] bg-black text-3xl  text-white rounded-lg"onClick={
            ()=>{
        const newcount = count + 1
        setCount(newcount)
        }}>
        count
        </button>
        <div className="w-full flex justify-evenly items-center p-4">
            <button className="w-[200px] h-[60px] bg-black text-3xl text-white rounded-lg" onClick={ () => {
                setItemName("Coconut")
            }}>
            Cocunut
            </button>
            <button className="w-[200px] h-[60px] bg-black text-3xl text-white rounded-lg" onClick={ () => {
                setItemName("Apple")
            }}>
            Banana
            </button>
            <button className="w-[200px] h-[60px] bg-black text-3xl text-white rounded-lg" onClick={ () => {
                setItemName("Apple")
            }}>
            Apple
            </button>
            <button className="w-[200px] h-[60px] bg-black text-3xl text-white rounded-lg" onClick={ () => {
                setItemName("Other")
            }}>
            Other
            </button>
        </div>
    </div>
    
    )
}