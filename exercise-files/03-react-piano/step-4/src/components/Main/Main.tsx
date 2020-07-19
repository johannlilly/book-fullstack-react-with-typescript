import React, { FunctionComponent } from "react"
import { KeyboardWithInstrument } from "../Keyboard"
import { NoAudioMessage } from "../NoAudioMessage"
import { useAudioContext } from "../AudioContextProvider"

export const Main: FunctionComponent = () => {
  const AudioContext = useAudioContext()
  return !!AudioContext ? (
    <KeyboardWithInstrument />
  ) : (
    <NoAudioMessage />
  )
}
