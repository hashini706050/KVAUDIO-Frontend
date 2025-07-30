import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; 
import Header from "../../components/header";
import ImageSlider from "../../components/imageSlider";
import { addToCart, loadCart } from "../../utils/cart";

export default function ProductOverview(){

    const params = useParams();
    const key = params.key;

    const [loadingStatus, setLoadingStatus] = useState("loading");
    const [product, setProduct] = useState([]);
   
    useEffect(()=>{
        const token = localStorage.getItem("token");

        axios.get(`${import.meta.env.VITE_BACKEND_URL}/products/${key}`, {
             headers: {
            Authorization: `Bearer ${token}`
        }
        }).then((res)=>{
            setProduct(res.data)
            setLoadingStatus("Loaded");
            
        }).catch((err)=>{
            console.log(err);
            setLoadingStatus("error")
        })
    },[key]);

    console.log(key)

  return (
  <>
    <Header />
    <div className="w-full h-screen flex items-center justify-center">
      {loadingStatus === "loading" && (
        <div className="w-[100px] h-[100px] border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      )}

      {loadingStatus == "Loaded" && (
        <div className="w-full h-full flex justify-center items-center flex col">
            <div className="w-[49%] h-full">
                <ImageSlider images={product.image}/>
            </div>

            <div className="w-[49%] h-full flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold text-accent">{product.name}</h1>
                <h2 className="text-xl font-semibold text-gray-800">{product.category}</h2>
                <p className="text-gray-700 mt-4">{product.description}</p>
                <p className="text-lg font-bold text-green-500">{product.price}</p>
                <div className="mt-4 text-5m text-gray-600">
                    <span className="font-medium">Dimensions:</span>{product.dimensions}
                </div> 
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md" onClick={()=>{
                  addToCart(product.key, 1);
                  console.log(loadCart());
                }}>
                  Add to Cart
                </button>
                </div>
              </div>
        )}
      {
        loadingStatus == "error" && <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-2xl text-red-600">Error Occured</h1>
        </div>
      }
    </div>
  </>
);


}