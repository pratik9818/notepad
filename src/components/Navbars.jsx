import React,{useState} from 'react'
import {Link} from 'react-router-dom'
export default function Navbarcomp({changeMode,mode}) {
const navstyle = {
  width:'200px',
  display:'flex',
  'justify-content':'space-between'
}

  return (
   <nav className='navstyle' style={navstyle}>
    <Link to="/">Home</Link>
    <Link to="/editnotes">edit notes</Link>
    <button onClick={changeMode} >{mode}</button>
   </nav>
  ) 
}
