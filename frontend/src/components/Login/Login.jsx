import { GoogleLogin } from '@react-oauth/google'
import React, { useEffect } from 'react'
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [userData,setUserData]=React.useState({});
  const navigate = useNavigate();
  console.log("getting data",userData)
  useEffect(()=>{
    if(userData.name){  
      navigate('/home')
    }

  },[userData,navigate])  

  return (
    <div className='flex justify-center items-center'>
        <div className='border-2 border-orange-500 shadow-lg shadow-orange-500 min-w-[40rem] min-h-[15rem] rounded-lg p-10'> 
            <div className='flex flex-col items-center'>
                 <h1 className='text-3xl font-bold'>Login</h1>
                    <div className='border-2  border-orange-500 shadow-lg shadow-orange-500 rounded-lg p-3 mt-5 hover:transition-transform hover:scale-105 hover:duration-500'>
                            {/* <button className='font-bold'>Google Sigin</button> */}
                            <GoogleLogin
                                onSuccess={response=>{
                                  console.log(jwtDecode(response.credential));
                                  setUserData(jwtDecode(response.credential));

                                }}
                                onError={response=>console.log(response)}

                                />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Login