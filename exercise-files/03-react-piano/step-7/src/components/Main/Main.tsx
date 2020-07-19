import React, { FunctionComponent } from "react"
import { Playground } from "../Playground"
import { NoAudioMessage } from "../NoAudioMessage"
import { useAudioContext } from "../AudioContextProvider"

export const Main: FunctionComponent = () => {
  const AudioContext = useAudioContext()
  return !!AudioContext ? <Playground /> : <NoAudioMessage />
}
