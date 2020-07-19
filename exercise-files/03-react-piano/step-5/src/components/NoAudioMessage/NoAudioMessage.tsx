import React, { FunctionComponent } from "react"

export const NoAudioMessage: FunctionComponent = () => {
  return (
    <div>
      <p>Sorry, it's not gonna work :–(</p>
      <p>
        Seems like your browser doesn't support <code>Audio API</code>
        .
      </p>
    </div>
  )
}
