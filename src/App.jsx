import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Create from './components/Create'
import Display from './components/Display'
import List from './components/List'
import { context } from './components/context'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  const [CreateText , setCreateText] = useState([]);
  // const [uniqueId, setUniqueId] = useState();


  const state = {
    // id :uniqueId,
    // setId : setUniqueId,
  
    text : CreateText,
    setText : setCreateText
  }


  return (
    <div >
    <BrowserRouter>
    <context.Provider value ={state}>
      <Routes>
        <Route path='/' element={<Create/>} />
        <Route path='/list' element={<List/>} />
        <Route path='/list/:id' element={<Display/>} />
        {/* <Route path='Display' element={<Display/>} /> */}
      </Routes>
    </context.Provider>
    </BrowserRouter>
     </div>
  )
}

export default App
