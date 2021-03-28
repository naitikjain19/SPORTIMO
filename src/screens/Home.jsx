import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TournamentCard from '../components/TournamentCard'

const Home = () => {
    const date = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()} `
    const [tournaments,setTournaments] = useState([])
    useEffect(async () => {
        const res =  await axios.get(`http://localhost:5000/api/alltournaments`)
        setTournaments(res.data)
    }, [])
    return (
        <div className="flex flex-col items-center  justify-center">
            <h1 className="font-bold text-3xl p-4 my-4" >Upcoming Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-36" >
                {
                    tournaments.map(el=>(
                        <div>
                        
                            <TournamentCard data={el} tournamentName={el.tournamentname} sportName={el.sportname} venue={el.venue} date={el.date} price={`₹${el.prizeone}`} />
                        
                        </div>
                    ))
                }
           
            </div>
        </div>
    )
}

export default Home
