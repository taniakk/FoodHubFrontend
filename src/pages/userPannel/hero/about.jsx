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
            <div className="lg:h-[90vh] w-full flex flex-col lg:flex-row items-center  gap-30">
                <div className=" lg:h-[90%] w-[60%] self-start  lg:w-[25%] rounded-2xl ">
                    <img src="" alt="" srcset="/aboutimgs/salad2.jpg"  className="lg:h-full  rounded-e-full shadow-2xl"/>
                    

                </div>
                <div className="lg:h-[90%] lg:w-[30%] flex flex-col ">
                    <h1 className="text-gray-600  px-6">OUR MISSION</h1>
                    <h1 className="text-[30px] text-gray-800 font-semibold px-6 py-4">We help you prevent <span className="text-green-800">disease
                         </span> with food as <span className="text-green-800">daily </span> medicine.</h1>
                    <p className="text-gray-600 text-[17px] px-6">Every salad is a proactive choice: sourced within hours of harvest,
                         balanced by nutritionists, and delivered ready to fuel your day without compromise. </p>

                   <p className="text-gray-600 text-[17px] px-6 py-6"> Packed with nutrient-rich ingredients, our salads are designed to fortify your
                     immune system and promote overall well-being.</p>
                     <div className="lg:h-[20vh] flex flex-col lg:flex-row items-center justify-evenly gap-20 lg:gap-0">
                        <div className="lg:h-20  w-[200px] lg:w-[120px] ">
                            <img src="" alt="" srcset="/aboutimgs/salad1.jpg" className="rounded-b-3xl" />

                        </div>
                        <div className=" lg:h-[180px] w-[200px] lg:w-[120px]">
                            <img src="" alt="" srcset="/aboutimgs/salad3.jpg" className="rounded-t-3xl" />

                        </div>
                        <div className="lg:mt-6 lg:h-[90px] w-[200px] lg:w-[120px]">
                            <img src="" alt="" srcset="/aboutimgs/salad4.jpg" className=" rounded-b-3xl" />

                        </div>

                     </div>

                </div>
                 <div className="lg:h-[85vh] w-[70%] lg:w-[25%]">
                    <img src="" alt="" srcset="/aboutimgs/chef.jpg" className="rounded-full lg:rounded-bl-full" />

            </div>
                 
            </div>
           
            <div className="lg:h-[40vh] my-10 w-full bg-gray-200/60 flex flex-col lg:flex-row items-center justify-center">
                <div className="lg:h-[35vh] lg:w-[20%] flex flex-col items-center ">
                    <div className="size-[150px] bg-green-900 rounded-full flex items-center justify-center">
                        <h1 className="text-white text-5xl">15+</h1>
                       
                    </div>
                     <h1 className="text-gray-800 py-4">Different dishes on our menu</h1>
                </div>
                  <div className="mt-20 lg:h-[35vh] lg:w-[20%] flex flex-col items-center ">
                    <div className="size-[150px] bg-green-900 rounded-full flex items-center justify-center">
                        <h1 className="text-white text-5xl">10+</h1>
                       
                    </div>
                     <h1 className="text-gray-800 py-4">Professional chefs constantly cook

</h1>
                </div>
                  <div className="lg:h-[35vh] lg:w-[20%] flex flex-col items-center ">
                    <div className="size-[150px] bg-green-900 rounded-full flex items-center justify-center">
                        <h1 className="text-white text-5xl">4+</h1>
                       
                    </div>
                     <h1 className="text-gray-800 py-4">Couriers delivering food daily</h1>
                </div>

            </div>

        </div>
    )
}

export default About