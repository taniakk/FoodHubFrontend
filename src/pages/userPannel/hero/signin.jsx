import axios from "axios"
import { useContext, useState } from "react"
import { AuthContext } from "../../../context/authContext"
import { useNavigate } from "react-router-dom"

function SignIn() {
    const [formData, setFormData] = useState({

        email: '',
        password: ''
    })

    function handleChange(e) {
        // console.log(e);

        const { name, value } = e.target
        setFormData(() => ({
            ...formData,
            [name]: value
        }))
    }
    const {setAuth,setType} = useContext(AuthContext)
    const navigate = useNavigate()
    async function handleSubmit(e) {
        e.preventDefault()
        console.log(formData);
        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER}/user/login`, formData)
            console.log(response);
            alert(response.data.Message)
            setFormData({

                email: '',
                password: ''
            })
            localStorage.setItem('token', JSON.stringify(response.data.data.token))
            localStorage.setItem('type', JSON.stringify(response.data.data.userType))
            setAuth(response.data.data.token)
            setType(response.data.data.userType)
            setTimeout(()=>{
                if (response.data.data.userType === 'admin') {
                    navigate('/admin')

                }else{
                    navigate('/')
                }
            },1000)
 
        } catch (error) {
            console.log(error);
            alert(error?.response?.data?.Message || "Something Error")
 
        }

    }
    return (
        <div className=" mb-10 h-screen w-full flex items-center justify-evenly">
            <div className=" h-auto w-[40%] flex flex-col items-center justify-center">
                <img src="" alt="" srcset="/images/signinbg1.jpg" className="object-contain bg-cover bg-center rounded-4xl h-[550px]" />
            </div>
            <div className="bg-white/80 rounded-4xl flex flex-col shadow-2xl items-center justify-evenly  h-[50vh] w-[30%]">
                {/* <input className="border p-4" type="text" placeholder="UserName" /> */}
                <form className="flex flex-col items-center justify-evenly h-[90%]" onSubmit={handleSubmit}>
                    <h1 className="text-[40px]  font-bold">SignIn</h1>
                    <input className="border rounded-2xl lg:w-[300px] p-4" type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                    <input className="border p-4 rounded-2xl lg:w-[300px]" type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
                    <button className="border rounded-2xl py-1  px-4 text-center text-[20px] bg-linear-to-b from-white to-[#6B8E23] hover:from-[#6B8E23] hover:to-[#556B2F] hover:text-white
             transition-all duration-300">Login</button>

                </form>
            </div>

        </div>
    )
}

export default SignIn