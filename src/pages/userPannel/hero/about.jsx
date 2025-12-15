import { Link } from "react-router-dom"

function About(){
    return(
        <div className=" h-auto w-full flex flex-col items-center justify-center py-20 ">
            <div className="mb-6 shadow-2xl bg-[url('/images/contactbg1.jpg')] bg-cover bg-center object-contain h-[20vh] lg:h-[35vh] 
            w-[70%] lg:w-[60%] rounded-full
             flex flex-col items-center justify-center">
                <h1 className="text-[45px] text-green-800 font-bold">About Us</h1>
                <div className="flex text-2xl">
                    <h1 className="px-4 text-green-800 font-semibold"><Link to={'/'}>Home</Link></h1>  |
                    <h1 className="px-4 text-gray-700 font-semibold">About</h1>
                </div>
                
            </div>

        </div>
    )
}

export default About