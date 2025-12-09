function NewProduct(){
    return(
        <div className=" lg:h-screen w-full flex flex-col lg:flex-row items-center justify-evenly">
            <div className="lg:h-[60vh] lg:w-[30%] flex flex-col  justify-center px-4 lg:px-0 py-4 lg:py-0">
                <h1 className="text-[30px]">New Product</h1>
                <h1 className="text-[40px] font-semibold text-gray-700">Fresh, Healthy, Organic, Delicious Salad</h1>
                <p className="text-gray-600 text-[18px]">Immerse yourself in a colorful medley of vibrant greens, organic delights, and a melody of textures. Each ingredient is carefully selected to deliver not just a salad but a culinary experience—a harmonious blend of freshness, health, and deliciousness. Elevate your plate with our Fresh.

Healthy, Organic, Delicious Salad—a feast for the senses, a celebration of well-being.</p>
<button className="border text-xl font-semibold p-2 w-[140px]  my-2 rounded-3xl hover:bg-white 
 bg-green-700 text-white hover:text-black">Learn more</button>
            </div>
            <div className=" lg:h-[60vh] lg:w-[30%] lg:py-0 p-6">
                <img src="" alt="" srcset="/images/veggiebowl.png" />
            </div>

        </div>
    )
}

export default NewProduct