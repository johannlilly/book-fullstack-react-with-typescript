import React, { FunctionComponent } from "react"
import { selectKey } from "../../domain/keyboard"
import { notes } from "../../domain/note"
import { Key } from "../Key"
import "./style.css"

export const Keyboard: FunctionComponent = () => {
  return (
    <div className="keyboard">
      {notes.map(({ midi, type, index, octave }) => {
        const label = selectKey(octave, index)
        return <Key key={midi} type={type} label={label} />
      })}
    </div>
  )
}
