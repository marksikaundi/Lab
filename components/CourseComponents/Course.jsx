import React from 'react'

function Course({course, section}) {
  return (
    <div className='w-full'>
      <h1>{section.section_title}</h1>
      <p>{course.description}</p>
    </div>
  )
}

export default Course