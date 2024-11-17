import { useState } from 'react'
import './App.css'
import { Landing } from './pages/landing'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateProfile2 from './pages/CreateProfile2';
import CreateProfile1 from './pages/CreateProfile1';
import Tour1 from './pages/Tour1';
import Tour2 from './pages/Tour2';
import Tour3 from './pages/Tour3';
import Tour4 from './pages/Tour4';


function App() {
  const [count, setCount] = useState(0);


  function handleClick(){
    setCount(count + 1);
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/createProfile1' element={<CreateProfile1/>} />
          <Route path='/createProfile2' element={<CreateProfile2/>} />
          <Route path='/tour1' element={<Tour1/>} />
          <Route path='/tour2' element={<Tour2/>} />
          <Route path='/tour3' element={<Tour3/>} />
          <Route path='/tour4' element={<Tour4/>} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
