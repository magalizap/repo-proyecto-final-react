import React from 'react'
import { Link } from 'react-router-dom'
//import backgroundImg from '../../assets/img/fondo-tropical.jpg'
export const Home = () => {
  
  return (
    <main className='bg-fondo'>
      <div className='botonInicio'>
        <Link to='/ItemListContainer/' className="btn-large">Ver tienda</Link>
      </div>
    </main>

  )
}

export default Home

