import { Component, ReactElement } from "react"
import Soundfont, { InstrumentName, Player } from "soundfont-player"
import { MidiValue } from "../../domain/note"
import { Optional } from "../../domain/types"
import {
  AudioNodesRegistry,
  DEFAULT_INSTRUMENT
} from "../../domain/sound"

interface ProvidedProps {
  loading: boolean
  play(note: MidiValue): Promise<void>
  stop(note: MidiValue): Promise<void>
}

interface ProviderProps {
  instrument: InstrumentName
  AudioContext: AudioContextType
  render(props: ProvidedProps): ReactElement
}

interface ProviderState {
  loading: boolean
  current: Optional<InstrumentName>
}

export class SoundfontProvider extends Component<
  ProviderProps,
  ProviderState
> {
  public static defaultProps = {
    instrument: DEFAULT_INSTRUMENT
  }

  private audio: AudioContext
  private player: Optional<Player> = null
  private activeNodes: AudioNodesRegistry = {}

  public state: ProviderState = {
    loading: false,
    current: null
  }

  private resume = async () => {
    return this.audio.state === "suspended"
      ? await this.audio.resume()
      : Promise.resolve()
  }

  private load = async (instrument: InstrumentName) => {
    this.setState({ loading: true })
    this.player = await Soundfont.instrument(this.audio, instrument)

    this.setState({ loading: false, current: instrument })
  }

  constructor(props: ProviderProps) {
    super(props)

    const { AudioContext } = this.props
    this.audio = new AudioContext()
  }

  public componentDidMount() {
    const { instrument } = this.props
    this.load(instrument)
  }

  public shouldComponentUpdate({ instrument }: ProviderProps) {
    return this.state.current !== instrument
  }

  public componentDidUpdate({
    instrument: prevInstrument
  }: ProviderProps) {
    const { instrument } = this.props
    if (instrument && instrument !== prevInstrument)
      this.load(instrument)
  }

  public play = async (note: MidiValue) => {
    await this.resume()
    if (!this.player) return

    const node = this.player.play(note.toString())
    this.activeNodes = { ...this.activeNodes, [note]: node }
  }

  public stop = async (note: MidiValue) => {
    await this.resume()
    if (!this.activeNodes[note]) return

    this.activeNodes[note]!.stop()
    this.activeNodes = { ...this.activeNodes, [note]: null }
  }

  public render() {
    const { render } = this.props
    const { loading } = this.state

    return render({
      loading,
      play: this.play,
      stop: this.stop
    })
  }
}
