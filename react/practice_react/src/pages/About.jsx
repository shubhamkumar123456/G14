import React from 'react'

const About = (props) => {
  console.log(props)
  console.log(props.a)
  return (
    <div>
      <h1>This is About Page</h1>
      <p>{props.a}</p>
    </div>
  )
}

export default About
