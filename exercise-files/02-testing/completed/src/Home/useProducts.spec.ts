import { renderHook } from "@testing-library/react-hooks"
import { useProducts } from "./useProducts"

describe("useProducts", () => {
  it.todo("fetches products on mount")
  describe("while waiting API response", () => {
    it.todo("isLoading is true")
    it.todo("error is undefined")
    it.todo("returns data is undefined ")
  })

  describe("with error response", () => {
    it.todo("isLoading is false")
    it.todo("error is undefined")
    it.todo("returns data is undefined ")
  })

  describe("with successful response", () => {
    it.todo("isLoading is false")
    it.todo("error is undefined")
    it.todo("returns data is undefined ")
  })
})
