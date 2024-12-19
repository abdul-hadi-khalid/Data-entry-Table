import React,{useState} from 'react'
import './Header.css'
import Login from './Login.js'

function Header() {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
      <div className='header-container'>
        <h1 className='montserrat-subrayada-bold'>Data table:</h1>
        <button onClick={()=>setShowLogin(true)} className='add-button'><i class="fa-solid fa-plus"></i>&ensp;Add User</button>
        {showLogin && <Login  onClose={()=>setShowLogin(false)}/>}
      </div>
    </>
  )
}

export default Header
