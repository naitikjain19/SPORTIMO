import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import google from "../assets/google-icon.svg"
const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    const googleAuthUrl = "http://localhost:5000/auth/google"
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email:email,
            password: password
        }
        if(email != "" && password != "" && cPassword != ""){
            if(password == cPassword){
                await axios.post("/api/register", {...data}).then(async res => {
                    console.log(res)
                    if(res.data == "done"){
                        await axios.post(`/api/login`,{...data}).then(res=>window.location.href="/home").catch(err=>console.log(err))
                    }
                }).catch((err) => {
                    console.log(err)
                });
        }
    }
    }

    return (
        <form onSubmit = {(e) => handleSubmit(e)}>
        <div className="flex  justify-center items-center" >
            <div className="bg-color0 border-color6 border-1  py-2 md:w-1/3 flex flex-col justify-center items-center mt-" >
                <div className="flex flex-col items-center w-full px-14  mt-4" >
                    <a href = {googleAuthUrl} className="w-full  py-2 bg-color4 text-color0 font-bold flex items-center text-center transition duration-600 transform hover:scale-110" > <img className="w-8 ml-2" src={google} alt=""/> <span className="text-center w-full mr-4">Sign Up with Google</span> </a>
                    <span className="uppercase text-color3 mt-4" >---------------or---------------</span>
                </div>
                <h2 className="font-bold text-2xl py-4">Register</h2>

                <div className="flex flex-col w-full px-14 mb-4" >
                    <label className="text-sm text-color5" >Email</label>
                    <input className="border-2 border-color1 shadow-md py-2 my-2 rounded-lg" onChange={e => setEmail(e.target.value)} type="email" />
                </div>

                <div className="flex flex-col w-full px-14 mb-4" >
                    <label className="text-sm text-color5" >Password</label>
                    <input className="border-2 border-color1 shadow-md py-2 my-2 rounded-lg" onChange={e => setPassword(e.target.value)} type="password" />
                </div>

                <div className="flex flex-col w-full px-14 mb-4" >
                    <label className="text-sm text-color5" >Confirm Password</label>
                    <input className="border-2 border-color1 shadow-md py-2 my-2 rounded-lg" onChange={e => setCPassword(e.target.value)} type="password" />
                </div>
                <div className="flex flex-col items-center w-full px-14 mb-4" >
                    <input className="border-2 w-1/2 border-color1 font-bold mb-4 shadow-md py-2 bg-color4 text-color0 transition duration-600 transform hover:scale-110" type="submit" />
                    <p>Already have an account? <span className="text-color4 cursor-pointer"><Link to="login" >Login</Link> </span></p>
                </div>

            </div>
        </div>
        </form>
    )
}

export default Register
