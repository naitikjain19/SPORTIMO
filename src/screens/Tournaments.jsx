import React, { useState } from 'react'
import axios from 'axios';
import TournamentCard from '../components/TournamentCard'

const Tournaments =  (props) => {
    const data = props.location.state.data 
    const [teamName,setName] = useState("")
    const [details,setDetails] = useState({})
    const [teams,setTeams] = useState({})
    async function createTeam(){
        await axios.post(`api/createteam/${data._id}`,{teamname:teamName}).then(res=>setDetails(res.data))
        console.log(details)
    }
    async function getTeam(){
        await axios.get(`http://localhost:5000/api/isapplied/${data._id}`).then(res=>setTeams(res.data))
        console.log(teams)
    }
    return (
        
        <div className="ml-16 flex flex-col justify-center w-1/3" >
            <h1>{data._id}</h1>
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="name" name="" id=""/>
            <button onClick = {createTeam}>Create Team</button>
            <input type="text" placeholder="team code" name="" id=""/>
            <button>Join Team</button>
            <button onClick={getTeam} >Get Team</button>
                
        </div>
    )
}

export default Tournaments
