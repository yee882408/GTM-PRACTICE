import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TagManager from 'react-gtm-module'
import './App.css'

const tagManagerArgs = {
    gtmId: 'GTM-WHZ2SFNT'
}

TagManager.initialize(tagManagerArgs)


function App() {
  const [count, setCount] = useState(0)
  window.dataLayer.push({
    event: 'event',
    eventProps: {
      category: category,
      action: action,
      label: label,
      value: value
    }
  });
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
  </>
  )
}

export default App
