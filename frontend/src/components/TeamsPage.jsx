import { useContext } from 'react';
import Team from './TeamFormation/Team';
import { Outlet } from 'react-router-dom';
import UserContext from './context/context';

const TeamsPage = () => {
  const { toogle } = useContext(UserContext);

  return (
    <div className="relative w-full h-screen">
      <Team />
      {toogle && (
        <div className="absolute inset-0 flex items-center justify-center z-10 backdrop-blur-lg">
          <div className="p-6 rounded-lg shadow-lg bg-black z-20 border-2 border-orange-500 w-[800px] flex justify-center">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamsPage;
