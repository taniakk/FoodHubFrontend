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
            img:'/navProductsimgs/img1.jpg',
            heading:'BURGER1'
        },
         {
            img:'/navProductsimgs/img1.jpg',
            heading:'BURGER2'
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