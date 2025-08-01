import {Link} from "react-router-dom";
export default function ProductCard({ item }) {
    return (
        <div className="w-[300px] m-2 rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 relative">
            <img
                className="w-full h-56 object-cover"
                src={item.image[0]}
                alt={item.name}
            />
            <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h2>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>

                <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-semibold text-blue-600">Rs. {item.price}</span>
                    <span className={`text-sm font-medium ${item.availability ? 'text-green-600' : 'text-red-500'}`}>
                        {item.availability ? 'In Stock' : 'Out of Stock'}
                    </span>
                </div>

                <div className="text-xs text-gray-500">
                    <p><span className="font-medium">Category:</span> {item.category}</p>
                    <p><span className="font-medium">Dimensions:</span> {item.dimensions}</p>
                </div>
                <div>
                    <Link to={`/product/${item.key}`}  // ← fix: add slash between product and key
                    className="w-[90%] bg-blue-500 h-[40px] rounded-xl text-white mt-4 hover:bg-blue-600 transition absolute bottom-3 text-center flex items-center justify-center"> 
                    View Details
                    </Link>
                </div>

            </div>
        </div>
    );
}
