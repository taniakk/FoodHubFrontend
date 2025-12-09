import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { Link } from "react-router-dom";
function Nav(){
    const [open ,setOpen] = useState(false)
    return(
        < div className="lg:py-5 py-6">
         <div className="w-[50%] lg:w-[80%] mx-auto border lg:border-0  rounded-full bg-gray-100 h-[10vh] flex items-center justify-center relative shadow-lg">
            
            <ul className={` lg:w-[90%] lg:flex   absolute lg:static text-xl mx-auto  ${open ? "flex" : "hidden"}  lg:flex-row flex-col  items-center justify-center lg:justify-between   bg-white/90 lg:bg-transparent top-15  -right-8 p-7 lg:p-0 rounded-4xl lg:rounded-none z-30 `}>
                <li className="flex gap-3 lg:gap-13 flex-col lg:flex-row ">
                    <li className="hover:scale-110 hover:border-b-2"><Link to={'/'}>Home</Link></li>
                    <li className="hover:scale-110 hover:border-b-2">About</li>
                    <li className="hover:scale-110 hover:border-b-2"><Link to={'/nproducts'}>Product</Link></li>
                    <li className="hover:scale-110 hover:border-b-2">Menu</li>
                </li>
                <li className="flex gap-3 lg:gap-13 flex-col lg:flex-row">
                     <li className="hover:scale-110 hover:border-b-2 mt-3 lg:mt-0"><Link to={'/contact'}>Contact</Link></li>
                      <li className="hover:scale-110 hover:border-b-2">Profile</li>
                       <li className="hover:scale-110 hover:border-b-2"><Link to={'/signin'}>SignIn</Link></li>
                        <li className="hover:scale-110 hover:border-b-2"><Link to={'/signup'}>SignUp</Link></li>
                </li>
            </ul>
            <FaHamburger className="size-7 lg:hidden block ml-20 relative hover:scale-110 active:scale-90"  onClick={()=>setOpen(!open)}/>

        </div>
        <div className="absolute  top-1 bg-white left-[90px] lg:left-[45%] lg:right-[45%] h-[120px] w-[120px] shadow-2xl flex items-center justify-center rounded-full">
                <img className="h-[70px] object-contain mx-auto" src="" alt="" srcset="/images/foodlogo.png" />
            </div>
        
        </ div>
       
    )
}

export default Nav