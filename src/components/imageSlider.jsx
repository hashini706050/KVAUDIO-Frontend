import { useState } from "react";

export default function ImageSlider(props){
    const images = props.images; 
    console.log(images)

    const[selectedImage, setSelectedImage] = useState(images[0])
    return (
    <div className="w-full h-full flex flex-col justify-center items-center">
        <img src={selectedImage} alt="product images" className="w-[90%] h-[450px] object-cover" />
        <div className="w-full h-[150px] mt-[20px] flex justify-center">
            {
                images.map((image, index) => {
                    return (
                        <img
                            key={index}
                            src={image}
                            alt="product"
                            className={`w-[100px] h-[100px] mr-[2px] object-cover cursor-pointer ${image === selectedImage ? "border-4 border-accent" : ""}`}
                            onClick={() => setSelectedImage(image)}
                        />
                    );
                })
            }
        </div>
    </div>
);

}