import './App.css'
import {Routes, Route} from 'react-router-dom'
import { Home } from './components/home/home'
import { NotFound } from './components/404/404'

function App() {

  return (
    <>
      <Routes>
        <Route  path='*' element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
