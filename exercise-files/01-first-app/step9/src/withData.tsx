import React, { useState } from "react"
import { AppState } from "./AppStateContext"
import { load } from "./api"

export const withData = (
  WrappedComponent: React.ComponentType<
    React.PropsWithChildren<{ initialState: AppState }>
  >
) => {
  return ({ children }: React.PropsWithChildren<{}>) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<Error | undefined>()
    const [initialState, setInitialState] = useState<AppState>({
      lists: [],
      draggedItem: undefined,
    })

    React.useEffect(() => {
      const fetchInitialState = async () => {
        try {
          const data = await load()
          setInitialState(data)
        } catch (e) {
          setError(e)
        }
        setIsLoading(false)
      }
      fetchInitialState()
    }, [])

    if (isLoading) {
      return <div>Loading</div>
    }

    if (error) {
      return <div>{error.message}</div>
    }

    return (
      <WrappedComponent initialState={initialState}>
        {children}
      </WrappedComponent>
    )
  }
}
