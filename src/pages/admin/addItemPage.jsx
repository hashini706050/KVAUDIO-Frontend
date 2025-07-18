import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import mediaUpload from "../../utils/mediaUpload";


export default function AddItemsPage() {
  const [productKey, setProductKey] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [productCategory, setProductCategory] = useState("Audio");
  const [productDimensions, setProductDimensions] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImages, setProductImages] = useState([]);
  const navigate = useNavigate()

  async function handleAddItem(){
    console.log(productImages)
    const promises = []
    for(let i=0; i < productImages.length; i++){
      console.log(productImages[i])
      const promise = mediaUpload(productImages[i])
      promises.push(promise)
      if(i == 5){
        toast.error("You can only upload 5 images at a time");
        break;
      }
    }

    console.log(productKey,productName,price,productCategory,productDimensions,productDescription)

    const token = localStorage.getItem("token") 

    if(token){
      try{

      const imageUrls = await Promise.all(promises)

      const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/products`,
       {
        key : productKey,
        name : productName,
        price : price,
        category : productCategory,
        dimensions : productDimensions,
        description : productDescription,
        image : imageUrls
       }, {
        headers : {
          Authorization : "Bearer " + token
        }
       }
      );
      toast.success(result.data.message)
      navigate("/admin/items")
        }catch(err){
          console.log(err)
          toast.error(err.response.data.error)
        }
    }else{
      toast.error("You are not authorized to add item")
    }

  }
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Add Items</h1>
      <div className="w-[400px] border p-6 flex flex-col items-center gap-4 rounded-lg shadow-md">
        
        <input
          type="text"
          placeholder="Product Key"
          className="w-full p-2 border rounded"
          value={productKey}
          onChange={(e) => setProductKey(e.target.value)}
        />

        <input
          type="text"
          placeholder="Product Name"
          className="w-full p-2 border rounded"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Product Price"
          className="w-full p-2 border rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <select
          className="w-full p-2 border rounded"
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
        >
          <option value="Audio">Audio</option>
          <option value="Lights">Lights</option>
        </select>

        <input
          type="text"
          placeholder="Product Dimensions"
          className="w-full p-2 border rounded"
          value={productDimensions}
          onChange={(e) => setProductDimensions(e.target.value)}
        />

        <textarea
          type="text"
          placeholder="Product Description"
          className="w-full p-2 border rounded"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />

        <input type="file" multiple className="w-full p-2 border-rounded"
        onChange={(e) => setProductImages(e.target.files)}
        />

        <button onClick={handleAddItem} className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
          Add
        </button>
        <button onClick={ () => {
          navigate("/admin/items")
        }}className="w-full p-2 bg-red-500 hover:bg-red-600">
          Cancel
        </button>
      </div>
    </div>
  );
}
