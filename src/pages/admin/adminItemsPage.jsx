import axios from "axios";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

export default function AdminItemsPage() {
  const [items, setItems] = useState([]);
  const [itemsLoaded, setItemsLoaded] = useState(false);

  const navigate = useNavigate();

 useEffect(() => {
  if (!itemsLoaded) {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found in localStorage");
      return;
    }

    axios.get(`${import.meta.env.VITE_BACKEND_URL}/products`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
        setItemsLoaded(true);
      })
      .catch((err) => {
        console.log("API error:", err);
      });
  }
}, [itemsLoaded]);


  const handleDelete = (key) => {
    const token = localStorage.getItem("token");

    if (window.confirm("Are you sure you want to delete this item?")) {
      axios.delete(`${import.meta.env.VITE_BACKEND_URL}/products/${key}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(() => {
          setItems(prevItems => prevItems.filter(item => item.key !== key));
          setItemsLoaded(false);
          window.location.reload();
        })
        .catch((err) => {
          console.log("Delete failed:", err);
          alert("Delete failed. Please check your connection or try again.");
        });
    }
  };

  return (
    <div className="w-full min-h-screen p-6 bg-gray-50 flex items-center flex-col">
      {!itemsLoaded &&<div className="border-4 my-4 border-b-green-500 rounded-full animate-spin bg-0 w-[100px] h-[100px]"></div>}
      {itemsLoaded &&<div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 shadow-md bg-white rounded-md">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="px-4 py-3 border-b">Key</th>
              <th className="px-4 py-3 border-b">Name</th>
              <th className="px-4 py-3 border-b">Price (Rs)</th>
              <th className="px-4 py-3 border-b">Category</th>
              <th className="px-4 py-3 border-b">Dimensions</th>
              <th className="px-4 py-3 border-b">Availability</th>
              <th className="px-4 py-3 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((product) => (
              <tr key={product.key} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 border-b">{product.key}</td>
                <td className="px-4 py-3 border-b">{product.name}</td>
                <td className="px-4 py-3 border-b">{product.price}</td>
                <td className="px-4 py-3 border-b">{product.category}</td>
                <td className="px-4 py-3 border-b">{product.dimensions}</td>
                <td className="px-4 py-3 border-b">{product.availability ? "Yes" : "No"}</td>
                <td className="px-4 py-3 border-b flex gap-2 justify-center">
                  <button onClick={()=>{
                    navigate("/admin/items/edit", {state:product})
                  }}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">Edit</button>
                  <button onClick={() => handleDelete(product.key)}  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>}
      
      <Link to="/admin/items/add">
        <CiCirclePlus className="text-[60px] fixed bottom-6 right-6 text-green-700 hover:text-green-900 transition cursor-pointer" />
      </Link>
    </div>
  );
}
