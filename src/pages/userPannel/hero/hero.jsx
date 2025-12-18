
import Home from "../home"
import OurStory from "../ourstory"
import Cart from "./cart"
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
        {/* <ProductsCard/> */}
        <Reservation/>
        
        {/* <Footer/> */}
        </>
    )
}

export default Hero