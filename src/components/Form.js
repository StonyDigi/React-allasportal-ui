import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='form'>

        <form action="" method="post">
            <label>Állás megnevezése </label>
            <input type="text" />
            <label>Dátum</label>
            <input type="date" />
            <label>Állás leírása</label>
            <textarea  cols="35" rows="10"></textarea>
            <button>Feltöltés</button>
        </form>

    </div>
  )
}

export default Form