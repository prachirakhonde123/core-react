import React,{useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
  const data = useLoaderData();
  // const [data,setData] = useState([]);
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/prachirakhonde123')
  //   .then(response => response.json())
  //   .then(data => 
  //     // console.log(data.followers),
  //     setData(data)
  //   )
  // },[])

  return (
    <div className='text-center bg-gray-600 p-4 m-4 text-white text-3xl'>
        Github Followers : {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  )
}

export default Github

/* Another way is By using loader for that we need function */

export const githubLoaderData = async () => {
   const response = await fetch('https://api.github.com/users/prachirakhonde123')
   return response.json();
}