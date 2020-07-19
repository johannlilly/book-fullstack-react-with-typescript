/// <reference types="react-scripts" />

type SoundfontType = typeof Soundfont
type AudioContextType = typeof AudioContext

interface Window extends Window {
  webkitAudioContext: AudioContextType
}
