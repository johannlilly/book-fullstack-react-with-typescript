import React, { FunctionComponent } from "react"
import { useInstrument } from "../../state/Instrument"
import { withInstrument } from "../../adapters/Soundfont"
import { useAudioContext } from "../AudioContextProvider"
import { Keyboard } from "../Keyboard"
import "./style.css"

const WrappedKeyboard = withInstrument(Keyboard)

export const KeyboardWithInstrument: FunctionComponent = () => {
  const AudioContext = useAudioContext()!
  const { instrument } = useInstrument()

  return (
    <WrappedKeyboard
      AudioContext={AudioContext}
      instrument={instrument}
    />
  )
}
