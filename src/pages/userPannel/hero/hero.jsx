import Footer from "../../../components/footer"
import { SeasonalCard } from "../../../components/seasonalCard"

import Home from "../home"
import OurStory from "../ourstory"
import Natural from "./natural"
import NewProduct from "./newproduct"
import OurServices from "./ourservices"
import Reservation from "./reservation"
import SeasonalCat from "./seasonal"
import Slider from "./Slider"

function Hero(){
    return(
        <>
        <Home/>
        <OurStory/>
        <SeasonalCat/>
        {/* <SeasonalCard img={'/images/bowl.png'}/> */}
        <Natural/>
        <OurServices/>
        <NewProduct/>
        <Slider/>
        <Reservation/>
        {/* <Footer/> */}
        </>
    )
}

export default Hero