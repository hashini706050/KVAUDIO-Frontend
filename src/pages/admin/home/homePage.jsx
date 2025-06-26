import {Route, Routes } from "react-router-dom";
import Header from "../../../components/header";
import Items from "./items";
import Contact from "./contact";
import Gallery from "./gallery";
import ErrorNotFound from "./error";

export default function HomePage(){
    return(
        <>
        <Header />
           <div className="h-[calc(100vh-100px)] w-full">
            <Routes path="/*">
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/items" element={<Items />} />
                <Route path="/*" element={<ErrorNotFound />} />
            </Routes>
           </div>
        
        </>
           
    )
}