import ProductsCard from "../../../components/productsCard"
import { cat } from "../Data/cat"
function NavProducts(){

// array of object

    const cat = [
        {
            img:'/navProductsimgs/img1.jpg',
            heading:'BURGER'
        },
         {
            img:'/navProductsimgs/img2.jpg',
            heading:'PIZZA'
        },
         {
            img:'/navProductsimgs/img3.jpg',
            heading:'VEG ROLLS'
        },
        {
            img:'/navProductsimgs/img4.jpg',
            heading:'CHEESE BALLS'
        },
        {
            img:'/navProductsimgs/img5.jpg',
            heading:'CHEESE TACOS'
        },
        {
            img:'/navProductsimgs/img6.jpg',
            heading:'SANDWICH'
        },
        {
            img:'/navProductsimgs/img7.jpg',
            heading:'CHICKEN'
        },
        {
            img:'/navProductsimgs/img8.jpg',
            heading:'VEG THALI'
        }
    ]


    return(
        <div className=" min-h-screen py-30 w-full flex flex-col items-center justify-center">

    {/* js */}

           <div className="min-h-[70vh] w-[90%]  flex flex-wrap items-center justify-center gap-10 ">
             {
                cat.map(item=>(
                    <ProductsCard photo={item.img} Text={item.heading}/>
                ))
            }

           </div>
        </div>
    )

}

export default NavProducts