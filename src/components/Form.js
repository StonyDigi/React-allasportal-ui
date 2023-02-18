import React from 'react'
import './Form.css'

const Form = ({userName, password}) => {
  return (
    <div className='form'>

        <form action="/" method="post">
            <label>Felhasználónév: </label>
            <input type="text" placeholder='Felhasználónév' />
            <label>Jelszó: </label>
            <input type="password" placeholder='Jelszó'/>
            <button>Bejelentkezés</button>
        </form>

    </div>
  )
}

export default Form