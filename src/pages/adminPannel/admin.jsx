import Nav from "../../components/nav"
import AdminCharts from "./adminChart.jsx"

function Admin(){
    return(
        <div className=" min-h-screen  w-full flex py-10  items-center justify-start gap-8">
            
            <div className=" min-h-screen lg:w-[80%]  rounded-r-4xl flex flex-col items-center justify-center gap-10">
                <h1 className="text-3xl font-bold text-gray-600 pt-6">WELCOME TO <span className="text-[#6a8a08] text-4xl"> ADMIN </span> DASHBOARD</h1>
                <div className="shadow-2xl bg-gray-200/80 lg:h-[30%] w-[80%] rounded-4xl flex items-center justify-center">
                 <div className=" lg:w-[65%]">
                       <h1 className="text-2xl font-semibold ">Get Discount Voucher up to 20%</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, eos.</p>
                 </div>
                 <img src="" alt="" srcset="/images/burgergirl.png" className="h-[168px]" />

                </div>
                <div className=" lg:h-[40%] w-full lg:w-[90%] flex flex-col lg:flex-row items-center justify-evenly">
                    <img src="" alt="" srcset="/images/foodthaal.png" className="h-[200px] hover:scale-110" />
                    <img src="" alt="" srcset="/images/admindosa.png" className="h-[200px] hover:scale-110" />
                    <img src="" alt="" srcset="/images/adminladdu.png" className="h-[200px] hover:scale-110" />

                </div>
                <AdminCharts/>
            </div>
            {/* <div className="bg-gray-200 h-[90%] w-[25%] rounded-4xl"></div> */}
            

        </div>
    )
}
export default Admin