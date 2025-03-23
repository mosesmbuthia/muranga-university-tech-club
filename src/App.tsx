import { Routes, Route, BrowserRouter} from "react-router-dom"

import './App.css'
import Home from './assets/Components/Pages/Home/Home'
import Leadership from './assets/Components/Pages/Leadership/Leadership'
import Tracks from './assets/Components/Pages/Tracks/Tracks'
import Events from './assets/Components/Pages/Events/Events'
import Navbar from "./assets/Components/Pages/Navbar/Navbar"

function App() {
 

  return (
  
     <div className="app">
      <BrowserRouter>
      <Navbar/>
     <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/leadership"  element={<Leadership/>} />
      <Route path="/tracks"  element={<Tracks/>} />
      <Route path="/events"  element={<Events/>} />
     </Routes>
     
      </BrowserRouter>
      
     </div>

    
  )
}

export default App
