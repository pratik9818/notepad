import React, { useEffect ,useState} from 'react'

export default function Editnotesleft( {senddata,supabase,getnote ,deletenoteinDB,mode}) {

  const [state, setstate] = useState([])
  const notecontainer = {
    'margin-top':'1rem'
  }
  const heading = {}
  const childstyle = {
    height:'50px',
    'margin-top':'.7rem'
  }
const leftside = {
        width:'50%',
        'overflow-y':'scroll'
}
if(mode === 'dark'){
  notecontainer.border = '1px solid white'
  notecontainer.color = 'white'
  heading.color = 'white'
}else{
  notecontainer.border = '1px solid black'
  notecontainer.color = 'black'
  heading.color = 'black'
}
useEffect(() => {
  getNotes()
}, [state])

async function getNotes(){
 const data =  await getnote()
  setstate(data)
}
function getcontent(value,id){
  senddata(value,id)
}
  return (
    <div style={leftside}>
      <h4 style={heading}>All notes</h4>
      {state.map((note) =>(
       <div style={notecontainer}>
         <div onClick={(e)=>{getcontent(e.target.innerHTML,note.id)}} key={note.id} style={childstyle}>{note.note}</div>
         <button className='deletenote'  onClick={()=>{deletenoteinDB(note.id)}}>delete</button>
       </div>
      ))}
    </div>
  )
}
