import { useRef, useEffect } from "react"

export const useFocus = () => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    ref.current?.focus()
  })

  return ref
}