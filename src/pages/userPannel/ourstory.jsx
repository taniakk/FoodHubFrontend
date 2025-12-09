function OurStory(){
    return(
        <div className="h-auto lg:h-screen w-full  flex flex-col lg:flex-row items-center justify-evenly">
            <div className=" h-auto lg:h-[85vh] w-[90%] lg:w-[40%] flex flex-col  justify-center">
                <h1 className="px-2 ">OUR STORY</h1>
                <h1 className="px-2 py-2 text-3xl text-black font-semibold">Food is an important part of a balanced lifestyle</h1>
                <p className="text-gray-700 px-2 text-justify h-auto lg:w-[450px]">We source directly from regenerative farms, prep in small batches, and assemble your plan with the guidance of registered dietitians.
                     The result: meals that feel indulgent yet intentional.</p>
                     <div className="h-auto lg:h-[40%] lg:w-[80%] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
                        <div className="h-[20vh] lg:h-[70%] w-[70%] lg:w-[45%] rounded-3xl  flex flex-col items-center 
                        justify-center bg-white/60 hover:scale-105 lg:hover:scale-110">
                            <h1 className="px-4 self-start text-gray-700">COLD CHAIN</h1>
                            <p className="px-4 text-gray-800 font-bold text-[18px]">48-hour harvest window</p>
                            <h3 className="self-start px-4 text-gray-700 text-[12px]">Freshness guarantee</h3>
                        </div>
                        <div className="h-[20vh] lg:h-[70%] w-[70%] lg:w-[45%] rounded-3xl flex flex-col items-center
                         justify-center bg-white/60 hover:scale-105 lg:hover:scale-110">
                             <h1 className="px-4 self-start text-gray-700">PERSONALIZATION</h1>
                             <p className="px-4 w-full text-gray-800 text-[18px] font-bold">4 macro archetypes</p>
                             <h3 className="self-start px-4 text-gray-700 text-[12px]">Keto, low FODMAP & more</h3>
                        </div>
                     </div>
                     <div className="h-[10vh] lg:w-[50%] mb-6 lg:mb-0 flex items-center justify-evenly">
                        <button className="border bg-gray-900 p-2 rounded-3xl text-white px-3 font-semibold hover:bg-white hover:text-gray-600">Learn more</button>
                        <h1 className="text-gray-700">Meet the team</h1>
                     </div>
            </div>
            <div className="relative lg:h-[90vh] mb-6 lg:mb-0  w-[85%] lg:w-[30%] flex flex-col items-center justify-center gap-4 rounded-4xl shadow-2xl bg-white">
                <div className="absolute -top-5 left-4 shadow-2xl lg:py-3  lg:px-5 rounded-3xl bg-white mr-45 ">
                <h1>B CORP PENDING</h1>
                <p className="text-gray-800 text-[12px]">Sourcing audited quarterly</p>
                </div>
                <img src="" alt="" srcset="/images/foodcircle.png" />
                <div className="flex items-center justify-between w-full px-4 ">
                    <h1>KITCHEN HUB</h1>
                <h1>6 Cites</h1>
                 </div>
                <div className="flex items-center justify-between w-full  px-4 py-2">
                    <h1>INGREDIENTS SAVED</h1>
                    <h1>18 tons food waste</h1>
                </div>
               
            </div>

        </div>
    )
}

export default OurStory