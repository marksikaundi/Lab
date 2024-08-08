import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

function Challenges({challenges}) {

  return (

    <div className='mt-10'>
      <h1 className='text-4xl font-bold pb-8'>Challenges</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {challenges.map((challenge) => (
        <div className="overflow-hidden rounded-lg border border-muted bg-background shadow-sm transition-all hover:scale-[1.02] hover:shadow-md focus-within:scale-[1.02] focus-within:shadow-md">
        <Link href="#" className="block h-full" prefetch={false}>
          <img
            src="https://utfs.io/f/b9b4d679-34e2-4664-93b8-2c8283fa88dd-1h.png"
            alt="Course Image"
            width={600}
            height={400}
            className="h-48 w-full object-cover"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">
              {challenge.title}
            </h3>
            <p className="mt-2 text-muted-foreground">
              {challenge.description}
            </p>
          <Link href={{pathname:"/challenges/challenge",query:{_id : challenge?._id}}} key={challenge._id} variant="link" size="sm" className="mt-4">
              Learn More
            </Link>
          </div>
        </Link>
      </div>
      ))}
      </div>
    </div>
  )
}

export default Challenges