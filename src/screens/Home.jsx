import React from 'react'
import TournamentCard from '../components/TournamentCard'

const Home = () => {
    const date = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()} `

    return (
        <div className="flex flex-col items-center  justify-center-center">
            <h1 className="font-bold text-3xl p-4 my-4" >Upcoming Events</h1>
            <div className="flex flex-wrap justify-center" >

            <TournamentCard tournamentName="Cricket Smashers League" sportName="Cricket" venue="Borivali,Mumbai" date={date} price="$5000" />
            <TournamentCard tournamentName="Cricket Smashers League" sportName="Cricket" venue="Borivali,Mumbai" date={date} price="$5000" />
            <TournamentCard tournamentName="Cricket Smashers League" sportName="Cricket" venue="Borivali,Mumbai" date={date} price="$5000" />
            <TournamentCard tournamentName="Cricket Smashers League" sportName="Cricket" venue="Borivali,Mumbai" date={date} price="$5000" />
            <TournamentCard tournamentName="Cricket Smashers League" sportName="Cricket" venue="Borivali,Mumbai" date={date} price="$5000" />
            <TournamentCard tournamentName="Cricket Smashers League" sportName="Cricket" venue="Borivali,Mumbai" date={date} price="$5000" />
            <TournamentCard tournamentName="Cricket Smashers League" sportName="Cricket" venue="Borivali,Mumbai" date={date} price="$5000" />
            <TournamentCard tournamentName="Cricket Smashers League" sportName="Cricket" venue="Borivali,Mumbai" date={date} price="$5000" />
            <TournamentCard tournamentName="Cricket Smashers League" sportName="Cricket" venue="Borivali,Mumbai" date={date} price="$5000" />
            <TournamentCard tournamentName="Cricket Smashers League" sportName="Cricket" venue="Borivali,Mumbai" date={date} price="$5000" />
            <TournamentCard tournamentName="Cricket Smashers League" sportName="Cricket" venue="Borivali,Mumbai" date={date} price="$5000" />
            <TournamentCard tournamentName="Cricket Smashers League" sportName="Cricket" venue="Borivali,Mumbai" date={date} price="$5000" />
            </div>
        </div>
    )
}

export default Home
