import React, { FunctionComponent } from "react"
import { withInstrumentStatic } from "../../adapters/Soundfont/withInstrumentStatic"
import { useAudioContext } from "../AudioContextProvider"
import { Keyboard } from "../Keyboard"
import "./style.css"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const withGuitar = withInstrumentStatic("acoustic_guitar_steel")
const withPiano = withInstrumentStatic("acoustic_grand_piano")
const WrappedKeyboard = withPiano(Keyboard)

export const KeyboardWithInstrument: FunctionComponent = () => {
  const AudioContext = useAudioContext()!
  return <WrappedKeyboard AudioContext={AudioContext} />
}
