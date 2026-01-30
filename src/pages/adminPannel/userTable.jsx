import axios from "axios";
import { useEffect, useState } from "react";

function UserTable() {

    const [data, setData] = useState([])

    async function GetData() {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_SERVER}/user/getUser`
            )
            console.log(response.data);
            setData(response?.data?.data)
            
            
        } catch (error) {
            console.log(error);
            
            
        }
        
    }

    useEffect(()=>{
        GetData()
    }, [])
  return (
    <div className="overflow-x-auto min-h-screen  shadow rounded-lg flex flex-col items-center py-10">
        <h1 className="text-[#6a8a08] text-3xl font-extrabold my-10">USER TABLE</h1>
      <table className="min-w-[60%] border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
          
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Name
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Email
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Role
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Register Time
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {
            data.map((d,index)=>(
              <tr className="border-t hover:bg-gray-50">
            
            <td className="px-4 py-2">{d.name}</td>
            <td className="px-4 py-2">{d.email}</td>
            <td className="px-4 py-2">{d.userType}</td>
            <td className="px-4 py-2">
              <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-700">
                {new Date(d.createdAt).toString()}
              </span>
            </td>
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
  );
}

export default UserTable;
