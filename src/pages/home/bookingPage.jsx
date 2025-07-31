import { useState } from "react"
import { loadCart } from "../../utils/cart"
import Header from "../../components/header";
import BookingItem from "../../components/bookingItem";

export default function BookingPage(){
    const [cart, setCart] = useState(loadCart());

    function reloadCart(){
        setCart(loadCart());
    }

    return(
        <div className="w-full h-full flex flex-col items-center p-4" >
            <h1 className="text-xl fond-bold mb-4">Create Booking Page</h1>
            <div className="w-full flex flex-col items-start space-y-2">
                {
                    cart.orderedItems.map((item)=>{
                        return <BookingItem itemKey={item.key} key={item.key} qty={item.qty} refresh={reloadCart}/>
                    })
                }
            </div>
        </div>
    )
}