import axios from 'axios'
import React, { useState } from 'react'

const SkillSetModal = ({ setProfile  }) => {
    const sports = ["Cricket", "Football", "Badminton", "Kabbadi", "Table tennis","Chess"]
    const levels = ["District", "State", "National", "None"]
    const [aadharName,setAadharName] = useState("")
    const [skillSet, setSkillSet] = useState([])
    const [level, setLevel] = useState(["None"])
    const [file, setFile] = useState("")
    const [showLoader,setLoader] = useState(false)
    function toggleSport(sport) {
        if (skillSet.includes(sport)) {
            let skills = skillSet.filter((val) => val !== sport)
            setSkillSet(skills)
        } else {
            setSkillSet([...skillSet, sport])
        }
    }
    function toggleLevel(sport) {
        setLevel([sport])
    }
    async function handleSubmit(){
        axios.post("/api/profilecomplete",{
            name : aadharName,
            skillset : skillSet,
            national : level.includes("National"),
            district :  level.includes("District"),
            state :  level.includes("State"),
            verified: true,
        }).then(res=>setProfile(true)).catch(err=>{
            console.log(err)
        })
    }
    async function verify(e) {
        e.preventDefault()
        setLoader(true)
        const formData = new FormData(e.target.parentNode);
        axios
        .post("http://127.0.0.1:4444/upload", formData)
        .then(res => {
            const text = res.data.text.split("\n")
            const aadharno = text[text.length-1].replace(" ", "").replace(" ","").trim()
            console.log(aadharno)
            axios.post('http://127.0.0.1:5000/api/aadharverify/'+ aadharno, {text: res.data.text}).then(res => {
                setAadharName(res.data["name"])
            })
        })
        .catch(err => console.warn(err));
        setTimeout(() => {
            setLoader(false)
        }, 3000);
    }
    return (
        <div className="absolute w-screen h-full top-0 left-0 z-40 transition-all duration-500 " >
            
{showLoader&&<div class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
  <span class="text-color4 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0" style={{top:"50%"}}>
    <i class="fas fa-circle-notch fa-spin fa-5x"></i>
    <h1 className="font-semibold text-xl" >Verifying</h1>
  </span>
</div>}
            <div className="absolute  top-0 left-0 w-full h-full bg-color6 opacity-30" ></div>
            <div className="absolute top-0 left-0 w-full py-6 flex justify-center items-center" >
                <div className="rounded-xl w-11/12 h-full md:w-2/3 py-4  bg-color0 flex flex-col justify-center items-center" >
                    <h2 className="text-color6 font-bold uppercase text-xl ">At what level you play?</h2>
                    <div className="my-4 flex flex-wrap justify-center w-full px-8" >

                        {levels.map(el => {
                            return <button onClick={() => toggleLevel(el)} className={`bg-color0 text-color6 my-4 mx-2 py-6 px-4 rounded-lg shadow-lg cursor-pointer transition-all duration-600 focus:outline-none uppercase font-bold ${level.includes(el) && "border-2 border-color4"}  `} >{el}</button>
                        })}

                    </div>
                    <h2 className="text-color6 font-bold uppercase text-xl ">what sports do you prefer?</h2>
                    <div className="my-4 flex flex-wrap justify-center w-full px-8" >

                        {sports.map(sport => {
                            return <button onClick={() => toggleSport(sport)} className={`bg-color0 text-color6 my-4 mx-2 py-6 px-4 rounded-lg shadow-lg cursor-pointer transition-all duration-600 focus:outline-none uppercase font-bold ${skillSet.includes(sport) && "border-2 border-color4"}  `} >{sport}</button>
                        })}

                    </div>
                    <h2 className="text-color6 font-medium uppercase text-xl">Upload your aadhar</h2>
                    <div className="my-4">
                        <div class="flex w-full  items-center justify-center bg-grey-lighter">
                            <label class="w-64 flex flex-col items-center px-4 py-6 bg-color0 text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-color1 hover:text-white">{file !== "" ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg> : <svg  width="30" height="30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                            </svg>}
                            <form onChange={verify} enctype="multipart/form-data" >
                                <input type='file' name="file" className="hidden" onChange={(e) => setFile(e.target.value)} />
                               
                            </form>
                            </label>
                        </div>
                    </div>
                    <button onClick={handleSubmit} className="border-2 w-1/2 border-color1 font-bold mt-2  shadow-md py-2 bg-color4 text-color0 transition duration-600 transform hover:scale-110" >Submit</button>
                </div>
            </div>
        </div>

    )
}

export default SkillSetModal
