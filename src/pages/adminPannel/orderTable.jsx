import axios from "axios";
import { useEffect, useState } from "react";

export function OrderTable(){
    const [data,setData] = useState([])
    async function getData() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER}/order/getorder`)
            console.log(response.data);
            setData(response.data.Data)
            
        } catch (error) {
             console.log(error);
        }
    }
    useEffect(()=>{
        getData()
    },[])
    return(
         <div className="overflow-x-auto min-h-screen  shadow rounded-lg flex flex-col items-center py-10">
      <h1  className="text-[#6a8a08] text-3xl font-extrabold my-10">Order Table</h1>
        <table className="min-w-[80%] border border-gray-200">
            <thead className="bg-gray-100">
                <tr>
                    <th>ID</th>
                    <th>FoodId</th>
                    <th>UserId</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((value,index)=>(
                    <tr className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2 text-center">{value._id}</td>
                    <td className="px-4 py-2 text-center">{value?.foodId}</td>
                    <td className="px-4 py-2 text-center">{value?.userId}</td>
                    <td className="px-4 py-2 text-center">{value?.quantity}</td>
                    <td className="px-4 py-2 text-center">{value?.price}</td>
                    <td className="px-4 py-2 text-center">{value?.totalPrice}</td>
                    <td className="px-4 py-2 text-center">
                    <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                Edit
              </button>
              <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                Delete
              </button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        
        </div>
    )
}

export default OrderTable;