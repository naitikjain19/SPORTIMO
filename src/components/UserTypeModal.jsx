import axios from 'axios'
import React from 'react'

const UserTypeModal = ({setUser}) => {
    async function setUsertype(type){
        await axios.get(`/api/usertype/${type}`).then(res=>setUser(true)).catch(err=>console.log(err))
    }
    return (
        <div className="absolute w-screen h-screen top-0 left-0 z-40 transition-all duration-500 " >
            <div className="absolute  top-0 left-0 w-full h-full bg-color6 opacity-30" ></div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center" >
                <div className="rounded-xl w-11/12 h-1/2 md:w-1/3 py-8 bg-color0 flex flex-col justify-center items-center" >
                    <h2 className="text-color6 font-bold text-3xl">Who are you?</h2>
                    <div className="my-8 flex justify-evenly w-full" >
                    <button onClick={()=>setUsertype("organiser")} className="relative bg-color0 max-w-2xl text-color6 my-4 py-6 px-4 rounded-lg shadow-lg cursor-pointer " >Organiser
                    {/* <button className="absolute top-14" >You can organise tournament</button> */}
                    </button>
                    <button  onClick={()=>setUsertype("participant")} className="bg-color0 text-color6 my-4 py-6 px-4 rounded-lg shadow-lg cursor-pointer" >Participant</button>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default UserTypeModal
