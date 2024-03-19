import React from 'react'
import './css/Register.css'

function Register() {
  return (
    <div>
        <form action="#" method="POST">
            <input type="email" name="email" id="email" placeholder='Enter Email' />
            <input type="password" name="password" id="password" placeholder='Enter Password' />
            <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Enter Confirm Password' />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Register
