import React from 'react'

function TournamentCard({ tournamentName, sportName, venue, date, price }) {

    return (

        <div class="w-full max-w-xl overflow-hidden rounded border bg-color0 shadow transform transition duration-500 hover:scale-105 hover:shadow-xl mx-4 mb-8">
            <div class="relative">
                <div class="h-56 w-full bg-cover bg-no-repeat bg-center card-bg">
                </div>
            </div>
            <div class="p-3">
                <h3 class="mr-10 text-sm truncate-2nd">
                    <h2 class="text-color4 font-bold text-lg">{tournamentName}</h2>
                </h3>
                <div class="flex flex-col items-start justify-between">
                    <Description title={"Sport"} name={sportName} />
                    <Description title={"Venue"} name={venue} />
                    <Description title={"Date"} name={date} />
                    <Description title={"Price"} name={price} />

                </div>

            </div>
        </div>
    )
}

export default TournamentCard



const Description = ({ title, name }) => {
    return <p class="text-md font-bold text-color6">{title} : <span className="text-color6"> {name}</span></p>

}

