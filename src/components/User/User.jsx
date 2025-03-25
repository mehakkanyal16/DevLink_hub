import React from 'react'
import {useParams} from 'react-router-dom';

function User() {
    const {userid}=useParams()
  return (
    <div className='bg-slate-600 text-center text-3xl p-7 m-4 '>
      User:{userid}
    </div>
  )
}

export default User

