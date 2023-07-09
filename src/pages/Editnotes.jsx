import React, { useState } from 'react'
import Editnotesleft from '../components/Editnotesleft'
import Editnotesright from '../components/Editnotesright'
export default function Editnotes({supabase,getnote,deletenoteinDB,mode}) {
  const [editnotes, seteditnotes] = useState('')
  const mainstyle = {
    display:'flex',
    height:"600px" 
  }
  if(mode === 'dark'){
    document.body.style.background = 'black'
  }else{
    document.body.style.background = 'white'
  }
  function editnotestatehandle(value,id){
    seteditnotes({value,id})
  }
  return (
    <div style={mainstyle}>
        <Editnotesleft senddata={editnotestatehandle} mode={mode} supabase={supabase} getnote={getnote} deletenoteinDB={deletenoteinDB}/>
        <Editnotesright share={editnotes} mode={mode} supabase={supabase}/>
    </div>
  )
}
