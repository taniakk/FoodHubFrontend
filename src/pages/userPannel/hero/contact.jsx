import { Link } from "react-router-dom"
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
function Contact(){
    return(
        <div className=" h-auto w-full flex flex-col items-center justify-center py-20">
            <div className="my-10 shadow-2xl bg-[url('/images/contactbg1.jpg')] bg-cover bg-center object-contain h-[40vh] 
            w-[60%] rounded-full
             flex flex-col items-center justify-center">
                <h1 className="text-[45px] text-green-800 font-bold">Contact Us</h1>
                <div className="flex text-2xl">
                    <h1 className="px-4 text-green-800 font-semibold"><Link to={'/'}>Home</Link></h1>  |
                    <h1 className="px-4 text-gray-700 font-semibold"> Contact</h1>
                </div>
                
            </div>
            <div className="bg-white h-[80vh] w-full flex items-center justify-center">
                <div className=" h-auto py-2 w-[35%] flex flex-col items-center justify-center">
                    <h1 className="py-2 bg-gray-300 self-start  px-6 rounded-3xl text-[15px] text-black">We're here 7 days a week</h1>
                    <h1 className="self-start py-4 text-4xl font-semibold text-gray-800">Let’s build your next health win together</h1>
                    <p className="py-2 w-[500px] self-start text-[20px] text-gray-400">Reach out for custom meal plans, product questions, or partnership opportunities.
                         A nutrition specialist will respond within one business day.</p>
                         <div className="h-[200px] w-full self-start  flex items-center justify-between">
                            <div className="shadow-2xl  h-[120px] w-[150px] rounded-2xl flex flex-col items-center
                             justify-evenly">
                                <h1 className="text-gray-600 text-[20px] w-[100px] tracking-wider">AVG. RESPONSE</h1>
                                <h1 className="text-black font-semibold text-2xl">4h</h1>

                            </div>
                            <div className="shadow-2xl  h-[120px] w-[150px] rounded-2xl flex flex-col
                             items-center justify-evenly">
                                <h1 className="text-gray-600 text-[20px] w-[100px] tracking-wider">CLIENTS HELPED</h1>
                                <h1 className="text-black font-semibold text-2xl">12k+</h1>

                            </div>
                            <div className="shadow-2xl  h-[120px] w-[150px] rounded-2xl flex flex-col
                             items-center justify-evenly">
                                <h1 className="text-gray-600 text-[20px] w-[100px] tracking-wider">OFFICES</h1>
                                <h1 className="text-black font-semibold text-2xl">3 cities</h1>

                            </div>
                         </div>

                </div>
                <div className="border h-[70vh] gap-5 w-[30%] rounded-3xl flex flex-col  justify-center ml-4">
                    <h1 className="text-4xl ml-6 text-green-700 font-bold ">Studio Schedule</h1>
                    <div className="flex items-center w-[400px] justify-between h-[50px]  py-2
                     text-gray-600 font-semibold" >
                        <h1 className="ml-8">Monday – Friday</h1>
                        <h1>08:00 – 18:00</h1>
                         </div>
                         <hr className="w-[360px] text-gray-600 ml-10"/>
                         <div className="flex items-center w-[400px] justify-between h-[50px]  py-2
                     text-gray-600 font-semibold" >
                        <h1 className="ml-8">Saturday</h1>
                        <h1>08:00 – 16:00</h1>
                         </div>
                         <hr className="text-gray-600 w-[360px] ml-10"/>
                         <div className="flex items-center w-[400px] justify-between h-[50px]  py-2
                     text-gray-600 font-semibold" >
                        <h1 className="ml-8">Sunday</h1>
                        <h1>Closed</h1>
                         </div>
                         {/* <hr className="text-gray-600 w-[360px] ml-10"/> */}

                         <h1 className="font-semibold text-black text-[20px] ml-5">Visit, call, or write</h1>
                         <div className="flex items-center justify-evenly w-[350px]"> <IoLocationOutline />
                         <h1>53 Main Street, 2nd Mountain, New York</h1>
                         </div>
                         <div className="flex items-center justify-evenly w-[350px]">
                         <FaPhone />
                         <h1>+000 (000) 000 00</h1>
                         </div>
                         <div className="flex items-center justify-evenly w-[350px]">
                         <MdEmail />
                         <h1>support@terraeats.com</h1>
                         </div>
                    

                </div>

                </div>
        </div>
    )
}

export default Contact