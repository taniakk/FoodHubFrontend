import { SeasonalCard } from "../../../components/seasonalCard"

function OurServices(){
    return(
        <div className="bg-green-100/70 lg:h-screen w-full flex flex-col items-center justify-evenly">
            <h1 className="text-[50px] font-bold"><span className="text-gray-800">Our </span>  Services</h1>
            <div className=" h-auto py-8 lg:w-[80%] flex flex-col lg:flex-row gap-9 lg:gap-0 items-center justify-evenly">
                {/* <ServCard img={'/images/hairstyle.jpg'} txt={"Hair Services"} /> */}
                <SeasonalCard  img2={'/servicesimgs/cup.png'} txt={"Fresh from Nutrition"} para={"Indulge in vitality heth 'Fresh from Nutrition'—where every bite revitalizes."} he={"410px"} wi={"250px"} fonts={"25px"}/>
                <SeasonalCard img2={'/servicesimgs/leaf.png'} txt={"100% Organic"} para={"Pure. Fresh. Wholesome. Our offerings are 100% Organic—savor the goodness"} he={"390px"} wi={"250px"} fonts={"25px"}/>
                <SeasonalCard img2={'/servicesimgs/batch.png'} txt={"Premium Quality"} para={"Experience culinary excellence heth our Premium Quality offerings where every bite reflects"} he={"390px"} wi={"250px"} fonts={"25px"}/>
                <SeasonalCard img2={'/servicesimgs/earth.png'} txt={"Natural Product"} para={"Our Natural Products embrace simplicity, delivering freshness and authenticity."} he={"390px"}wi={"250px"} fonts={"25px"}/>

            </div>

        </div>
    )
}

export default OurServices