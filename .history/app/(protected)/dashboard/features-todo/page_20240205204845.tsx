import Link from 'next/link'
import React from 'react'

const FeaturesTODO = () => {
  return (
    <div className='flex flex-col space-y-7'>
        <h1 className='text-3xl font-semibold'>Upcoming Features</h1>

        <div className='space-y-5'>
            <li>Create your own authentication page and use the code in your own project.</li>
            <li>Account Overview</li>
            <li>Password Reset functionality</li>
            <li>2 factor authentication functionality</li>
        </div>

        <div className=''>
            Recommend me some ideas on <Link href={"/gmail"}>harshgoel2004@gmail.com</Link>
        </div>
    </div>
  )
}

export default FeaturesTODO