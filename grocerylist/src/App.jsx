import { useState } from "react"
import "./App.css"

export default function App() {
  const [input, setInput] = useState("")
  const [items, setItems] = useState([])

  const addItem = () => {
    if (input.trim() === "") return
    setItems([...items, input])
    setInput("")
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addItem()
  }

  return (
    <div className="container">
      <h1>Sofia's Grocery List</h1>
      <p>Enter your items into the box below:</p>
      <div className="input-row">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button onClick={addItem}>+</button>
      </div>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
