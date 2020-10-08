import React, { useState } from "react"
import { NewItemForm } from "./NewItemForm"
import { AddItemButton } from "./styles"

interface AddNewItemProps {
  onAdd(text: string): void // callback function that will be called when we click the Create item button.
  toggleButtonText: string // text we’ll render when this component is a button
  dark?: boolean // flag that we’ll pass to the styled component
}

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false)
  const { onAdd, toggleButtonText, dark } = props

  if (showForm) {
    return (
      <NewItemForm
        onAdd={text => {
          onAdd(text)
          setShowForm(false)
        }}
      />
    )
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  )
}
