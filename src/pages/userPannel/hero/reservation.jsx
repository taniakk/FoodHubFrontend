function Reservation(){
    return(
        <div className="bg-white py-20 lg:py-0 lg:h-screen w-full flex flex-col lg:flex-row items-center justify-evenly ">
            <div className="lg:h-[60vh] gap-6 lg:gap-0 lg:w-[30%] flex flex-col items-center justify-evenly">
                <h1 className="text-[25px] lg:text-[35px] font-bold w-[250px] py-6 lg:py-0 lg:w-[450px]"> <span className="text-gray-700">Do You Have Any Dinner Plan Today ?
                    </span>  Reserve Your Table</h1>
                    <input className="border border-gray-600 p-4 lg:w-[450px] placeholder-gray-700 text-2xl rounded-xl" type="text" placeholder="Name" />
                    <input className="border border-gray-600 p-4 lg:w-[450px] placeholder-gray-700 text-2xl rounded-xl" type="text" placeholder="Email" />
                    <button className="self-start  border text-white font-bold p-4 bg-green-900 rounded-3xl text-xl hover:bg-white hover:text-gray-700">Make Reservation</button>
            </div>
            <div className="h-auto py-10 w-[80%] lg:w-[35%]">
                <img src="" alt="" srcset="/images/couple.png"  />
            </div>

        </div>
    )
}

export default Reservation