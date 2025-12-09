import { SeasonalCard } from "../../../components/seasonalCard"

function SeasonalCat(){
    return(
        <div className="bg-white/70 h-auto w-full flex flex-col items-center justify-evenly py-10">
            <div className=" lg:h-[43vh] lg:w-[70%] flex flex-col  items-center justify-center">
                <h1>SEASONAL CATEGORIES</h1>
                <h1 className="text-[40px] font-bold text-gray-800">Our curated menu</h1>
                <p className="text-[16px] py-5 lg:py-2 text-gray-800 px-3 text-center">Every category is rotated quarterly so you always have peak produce at peak flavor.</p>
            </div>
            <div className=" lg:h-[40vh] w-[70%] flex flex-col lg:flex-row items-center justify-center gap-8">
                 {/* <ServCard img={'/images/hairstyle.jpg'} txt={"Hair Services"} /> */}
                <SeasonalCard img={'/images/bowl.png'} txt={"Summer"} para={"Citrus, stone fruit, mint"}  lg:wi={"25%"} lg:he={"300px"}/>
                <SeasonalCard img={'/images/bowl1.png'} txt={"Fruit bowls"} para={"Tropical energy boosts"}  lg:wi={"25%"} lg:he={"300px"}/>
                <SeasonalCard img={'/images/bowl2.png'} txt={"Mexican"} para={"Charred corn & smoky"} lg:wi={"25%"}  lg:he={"300px"}/>
                <SeasonalCard img={'/images/bowl3.png'} txt={"Asian pantry"} para={"Sesame, miso, umami"}  lg:wi={"25%"} lg:he={"300px"}/>
                <SeasonalCard img={'/images/bowl4.png'} txt={"Spring greens"} para={"Peas, radish, herb oil"} lg:wi={"25%"} lg:he={"300px"}/>
                <SeasonalCard img={'/images/bowl5.png'} txt={"Winter harvest"} para={"Roots, grains, warmth"}  lg:wi={"25%"} lg:he={"300px"}/>

            </div>

        </div>
    )
}

export default SeasonalCat