import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import google from "../assets/google-icon.svg"
import football from "../assets/football.svg"
import tennis from "../assets/tennis.svg"
import axios from "axios"
const Login = () => {
    const [email, setEmail] = useState("bhavesh79@gmail.com")
    const [password, setPassword] = useState("qwerty")
    const [cPassword, setCPassword] = useState("")
    const backendUrl= "http://localhost:5000/"
    const googleAuthUrl = "http://localhost:5000/auth/google"
    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log(e)
        console.log(email)
        const data ={
            email:email,
            password:password
        }
        if(email!==""&&password!==""){
            await axios.post(`/api/login`,{...data}).then(res=>window.location.href="/home").catch(err=>console.log(err))
        }
    }
    const authenticatedWithGoogle = ()=>{

    }
    return (
        <form >
        <div className="flex  justify-center items-center" >
            <div className="hidden md:block absolute top-0 right-10 behind">
                <img src={football} className="w-80" alt=""/>
            </div>
            <div className="hidden md:block absolute bottom-0 left-20 behind">
                <img src={tennis} className="w-80" alt=""/>
            </div>
            <div className="bg-color0 border-color6 border-1  py-2 md:w-1/3 flex flex-col justify-center items-center mt-4" >
                <div className="flex flex-col items-center w-full px-14  mt-4" >
                    <a onClick={authenticatedWithGoogle} href={googleAuthUrl} className="w-full  py-2 bg-color4 text-color0 font-bold flex items-center text-center transition duration-600 transform hover:scale-110" > <img className="w-8 ml-2" src={google} alt=""/> <span className="text-center w-full mr-4">Login with Google</span> </a>
                    <span className="uppercase text-color3 mt-4" >---------------or---------------</span>
                </div>
                <h2 className="font-bold text-2xl py-4">Login</h2>

                <div className="flex flex-col w-full px-14 mb-4" >
                    <label className="text-sm text-color5" >Email</label>
                    <input className="border-2 border-color1 shadow-md py-2 my-2 rounded-lg" onChange={e => setEmail(e.target.value)} type="email" />
                </div>

                <div className="flex flex-col w-full px-14 mb-4" >
                    <label className="text-sm text-color5" >Password</label>
                    <input className="border-2 border-color1 shadow-md py-2 my-2 rounded-lg" onChange={e => setPassword(e.target.value)} type="password" />
                </div>

                <div className="flex flex-col items-center w-full px-14 mb-4" >
                    <button onClick={(e)=>handleSubmit(e)} className="border-2 w-1/2 border-color1 font-bold mb-4 shadow-md py-2 bg-color4 text-color0 transition duration-600 transform hover:scale-110" >Submit</button>
                    <p>Don't have an account? <span className="text-color4 cursor-pointer"><Link to="register" >Register</Link> </span></p>
                </div>

            </div>
        </div>
        </form>
    )
}

export default Login

