import { Optional } from "./types"

export function accessContext(): Optional<AudioContextType> {
  return window.AudioContext || window.webkitAudioContext || null
}
