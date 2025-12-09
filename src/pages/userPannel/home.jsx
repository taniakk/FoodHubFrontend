function Home() {
    return (
        <div className=" min-h-screen w-full flex flex-col lg:flex-row mt-10 lg:mt-0 items-center justify-evenly">
            <div className="bg-white/20 h-auto w-full lg:w-[30%] flex flex-col items-center justify-center rounded-3xl shadow-2xl">
                <h1 className="text-6xl text-center lg:text-start font-bold px-4 ">Healthy<span className="text-black"> Salad For Healthy </span> Health</h1>
                <p className="px-4 text-gray-600 py-4">Indulge in the crisp goodness of our "Healthy Salad for Healthy Health," meticulously crafted to elevate your well-being. Immerse yourself in a symphony of vibrant colors, flavors, and nutrient-rich ingredients that contribute to a revitalized you.</p>
                <button className="px-3 ml-2 py-2 border rounded-3xl lg:self-start my-2 bg-[#6a8a08] text-white
                 hover:bg-white hover:text-[#6a8a08]">Get Started</button>

            </div>
            <div className="h-auto lg:h-[80vh] lg:w-[40%] flex flex-col items-center justify-center relative">
               
                <img
                    src=""
                    alt=""
                    srcset="/images/bowl-bg.png"
                    className="relative animate-rotate"
                />

              
                <img
                    src=""
                    alt=""
                    srcset="/images/homeimg.png"
                    className="lg:size-[500px] object-contain bg-cover bg-center absolute"
                />
            </div>


        </div>
    )
}

export default Home