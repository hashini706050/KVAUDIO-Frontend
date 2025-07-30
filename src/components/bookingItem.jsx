import { useEffect, useState } from "react";
import axios from "axios";
import { addToCart, removeFromCart } from "../utils/cart";

export default function BookingItem({ itemKey, qty, refresh }){
    const [item, setItem] = useState(null);
    const [status, setStatus] = useState("loading");

    return (
    <div className="w-full flex flex-row items-center">
      <span>{itemKey}</span>
      <span> x {qty}</span>
    </div>
  );
}