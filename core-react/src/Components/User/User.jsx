/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams();
  return (
    <div className='bg-gray-500 text-white text-2xl mt-10 mb-10 text-center pb-10'>
        <p className='pt-5'>User Details are</p>
        <h1>User : {id}</h1>
    </div>
  )
}

export default User