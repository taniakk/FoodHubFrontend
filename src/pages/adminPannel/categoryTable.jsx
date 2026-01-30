import axios from "axios";
import { useEffect, useState } from "react"


export function CategoryTable(){
    const [data,setData] = useState([])
    async function getData() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER}/cat/getcat`)
            console.log(response.data);
            setData(response.data.data)
            
        } catch (error) {
             console.log(error);
        }
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <div className="overflow-x-auto min-h-screen  shadow rounded-lg flex flex-col items-center py-10">
      <h1  className="text-[#6a8a08] text-3xl font-extrabold my-10">Category Table</h1>
        <table className="min-w-[60%] border border-gray-200">
            <thead className="bg-gray-100">
                <tr>
                    <th>ID</th>
                    <th>Category Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((value,index)=>(
                    <tr className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2 text-center">{value._id}</td>
                    <td className="px-4 py-2 text-center">{value.category}</td>
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