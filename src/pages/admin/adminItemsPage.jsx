const sampleArr = [
  {
    key: "AUDIO001",
    name: "Wireless Bluetooth Speaker",
    price: 15999,
    category: "Audio",
    dimensions: "15cm x 10cm x 8cm",
    description: "Portable speaker with powerful bass and 10 hours of battery life.",
    availability: true,
    image: [
      "https://example.com/images/speaker1.jpg",
      "https://example.com/images/speaker2.jpg"
    ]
  },
  {
    key: "LIGHTS001",
    name: "RGB LED Light Strip",
    price: 3499,
    category: "Lights",
    dimensions: "5m length",
    description: "Color-changing LED strip with remote control.",
    availability: true,
    image: [
      "https://example.com/images/led1.jpg"
    ]
  },
  {
    key: "AUDIO002",
    name: "Studio Headphones",
    price: 18999,
    category: "Audio",
    dimensions: "20cm x 18cm x 10cm",
    description: "High-quality over-ear headphones for professional audio mixing.",
    availability: false,
    image: [
      "https://example.com/images/headphones.jpg"
    ]
  }
];


import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function AdminItemsPage(){
  const [items, setItems] = useState(sampleArr)

    return(
        <div className="w-full h-full relative">
          <table>
            <thead>
              <th>Key</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Dimension</th>
              <th>Availability</th>
            </thead>
            <tbody>
              {
              items.map((product)=>{
                console.log(product)
                return(
                <tr key={product.key}>
                  <td>{product.key}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.dimensions}</td>
                  <td>{product.availability ? "Yes" : "No"}</td>
                </tr>
              )
              })
              
            }
            </tbody>
          </table>
        <Link to="/admin/items/add">
          <CiCirclePlus className="text-[70px] absolute right-2 bottom-2 hover:text-red-900 cursor-pointer" />
        </Link> 
        </div>
    )
}