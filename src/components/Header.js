import { useState } from "react"

export default function Header(){
    const [toggleStatus,setToggleStatus] = useState(false)
    return (<>
        <nav className="navbar md:px-16 px-8 py-2 sticky w-[100%] z-50 top-0 bg-[#D9D9D9]">
            <div className="flex justify-between items-center">
                <img className="w-20 inline-block" src="/Logo.png" alt="Rebel Racers"/>
                <div className="inline-block">
                    <div className="md:invisible visible md:hidden static" onClick={()=>{
                        setToggleStatus((prev)=>!prev)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>

                    <div className={`text-center justify-between align-middle toggle-bar md:inline-block md:static absolute sm:overflow-hidden h-[100vh] md:h-auto w-[30%] md:w-auto top-0 right-0 ${toggleStatus?"translate-x-[0]":"translate-x-[110%]"} md:translate-x-0 md:bg-transparent bg-gray-100 align-center ease-in-out transition` }>
                        <div className="inline-block visible md:invisible mt-6 md:mt-0" onClick={()=>{
                            setToggleStatus((prev)=>!prev)
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <a href="/" className="md:float-left mr-4 md:inline-block block text-center mt-32 md:mt-0 ">Home</a>
                        <a href="/" className="md:float-left mr-4 md:inline-block block text-center mt-4 md:mt-0 ">About Us</a>
                        <a href="/" className="md:float-left mr-4 md:inline-block block text-center  mt-4 md:mt-0 ">Team</a>
                        <a href="/" className="md:float-left mr-4 md:inline-block block text-center  mt-4 md:mt-0 ">Sponsors</a>
                        <a href="/" className="md:float-left md:inline-block block text-center  mt-4 md:mt-0 ">Contact Us</a>
                    </div>
                </div>
            </div>
            
        </nav>
    </>)
}