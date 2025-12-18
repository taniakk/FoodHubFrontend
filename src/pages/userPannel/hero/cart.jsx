function Cart(){
    return(
        <div className=" h-auto w-full flex flex-col items-center justify-center py-30">
            <div className="h-[280px] lg:h-[50vh] w-[280px] lg:w-full bg-[url('/images/cartimg.jpg')] bg-cover bg-center rounded-full lg:rounded-b-full lg:rounded-none shadow-2xl">

            </div>
            {/* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */}
            <h1 className="text-[45px] text-shadow-md text-shadow-gray-700 p-2 font-bold text-amber-900">CART</h1>
            <div className="lg:h-[50vh] w-full flex flex-col lg:flex-row items-center justify-center gap-4">
                <div className="shadow-[0px_5px_15px_rgba(0,0,0,0.35)]  min-h-[40vh] w-[80%] lg:w-[50%] gap-3 rounded-2xl flex flex-col items-center justify-evenly p-5">
                    <h1 className="text-[35px] font-semibold text-gray-800">Menu</h1>
                    <h1 className="text-[25px] text-gray-800">Main Course</h1>
                    <div className="border h-[20vh] w-full flex flex-col lg:flex-row items-center justify-evenly lg:justify-between rounded-2xl  text-gray-800">
                        <div className="flex flex-col items-center justify-evenly ">
                        <h1 className="text-[20px]  p-2 font-semibold">Cheese Pizza</h1>
                        <h1 className="text-green-800 font-bold">Rs/-200.</h1>
                        </div>
                        <div className="border lg:h-[25%] lg:w-[30%] flex items-center justify-between mx-4" >
                            <button className="border h-full w-[20%]   bg-green-700 font-extrabold text-2xl">—</button>
                            <input type="text" className="w-[60%]"/>
                            <button className="border h-full w-[20%]   bg-green-700 font-extrabold text-2xl">+</button>


                        </div>
                    </div>
                    
                </div>
                <div className="shadow-2xl lg:h-[40vh] py-4 lg:py-0 w-[70%] mt-6 lg:mt-0 lg:w-[25%] rounded-2xl flex flex-col items-center justify-evenly">
                    <h1  className="text-3xl text-gray-700 font-bold">Your Order</h1>
                    <h1 className="text-[30px] text-gray-700 self-start px-6">Item: 1</h1>
                    <div className="flex flex-col items-center justify-evenly  w-[90%] text-gray-600 gap-2">
                        <div className="flex items-center justify-between w-full border px-2 rounded-2xl hover:bg-gray-100">
                            <h1 className=" py-2 font-semibold ">Sub Total</h1>
                            <h1>Rs/-100</h1>
                            </div>
                        <div className="flex items-center justify-between w-full border px-2 rounded-2xl hover:bg-gray-100">
                            <h1 className=" py-2 font-bold">Total</h1>
                            <h1>Rs/-100</h1>
                        </div>
                        <button className="text-[25px] border px-6 py-2 mt-6 bg-green-800 text-white rounded-[40px] hover:bg-white hover:text-black">Proceed to Pay</button>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default Cart;