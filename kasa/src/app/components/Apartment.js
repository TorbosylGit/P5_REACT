import React from 'react'
import { NavLink } from 'react-router-dom'

function Apartment() {
  return (
    <div className='apartment'>
        <NavLink to="/flat">
            <div className='apartment__subtitle'>Titre de la location</div>
        </NavLink>
            
    </div>
  )
}

export default Apartment