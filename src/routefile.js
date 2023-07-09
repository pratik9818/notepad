import Navbarcomp from "./components/Navbars";
import Editnotes from "./pages/Editnotes";
import {Routes ,Route} from 'react-router-dom'
import Shownotes from "./pages/Shownotes";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
const supabase = createClient("your supabaseUrl", "your supabaseKey"); // you can get both when you create supabase account -> project 
function App() {
  const [mode, setmode] = useState('dark')

  function changeMode(){
    if(mode === 'dark'){
      setmode('light')
    }else{
      setmode('dark')
    }
  }
    
  async function getnote(){
    const { data, error } = await supabase
    .from('notes')
    .select()
    return data
      }

      async function deletenoteinDB(id){
        const { error } = await supabase
        .from('notes')
        .delete()
        .eq('id', id)
        }
  return (
    <>
      <Navbarcomp changeMode={changeMode} mode={mode}/>
    <Routes>
  <Route path='/' element={<Shownotes supabase={supabase} getnote={getnote} deletenoteinDB={deletenoteinDB} mode={mode}/>}/>
  <Route path='/editnotes' element={<Editnotes supabase={supabase} getnote={getnote} deletenoteinDB={deletenoteinDB} mode={mode}/>}/>
</Routes>
</>
  )
}

export default App;
