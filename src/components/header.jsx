import {Link} from "react-router-dom";


export default function Header(){
    return(
        <header className="w-full h-[100px] shadow-xl flex justify-center items-center relative bg-accent">
            <img src="audio-logo.png" alt="logo" className="w-[100px] h-[100px] object-cover border-[3px] absolute left-1 rounded-full" />
            <Link to="/" className=" m-1 ">Home</Link>
            <Link to="/contact" className=" m-1">Contact Us</Link>
            <Link to="/gallery" className=" m-1">Gallery</Link>
            <Link to="/items" className=" m-1">Items</Link>
        </header>

    )
}