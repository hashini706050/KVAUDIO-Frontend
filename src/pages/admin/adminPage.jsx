import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineSpeaker } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import {Link, Route, Routes } from "react-router-dom";
import AdminItemsPage from "./adminItemsPage";
import AddItemPage from "./addItemPage";
import UpdateItemsPage from "./updateItemPage";


export default function AdminPage(){
    return(
      <div className="w-full h-screen flex">
            <div className='w-[200px] h-full bg-green-200'>
                    <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
                      <BsGraphDown />
                      Dashboard
                    </button>
                     <Link to="/admin/bookings" className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
                      <FaRegBookmark />
                      Bookings
                    </Link>
                    <Link to="/admin/items" className='w-full h-[40px] text-[25px] font-bold flex justify-center itmes-center'>
                      <MdOutlineSpeaker/>
                      Items
                    </Link>
                    <Link to="/admin/users" className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
                      <FaRegUser/>
                     Users
                    </Link>
                  </div>
                  <div className='w-[calc(100vw-200px)]'>
                    <Routes path="/*">
                      <Route path="/bookings" element={<h1>Booking</h1>} />
                      <Route path="/items" element={<AdminItemsPage />} />
                      <Route path="/users" element={<h1>Users</h1>} />
                      <Route path="/items/add" element={<AddItemPage />} />
                      <Route path="/items/edit" element={<UpdateItemsPage />} /> 
                    </Routes>
                    
                    
                    
            
                  </div>
            </div>      



    )
}