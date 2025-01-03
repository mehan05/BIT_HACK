import { useRef } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const targetSession = useRef();
    const handleScroll = (event)=>{
        event.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
  return (
    <div className=" flex flex-wrap justify-between w-full px-3 py-7  ">
        <div className="flex  shadow-md shadow-orange-500  border-2 border-orange-500 px-3 py-3 rounded-xl hover:scale-110 transform duration-300">
            <img src="/leonardo.png" alt="logo" className="w-12 h-12 mr-2" />
            <span className="flex font-bold text-lg ">Event_Manager</span>
        </div>
        <div  className="flex  justify-center border-2 border-orange-500 px-4 py-4 rounded-lg md:mt-0   shadow-md shadow-orange-500 " >
            <ul  className="flex gap-6 text-lg">
                <NavLink to="/" className={({isActive})=>isActive? "bg-orange-500 text-white  rounded-lg  px-2":" hover:bg-orange-500 hover:text-white px-2  rounded-lg hover:scale-110  transform duration-300 "}>Home</NavLink>
                <NavLink to="/problems" className={({isActive})=>isActive? "bg-orange-500 text-white  rounded-lg  px-2":" hover:bg-orange-500 hover:text-white px-2  rounded-lg hover:scale-110  transform duration-300 "}>Problems</NavLink>
                <NavLink to="/team-formation" className={({isActive})=>isActive? "bg-orange-500 text-white  rounded-lg  px-2":" hover:bg-orange-500 hover:text-white px-2  rounded-lg hover:scale-110  transform duration-300 "}>Team Formation </NavLink>
                <NavLink to="/aboutus" ref={ targetSession} className={({isActive})=>isActive? "bg-orange-500 text-white  rounded-lg  px-2":" hover:bg-orange-500 hover:text-white px-2  rounded-lg hover:scale-110  transform duration-300 " } onClick={handleScroll}>AboutUs </NavLink>

             
            </ul>
        </div>
        <div className="flex justify-end  hover:bg-orange-500 hover:text-white max-h-11  rounded-lg hover:scale-110  transform duration-300 border-2 px-4 py-4 border-orange-500 shadow-md shadow-orange-500 ">
            <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar