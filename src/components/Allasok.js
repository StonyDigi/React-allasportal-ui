import React from 'react'
import './Allasok.css'

const Allasok = ({pozicio, datum, leiras, gomb}) => {
  return (
    <div className='allas-container'>
        
        <div className="allasok">
        <h3>{pozicio}</h3>
        <p>{datum}</p>
        <hr />
        <p>{leiras}</p>
        <button>{gomb}</button>
        </div>
        

    </div>
  )
}

export default Allasok