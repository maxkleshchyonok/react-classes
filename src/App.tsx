import { useState } from 'react'
import './style.scss'

export const App = () => {
  const [state, setState] = useState(0)
  //console.log(state)

  return (
    <>
      <h1 className="title">Title</h1>
      <button
        onClick={() => {
          setState(state + 1)
        }}
      >
        Click
      </button>
    </>
  )
}

export default App
