import axios from "axios";
import { useEffect, useState } from "react"

function SubCatTable(){
    
    const [data, setData] = useState([])

    async function GetTable() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER}/subcat/getSubCat`)
            console.log(response);
            setData(response?.data?.Data)
            
            
        } catch (error) {
            console.log(error);
            
            
        }
        
    }
    useEffect(()=>{
        GetTable()
    },[])
    return(
        <div className="overflow-x-auto min-h-screen  shadow rounded-lg flex flex-col items-center py-10">
            <h1 className="text-[#6a8a08] text-3xl font-extrabold my-10">SUB-CATEGORY TABLE</h1>
            <table className="min-w-[60%] border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Id</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">SubCategory</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d,index)=>(
                            <tr>
                        <td className="px-4 py-2">{d?._id}</td>
                        <td className="px-4 py-2">{d?.category}</td>
                        <td className="px-4 py-2">{d?.subcategory}</td>
                         <td className="px-4 py-2 space-x-2">
              <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                Edit
              </button>
              <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                Delete
              </button>
            </td>
                        
                    </tr>
                        ))
                    }
                    
                </tbody>

        </table>

        </div>
    )
}

export default SubCatTable;

