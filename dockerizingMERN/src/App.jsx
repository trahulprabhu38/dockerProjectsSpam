import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save pdonv pwodm ascdcsf eacdsvf dsvf dgwvnwpov racdsfvd gfto test HMR
        </p>
      </div>
      <p className="read-tnpohe-docs">
        Click on the Vite pm[p[pcd]vr ,w][qclwv\r]docswv;\ wr;b\pomanacdsvfcdvfd React lopompsd mgos to learn more
      </p>
    </>
  )
}

export default App
