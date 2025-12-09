import { FaStar } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";

function SliderCard({ heading = "Greek Salad with Lettuce", rating = 4.5, para = "The Mediterranean charm in our Greek Salad with Lettuce - fresh industry salad bowl.", price = "$4.00", image = "/sliderimgs/product1.png" }) {
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div className="h-[75vh] w-[600px] flex flex-col items-center justify-center">
                {/* Corrected the img src */}
                <img src={image} alt={heading} className="size-40 z-10" />
                <div className="border bg-white/60 h-[60vh] -mt-4 rounded-2xl w-[60%] flex flex-col items-center justify-evenly hover:scale-110">
                    <div className="flex items-center gap-4 w-full">
                        <FaStar className="ml-4 text-4xl text-gray-60" />
                        <h1 className="text-4xl text-red-500 font-semibold">{rating}</h1>
                    </div>
                    <h1 className="text-[35px] font-bold px-5">{heading}</h1>
                    <p className="text-2xl font-semibold w-[87%] text-gray-500">{para}</p>
                    <div className="flex items-center justify-between w-[90%]">
                        <h1 className="text-3xl font-semibold text-gray-700">{price}</h1>
                        <FaPlusSquare className="text-4xl font-semibold text-red-500" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderCard;
