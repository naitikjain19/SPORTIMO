import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TournamentCard from '../components/TournamentCard'

const Explore = () => {
    const date = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()} `
    const [tournaments, setTournaments] = useState([])
    useEffect(async () => {
        const res =  await axios.get(`http://localhost:5000/api/alltournaments`)
        setTournaments(res.data)
    }, [])
    return (
        <div className="flex flex-col items-center  justify-center-center">
            <div className="fixed w-11/12 md:w-8/12 my-4 z-40">
                <div className="relative">
                    <input className="w-full  shadow-xl px-2 py-4 border-2 rounded-xl focus:outline-none " type="search" placeholder="Search Tournaments" name="Search" id="" />
                    <div className="absolute top-1/3 right-4 transform hover:scale-125 transition duration-500">
                        <svg className="text-color4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </div>

                </div>
            </div>

            <div className="flex flex-wrap flex-row justify-center my-28" >
                {
                    tournaments.map(el=>(
                        <TournamentCard tournamentName={el.tournamentname} sportName={el.sportname} venue={el.venue} date={el.date} price={`₹${el.prizeone}`} />

                    ))
                }
           
            </div>
        </div>
    )
}

export default Explore
