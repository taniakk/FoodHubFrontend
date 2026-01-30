import { useState } from "react"
import axios from 'axios'
function SignUp(){
    const [formData,setFormData] =useState({
        name:'',
        email:'',
        password:''
    })

    function handleChange(e) { 
        // console.log(e);
        
        const {name ,value} = e.target
        setFormData(()=>({
            ...formData,
            [name]:value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(formData);
        try {
            const response = await axios.post('${import.meta.env.VITE_SERVER}/user/login',formData)
            console.log(response);
            alert(response.data.Message)
            setFormData({
                 name:'',
        email:'',
        password:''
            })
            
        } catch (error) {
            console.log(error);
            alert(error?.response?.data?.Message || "Something Error")
            
        }
                
    }
    return(
        <div className=" mb-10 h-screen w-full flex flex-col lg:flex-row items-center justify-evenly">
           
                <img src="" alt="" srcset="/images/signup.jpg" className="object-contain   rounded-4xl w-[300px]  lg:w-[500px]" />
          
          
            {/* <input className="border p-4" type="text" placeholder="UserName" /> */}
          <form className="w-[95%] lg:w-[40%] flex flex-col lg:flex-row items-center justify-center" onSubmit={handleSubmit}>
              <div className="bg-white/80 rounded-4xl flex flex-col shadow-2xl items-center justify-evenly  h-[55vh] w-[80%] lg:w-[60%]">
              <h1 className="text-[40px] text-center font-bold">SignUp</h1>
            <input className="border  rounded-2xl lg:w-[300px] p-4" type="text" placeholder="Username" name="name" value={formData.name}  onChange={handleChange}/>
            <input className="border rounded-2xl lg:w-[300px] p-4" type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
            <input className="border p-4 rounded-2xl lg:w-[300px]" type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange}/>
            <button className="border rounded-2xl py-1  px-4 text-center text-[20px] bg-linear-to-b from-white to-[#6B8E23]
              hover:from-[#6B8E23] hover:to-[#556B2F] hover:text-white
             transition-all duration-300">Register</button>

          
           </div>
          </form>
           

        </div>
    )
}

export default SignUp