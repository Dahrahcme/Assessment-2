// import React
import React from 'react'

function UserOutput(props) {
    
  return (
    <div className='myOutput'>
        {/* The text for the output is here */}
        <p className='myText'>
            My name is {props.user}. I am 29 years old. <br />
            I am a citizen of Nigeria and I am from Ondo state.
        </p>
    </div>
  )
}

export default UserOutput