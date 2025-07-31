import { useEffect, useState } from "react";
import axios from "axios";
import { addToCart, removeFromCart } from "../utils/cart";
import { FaArrowDown, FaArrowUp, FaTrash } from "react-icons/fa";

export default function BookingItem({ itemKey, qty, refresh }){
    const [item, setItem] = useState(null);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/products/${itemKey}`;
    const token = localStorage.getItem("token"); // 🔑 Get token from local storage
    console.log("Fetching product from URL:", url);

    axios
        .get(url, {
            headers: {
                Authorization: `Bearer ${token}`, // ✅ Add Authorization header
            },
        })
        .then((res) => {
            console.log("Product data:", res.data);
            setItem(res.data);
            setStatus("success");
        })
        .catch((err) => {
            console.error("Error fetching product:", err);
            setStatus("error");
            removeFromCart(itemKey);
            refresh();
        });
}, [status]);

    if (status === "loading") {
		return <div className="text-accent">Loading...</div>;
	}

	if (status === "error") {
		return <div className="text-red-500">Failed to load product.</div>;
	}



    return (
	<div className="flex w-[650px] my-4 items-center gap-4 p-4 bg-white shadow-lg rounded-xl border border-gray-300 relative">
  {/* Delete Button */}
  <div className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 text-red-500 hover:text-white hover:bg-red-500 p-2 rounded-full cursor-pointer">
    <FaTrash
      onClick={() => {
        removeFromCart(itemKey);
        refresh();
      }}
    />
  </div>

  {/* Product Image */}
  <img
    src={item.image[0]}
    alt={item.name}
    className="w-24 h-24 object-cover rounded-xl border border-gray-300"
  />

  {/* Product Details */}
  <div className="flex flex-col flex-grow">
    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>

    <div className="flex items-center justify-between mt-3">
      {/* Unit Price */}
      <p className="w-24 text-center text-gray-600 font-medium">
        Rs {item.price.toFixed(2)}
      </p>

      {/* Quantity Controls */}
      <div className="flex flex-col items-center w-16 text-center">
        <button
          className="text-blue-600 hover:text-blue-800"
          onClick={() => {
            addToCart(itemKey, 1);
            refresh();
          }}
        >
          <FaArrowUp />
        </button>
        <span className="text-lg font-semibold">{qty}</span>
        <button
          className="text-blue-600 hover:text-blue-800"
          onClick={() => {
            if (qty === 1) {
              removeFromCart(itemKey);
              refresh();
            } else {
              addToCart(itemKey, -1);
              refresh();
            }
          }}
        >
          <FaArrowDown />
        </button>
      </div>

      {/* Total Price */}
      <p className="w-28 text-right font-semibold text-green-600 text-lg">
        Rs {(item.price * qty).toFixed(2)}
      </p>
    </div>
  </div>
</div>

	);
}
