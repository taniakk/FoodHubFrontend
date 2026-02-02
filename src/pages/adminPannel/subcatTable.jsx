import axios from "axios";
import { useEffect, useState } from "react"

function SubCatTable(){
    
    const [data, setData] = useState([])

    async function GetTable() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER}/subcat/getSubCat`)
            console.log(response);
            setData(response?.data?.data)
            
            
        } catch (error) {
            console.log(error);
            
            
        }
        
    }
    useEffect(()=>{
        GetTable()
    },[])
    return(
        <div className="min-h-screen">
            <table>
                <thead>
                    <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Id</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">SubCategory</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2"></td>
                        <td className="px-4 py-2"></td>
                        <td className="px-4 py-2"></td>
                        <td className="px-4 py-2"></td>
                        
                    </tr>
                    
                </tbody>

        </table>

        </div>
    )
}

export default SubCatTable;

