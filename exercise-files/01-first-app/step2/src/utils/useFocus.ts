import { useRef, useEffect } from "react"

/**
 * Here we use the useRef hook to get access to the rendered input element.
 * TypeScript can’t automatically know what will be the element type.
 * So we provide the actual type to it.
 * In our case, we work with input so it’s HTMLInputElement.
 */

export const useFocus = () => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    ref.current?.focus()
  })

  return ref
}