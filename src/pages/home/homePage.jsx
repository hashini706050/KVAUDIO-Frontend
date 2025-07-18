import {Route, Routes } from "react-router-dom";
import Header from "../../components/header";
import Items from "./items";
import Contact from "./contact";
import Gallery from "./gallery";
import ErrorNotFound from "./error";
import Home from "./home";
import RegisterPage from "../register/register";
import ProductOverview from "./productOverviewPage";

export default function HomePage(){
    return(
        <>
        <Header />
           <div className="h-[calc(100vh-100px)] w-full">
            <Routes path="/*">
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/items" element={<Items />} />
                <Route path="/product/:key" element={<ProductOverview />} /> 
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<ErrorNotFound />} />
                <Route path="/register" element={<RegisterPage/>} />
            </Routes>
           </div>
        
        </>
           
    )
}