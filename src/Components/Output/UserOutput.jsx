// import React
import React from 'react'

function UserOutput(props) {
    
  return (
    <div className='myOutput'>
        {/* The text for the output is here */}
        <p className='myText'>
            My name is {props.user}. I am 29 years old. <br />
            {/* the two-way binding to display starting username and the input that overwrites the previous name */}
            <input type="text" onChange={props.change} value={props.user} className=' bg-[#f5f2f2] rounded-2xl p-2 mx-12 shadow-md' />
        </p>
    </div>
  )
}

export default UserOutput