import React from "react"

interface CounterProps {
  message: string
}
interface CounterState {
  count: number
}

export class Counter extends React.Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0
  }

  increment = () => {
    this.setState(state => ({
      count: state.count + 1
    }))
  }

  decrement = () => {
    this.setState(state => ({
      count: state.count - 1
    }))
  }

  render() {
    return (
      <>
        <p>
          {this.props.message} {this.state.count}
        </p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    )
  }
}
