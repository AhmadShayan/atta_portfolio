import { useState } from 'react'
import reactLogo from '../public/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import "/MRATTAURRAHMAN.pdf";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
  {/* <Route path='/' element={</>}/> */}
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
