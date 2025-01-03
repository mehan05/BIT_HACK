import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/context";

const TeamCard = () => {
  const { toogle, setToogle } = useContext(UserContext);

  return (
    <div className='flex flex-col items-center max-w-sm max-h-screen overflow-hidden p-4 hover:-translate-y-5 transition-transform duration-300'>
      <div className='border-2 border-orange-500 shadow-lg shadow-orange-500 rounded-lg mr-4 mb-4 p-3 hover:bg-orange-500 text-white'>
        <a href="#">
          <h5 className="font-bold text-4xl mb-4 tracking-tight">Team Name</h5>
        </a>
        <p className="text-justify leading-relaxed mb-4">
          <li>Member</li>
          <li>Member</li>
          <li>Member</li>
        </p>
        <div className='flex justify-center'>
          <Link
            to="/team-formation/team-details"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-white text-orange-500 rounded-lg hover:bg-orange-600 hover:text-white transition-colors"
            onClick={() => setToogle(true)} 
          >
            View Details
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
