import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Banner/>
      </div>
    </div>
  )
}

export default App
