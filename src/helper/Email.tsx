import React from 'react'

const Email = ({username,otp}:{
  username:string,
  otp:string,
}) => {
  return (
    <div>
      <div className='text-xl py-4 '>ScholarHire</div>
      <h5  className='text-sm'>Dear {username},</h5>
      <h1 className='text-2xl'>Confirm your email address</h1>
      <p>Your confirmation code is below - enter it in your open browser window and we'll help you get signed in.</p>
      <div className='p-5 text-center bg-slate-100 text-slate-700 text-3xl'>
        {otp||7493}
      </div>
    </div>
  )
}

export default Email
