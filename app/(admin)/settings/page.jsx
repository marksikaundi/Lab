import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

export default async function settings() {
  const user = await currentUser()

  return (
    <div className='my-10'>
      <h2>Hello, {user?.firstName} </h2>
    </div>
  )
}
