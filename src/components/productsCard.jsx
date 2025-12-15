function ProductsCard({photo,Text}){
    return(
        <div className=" h-[40vh] w-[300px]  rounded-2xl p-6 flex flex-col items-center justify-evenly">
            <img src="" alt="" srcset={photo} className="h-[200px] rounded-full bg-center object-contain bg-cover" />
            <h1 className="text-[30px] text-[#4d3736] font-bold">{Text}</h1>
            

        </div>
    )
}

export default ProductsCard