import React,{useEffect,useState} from 'react'
export default function Shownotes({supabase,getnote,deletenoteinDB,mode}) {
  const parentdivstyle = {
    border:'1px solid',
    height:'100px',
    width:'200px',
    display:'flex',
    'flex-direction':'column',
    'justify-content':'space-between',
    'margin':'1rem',
    'padding':'1rem',
    'border-radius':".3rem"
  }
  const maindiv = {
    height:'100%',
    width:'100%',
    display:'flex',
    'flex-wrap':'wrap',
    'margin-top':'2rem',
  }

  if(mode==='dark'){
    document.body.style.background = 'black'
    parentdivstyle.color='white'
    maindiv.color='white'
  }else{
    document.body.style.background = 'white'
    parentdivstyle.color='black'
    maindiv.color='black'
  }
const [state, setstate] = useState([])

useEffect(() => {
  getnotefun()
}, [state])
  async function getnotefun(){
    const getnotes = await getnote()
    setstate(getnotes)
  }
  return (
    <div style={maindiv}>
      <h4>All notes</h4>
        {
          state.map((note)=>(
              <div style={parentdivstyle}>
                <div >{note.note.substring(0,30) + ' ...'}</div>
                <div>{new Date(note.id).toDateString()}</div>
                <button className="deletenote" onClick={()=>{deletenoteinDB(note.id)}}>delete note</button>
              </div>
          ))
        }
    </div>
  )
}
