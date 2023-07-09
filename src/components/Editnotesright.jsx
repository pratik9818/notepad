import { useState ,useEffect} from 'react';
import React from 'react'
export default function Editnotesright({share,supabase,mode}) {
  const headingstyle={}
  const rightside = {
    width:'50%',
    'margin-left':'1rem'
}
  if(mode==='dark'){
    headingstyle.color = 'white'
  }else{
    headingstyle.color = 'black'
  }

  const [note, setNote] = useState()
  const [disable , setdisable] = useState(true)
  const[insertstate,setinsertstate] = useState(false)
  const[heading, setheading] = useState('new note')
  useEffect(() => {
    if(share){
      setNote(share.value)
      setinsertstate(true)
      setheading('edit note')
    }
  }, [share])
 
async function savingintodatabase(){
  if(note.length < 2){
      return;
  }
  if(insertstate){
const { error } = await supabase
.from('notes')
.update({ note: note })
.eq('id', share.id)
setinsertstate(false)
setheading('new note')
return
  }
  insertdb()
}
async function insertdb(){
  const { error } = await supabase
  .from('notes')
  .insert({ id: Date.now(), note: note })
  if(!error){
    setNote('') 
  };
}
return (
<div style={rightside}>
  <button className="newnote" onClick={()=>{
    setNote('') 
    setheading('new note')
    setinsertstate(false)
  }}>new note</button>
 <h1 style={headingstyle}>{heading}</h1>
 <textarea onChange={e=>{
  setNote(e.target.value);
  if(e.target.value.length > 2){
    setdisable(false)
  }else{
    setdisable(true)
  }
  }} 
value={note} id="textarea" cols="78" rows="15"></textarea>
 <button disabled={disable} onClick={savingintodatabase} className='save'>save</button>
</div>
)
}
