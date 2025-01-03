import React, { useContext } from 'react';
import UserContext from "../context/context";

const TeamDetails = () => {
  const { toogle, setToogle } = useContext(UserContext);

  return (
    <div className='flex flex-col items-center max-w-sm max-h-screen overflow-hidden p-4 hover:-translate-y-5 transition-transform duration-300'>
      <div className='border-2 border-orange-500 shadow-lg shadow-orange-500 rounded-lg mb-4 p-3 hover:bg-orange-500 text-white'>
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none">Latest Customers</h5>
          <button
            onClick={() => setToogle(false)} 
            className="text-sm font-medium text-white underline hover:text-orange-300"
          >
            X
          </button>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-orange-300">
            {[
              { name: "Neil Sims", email: "email@windster.com", amount: "$320", img: "/docs/images/people/profile-picture-1.jpg" },
              { name: "Bonnie Green", email: "email@windster.com", amount: "$3467", img: "/docs/images/people/profile-picture-3.jpg" },
              { name: "Michael Gough", email: "email@windster.com", amount: "$67", img: "/docs/images/people/profile-picture-2.jpg" },
              { name: "Lana Byrd", email: "email@windster.com", amount: "$367", img: "/docs/images/people/profile-picture-4.jpg" },
              { name: "Thomes Lean", email: "email@windster.com", amount: "$2367", img: "/docs/images/people/profile-picture-5.jpg" }
            ].map((person, index) => (
              <li className="py-3 sm:py-4" key={index}>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={person.img} alt={`${person.name} image`} />
                  </div>
                  <div className="flex-1 min-w-0 ml-4">
                    <p className="text-sm font-bold truncate">{person.name}</p>
                    <p className="text-sm text-white truncate">{person.email}</p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold">
                    {person.amount}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
