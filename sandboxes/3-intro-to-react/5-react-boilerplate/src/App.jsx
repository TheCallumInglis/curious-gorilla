import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import Footer from './components/Footer'
import viteLogo from '/vite.svg'


// EEE

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((count) => count + 1);
  }

  console.log({ count });
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick }>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer/>
      <Footer/>
      <Footer/>
      <Footer/>
      <Footer/>
      <Footer/>
      <Footer/>
    </>
  )
}

export default App
