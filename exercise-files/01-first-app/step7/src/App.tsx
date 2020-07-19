import React from "react"
import { Column } from "./Column"
import { AppContainer } from "./styles"
import { useAppState } from "./AppStateContext"
import { AddNewItem } from "./AddNewItem"
import { DragItem } from "./DragItem"
import CustomDragLayer from "./CustomDragLayer"

interface Task {
  id: string
  text: string
}

interface List {
  id: string
  text: string
  tasks: Task[]
}

export interface AppState {
  draggedItem: DragItem | undefined
  lists: List[]
}

const App = () => {
  const {state, dispatch} = useAppState()

  return (
    <AppContainer>
      <CustomDragLayer />
      {state.lists.map((list, i) => (
        <Column id={list.id} text={list.text} key={list.id} index={i}/>
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={text => dispatch({ type: "ADD_LIST", payload: text })}
      />
    </AppContainer>
  )
}

export default App
