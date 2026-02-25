import { useState } from "react"
import axios from "axios"

function Category() {
    const [category, setCategory] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        try { 
            const res = await axios.post('http://localhost:3000/cat',{category})
                console.log(res.data)
                alert("Category added successfully")
          }catch (error) {
            console.log(error)
            alert(error.response?.data?.Message || "Failed to add category")
        }   
    }

    return (
        <div className=" h-screen w-full flex items-center justify-evenly">
            <form className="shadow-2xl h-[35%] w-[30%] rounded-4xl flex flex-col text-gray-800 items-center ml-20" onSubmit={handleSubmit}>
                <h1 className="text-4xl font-bold py-6 text-shadow-2xs text-shadow-gray-600">ADD CATEGORY</h1>
                {/* <label className="text-2xl py-2" for="car-brand">Select Category</label> */}
                <select className="my-2 p-2 rounded-2xl" name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
                    <option value="">select Category</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Burger">Burger</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Indian-Food">Indian-Food</option>
                    <option value="Sweets">Sweets</option>
                    <option value="Ice-Cream">Ice-Cream</option>
                </select>
                <button className="border  p-2 w-[100px] rounded-2xl hover:bg-gray-600 hover:text-white">Submit</button>
            </form>
            <img src="" alt="" srcset="/images/adminchef.png" className="h-[700px] " />


        </div>
    )
}

export default Category