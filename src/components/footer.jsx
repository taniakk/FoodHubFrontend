import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
function Footer(){
    return(
        <div className="bg-white/50 h-auto py-10 w-full flex flex-col items-center justify-evenly relative">
            <div className="bg-white/60 py-6 flex flex-col lg:flex-row  items-center justify-evenly lg:h-[140px] shadow-2xl
              lg:w-[70%] absolute -top-25 gap-5 lg:gap-0 rounded-2xl border border-[#6B8E23]">
                <h1 className="font-bold text-[20px] px-5 lg:px-0 lg:text-[30px] w-[400px]">Sign Up To Get Updates & News About Us.</h1>
                <input className="border border-gray-700 p-2 lg:p-4 lg:text-[20px] rounded-xl placeholder-gray-700 " type="text" placeholder="placeholder" />
                <button className="border p-2 lg:p-4 bg-[#6B8E23] hover:bg-white hover:text-gray-800 text-white rounded-2xl text-[20px] w-[150px] font-semibold">Subscribe</button>
             </div>
            <div className="flex flex-col lg:flex-row items-center justify-evenly">
            <div className=" h-auto  w-[80%] py-28 lg:py-0 lg:w-[25%] flex flex-col justify-center">
               <div className=""><img src="" alt="" srcset="/images/foodlogo.png" className="ml-25 my-2 h-[100px]"/></div> 
               <p className="text-gray-600 text-[20px]">Welcome to Green Eats, where every meal is a journey into wholesome indulgence. Our commitment to fresh,
                 sustainable ingredients transforms dining into an experience.</p>
                 <div className="h-[100px] lg:w-[80%] flex items-center justify-between">
                   <FaFacebookF  className="text-white size-12 p-2 bg-[#6B8E23] hover:scale-110 rounded-xl"/>
                    <FaTwitter className="text-white size-12 p-2 bg-[#6B8E23] hover:scale-110 rounded-xl" />
                    <FaLinkedinIn className="text-white size-12 p-2 bg-[#6B8E23] hover:scale-110 rounded-xl"/>
                    <FaInstagram className="text-white size-12 p-2 bg-[#6B8E23] hover:scale-110 rounded-xl"/>

                 </div>
            </div>
            <div className=" h-auto lg:w-[20%] flex flex-col justify-center list-none">
                <h1 className="text-[30px] font-bold py-2">Quick Links</h1>
                <li className="text-gray-600 text-[20px]">About Us</li>
                <li className="text-gray-600 text-[20px]">Portfolio</li>
                <li className="text-gray-600 text-[20px]">Help & FAQ's</li>
                <li className="text-gray-600 text-[20px]">Blog</li>
                <li className="text-gray-600 text-[20px]">Contact Us</li>
            </div>
            <div className="py-6 lg:py-0 px-4 lg:px-0 h-auto lg:w-[30%] flex flex-col justify-center gap-4 lg:gap-0 ">
                <h1 className="text-[30px] font-bold text-center lg:self-start">Contact Us</h1>
                <div className=" lg:h-[100px] lg:w-full gap-5 flex items-center justify-center">
                    <FaLocationDot className="text-white size-12 p-2 bg-[#6B8E23] hover:scale-110 rounded-xl"/>
                    <h1 className="text-[20px] text-gray-600">53 Main Street, 2nd Mountain 3rd Floor, Amritsar</h1>
                </div>
                <div className="self-start lg:text-center lg:h-[100px]  lg:w-[51%] gap-5 flex items-center justify-center">
                    <FaPhone  className="text-white size-12  p-2 bg-[#6B8E23] hover:scale-110 rounded-xl"/>
                    <h1 className="text-[20px] text-gray-600">+910 (000) 000 00</h1>
                </div>
                <div className="self-start lg:text-center lg:h-[100px] lg:w-[55%] gap-5 flex items-center justify-center">
                    <MdEmail className="text-white size-12 p-2 bg-[#6B8E23] hover:scale-110 rounded-xl"/>
                    <h1 className="text-[20px] text-gray-600">support@gmail.com</h1>
                </div>

            </div>
            </div>
            <div className="lg:h-[100px] w-full gap-4 flex flex-col items-center justify-center">
                <hr className=" w-[80%]  text-gray-700 "/>
                <h1 className="text-[20px] lg:text-2xl">Copyright © 2025. All Rights Reserved</h1>
                <h3 className="text-gray-700">Terms and Conditions | Privacy Policy</h3>
            </div>
            

        </div>
    )
}

export default Footer