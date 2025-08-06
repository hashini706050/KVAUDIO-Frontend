import axios from "axios";
import { useEffect, useState } from "react";
import mediaUpload from "../../utils/mediaUpload";
import { IoMdCloseCircleOutline } from "react-icons/io";


export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeOrder, setActiveOrder] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);

 useEffect(() => {
		const fetchOrders = async () => {
			try {
				const token = localStorage.getItem("token");
				const res = await axios.get(
					`${import.meta.env.VITE_BACKEND_URL}/orders`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				console.log(res.data);
				setOrders(res.data);
			} catch (error) {
				console.error("Error fetching orders:", error);
			} finally {
				setLoading(false);
			}
		};
		if (loading) {
			fetchOrders();
		}
	}, [loading]);

 
function handleOrderStatusChange(orderId, status) {
        const token = localStorage.getItem("token");
        console.log(orderId, status);
        axios.put(
            `${import.meta.env.VITE_BACKEND_URL}/orders/status/${orderId}`,
            {
                status: status,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        ).then(()=>{
            console.log("Order status updated");
            setModalOpened(false);
            setLoading(true);
        }).catch((err)=>{
            console.error(err);
            setLoading(true);
        })
    }
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Admin Orders Page</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full table-auto border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-2 py-1">Order ID</th>
              <th className="border px-2 py-1">Email</th>
              <th className="border px-2 py-1">Start Date</th>
              <th className="border px-2 py-1">End Date</th>
              <th className="border px-2 py-1">Days</th>
              <th className="border px-2 py-1">Total</th>
              <th className="border px-2 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr className="cursor-pointer" key={order._id} onClick={()=>{
                setActiveOrder(order);
                setModalOpened(true);
              }}>
                <td className="border px-2 py-1">{order.orderId}</td>
                <td className="border px-2 py-1">{order.email}</td>
                <td className="border px-2 py-1">{new Date(order.startingDate).toLocaleDateString()}</td>
                <td className="border px-2 py-1">{new Date(order.endingDate).toLocaleDateString()}</td>
                <td className="border px-2 py-1">{order.days}</td>
                <td className="border px-2 py-1">Rs. {order.totalAmount.toLocaleString()}</td>
                <td className="border px-2 py-1">{order.status}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {
  modalOpened && (
    <div className="fixed top-0 left-0 w-full h-full bg-[#00000075] flex justify-center items-center">
      <div className="w-[500px] bg-white p-4 rounded-lg shadow-lg relative">
        <IoMdCloseCircleOutline className="absolute top-2 right-2 text-3xl cursor-pointer hover:text-red-900" onClick={()=>setModalOpened(false)}/>
        <h1 className="text-2xl font-semibold mb-4">Order Details</h1>
        <div className="flex flex-col gap-2">
          <p><span className="font-semibold">Order ID:</span> {activeOrder.orderId}</p>
          <p><span className="font-semibold">Email:</span> {activeOrder.email}</p>
          <p><span className="font-semibold">Days:</span> {activeOrder.days}</p>
          <p><span className="font-semibold">Starting Date:</span> {new Date(activeOrder.startingDate).toLocaleDateString()}</p>
          <p><span className="font-semibold">Ending Date:</span> {new Date(activeOrder.endingDate).toLocaleDateString()}</p>
          <p><span className="font-semibold">Total Amount:</span> {activeOrder.totalAmount.toFixed(2)}</p>
          <p><span className="font-semibold">Approval Status:</span> {activeOrder.status.charAt(0).toUpperCase() + activeOrder.status.slice(1)}</p>
          <p><span className="font-semibold">Order Date:</span> {new Date(activeOrder.orderDate).toLocaleDateString()}</p>
        </div>
        <div className="w-full flex justify-center items-center my-3">
          <button 
          onClick={()=>{
              handleOrderStatusChange(activeOrder.orderId, "approved")
          }}
          className="flex bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-700">Approve</button>
          <button 
          onClick={()=>{
              handleOrderStatusChange(activeOrder.orderId, "rejected")
          }}
          className="flex bg-red-500 text-white px-6 py-1 rounded-md ml-4 hover:bg-red-700">Reject</button>
        </div>
        <table className="w-full mt-4">
          <thead className="bg-gray-100">
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {activeOrder.orderedItems.map((item) => {
									return (
										<tr key={item.product.key}>
											<td>
												<img
													src={item.product.image}
													alt={item.product.name}
													className="w-10 h-10"
												/>
											</td>
											<td>{item.product.name}</td>
											<td>{item.quantity}</td>
											<td>{item.product.price}</td>
										</tr>
									);
								})}
          </tbody>
        </table>
      </div>
     
    </div>
  )
}

      
    </div>
  );
}
