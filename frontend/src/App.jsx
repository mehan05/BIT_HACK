import { Routes ,Route} from 'react-router-dom'
import './App.css'
import TeamsPage from './components/TeamsPage'
import Problems from './components/Problems'
import Home from './components/Home'
import Navbar from './components/header/Navbar'
import Domain from './components/DomainPage/Domain'
import axios from 'axios'
import ProblemStatements from './components/Problem_statements/ProblemStatements'
import ProblemDescription from './components/ProblemDescription/ProblemDescription'
import { useEffect } from 'react'
import TeamDetails from './components/TeamFormation/TeamDetails'
import Login from './components/Login/Login'

function App() {
  useEffect(()=>{

    const api = axios.create({
      baseURL:'http://localhost:4000'
    })
    const  gettingtest =async()=>{

        try {
          const res = await api.get('/home');
          console.log(res.data)
        } catch (error) {
            console.error(error);
        }
    }
    gettingtest()
  },[])
  return (
    <div className='relative w-full min-h-screen overflow-hidden text-white bg-black' >
      <video src="/homegif1.mp4" autoPlay muted loop className='absolute top-0 left-0 w-full h-full object-cover'></video>
      <div className='relative z-10 flex flex-col min-h-screen'>
        <Navbar />
        
        <div className='flex-grow'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/problems' element={<Problems />} />
            <Route path='/problems/software' element={<Domain/>}/>
            <Route path='/problems/hardware' element={<Domain/>}/>
            <Route path='/problems/software/problem-statements' element={<ProblemStatements/>}/>
            <Route path='/problems/software/problem-statements/problemstatement/:id' element={<ProblemDescription/>}/>
            <Route path='/team-formation' element={<TeamsPage />} >
                <Route path='team-details' element={<TeamDetails/>}/>
            </Route>
          </Routes>
        </div>

      </div>
    </div>
  );
}


export default App
