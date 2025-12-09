function SignIn(){
    return(
        <div className=" mb-10 h-screen w-full flex items-center justify-evenly">
            <div className=" h-auto w-[40%] flex flex-col items-center justify-center">
                <img src="" alt="" srcset="/images/signinbg1.jpg" className="object-contain bg-cover bg-center rounded-4xl h-[550px]" />
            </div>
            <div className="bg-white/80 rounded-4xl flex flex-col shadow-2xl items-center justify-evenly  h-[50vh] w-[30%]">
            {/* <input className="border p-4" type="text" placeholder="UserName" /> */}
            <h1 className="text-[40px]  font-bold">SignIn</h1>
            <input className="border rounded-2xl w-[300px] p-4" type="email" placeholder="Email" />
            <input className="border p-4 rounded-2xl w-[300px]" type="password" placeholder="Password" />
            <button className="border rounded-2xl py-1  px-4 text-center text-[20px] bg-linear-to-b from-white to-[#6B8E23] hover:from-[#6B8E23] hover:to-[#556B2F] hover:text-white
             transition-all duration-300">Login</button>

            </div>

        </div>
    )
}

export default SignIn