import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { DndProvider } from "react-dnd"
import Backend from "react-dnd-html5-backend"
import { AppStateProvider } from "./AppStateContext"

ReactDOM.render(
  <DndProvider backend={Backend}>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </DndProvider>,
  document.getElementById("root")
)
