import React from 'react'
import Greeting from './Greeting'
import ConditionalRendering from './Component/ConditionalRendering'
import Student from './Task/Student'
import Student1 from './Task/Student1'

export default function App() {
  // const name="Divya Sree"
  // const city="salem TN"
  // const address= "abc street,xyz colony"
  return (
    <div>

      {/* <h2>Good Morning all</h2>
      <h3>My name is {name}</h3>
      <Greeting name={name} city={city}/>
      <Greeting name={name} city={address}/> */}

      <Student1 />

       <h2>Conditional Rendering</h2>
      <ConditionalRendering/>
    </div>
  )
}
