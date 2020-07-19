import { useCart } from "./useCart"
import { renderHook } from "@testing-library/react-hooks"
import { Product } from "../shared/types"
import TestRenderer from "react-test-renderer"
const { act } = TestRenderer

const localStorageMock = (() => {
  let store: { [key: string]: string } = {}
  return {
    clear: () => {
      store = {}
    },
    getItem: (key: string) => {
      return store[key] || null
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value ? value.toString() : ""
    })
  }
})()

Object.defineProperty(window, "localStorage", {
  value: localStorageMock
})

describe("useCart", () => {
  afterEach(() => {
    localStorageMock.clear()
  })

  describe("on mount", () => {
    it("it loads data from localStorage", () => {
      const products: Product[] = [
        {
          name: "Product foo",
          price: 0,
          image: "image.jpg"
        }
      ]
      localStorageMock.setItem(
        "products",
        JSON.stringify(products)
      )

      const { result } = renderHook(useCart)

      expect(result.current.products).toEqual(products)
    })
  })

  describe("#addToCart", () => {
    it("adds item to the cart", () => {
      const product: Product = {
        name: "Product foo",
        price: 0,
        image: "image.jpg"
      }
      const { result } = renderHook(useCart)

      act(() => {
        result.current.addToCart(product)
      })

      expect(result.current.products).toEqual([product])
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        "products",
        JSON.stringify([product])
      )
    })
  })

  describe("#removeFromCart", () => {
    it("removes item from the cart", () => {
      const product: Product = {
        name: "Product foo",
        price: 0,
        image: "image.jpg"
      }
      localStorageMock.setItem(
        "products",
        JSON.stringify([product])
      )

      const { result } = renderHook(useCart)

      act(() => {
        result.current.removeFromCart(product)
      })

      expect(result.current.products).toEqual([])
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        "products",
        "[]"
      )
    })
  })

  describe("#totalPrice", () => {
    it("returns total products price", () => {
      const product: Product = {
        name: "Product foo",
        price: 21,
        image: "image.jpg"
      }
      localStorageMock.setItem(
        "products",
        JSON.stringify([product, product])
      )
      const { result } = renderHook(useCart)

      expect(result.current.totalPrice()).toEqual(42)
    })
  })

  describe("#clearCart", () => {
    it("removes all the products from the cart", () => {
      const product: Product = {
        name: "Product foo",
        price: 21,
        image: "image.jpg"
      }
      localStorageMock.setItem(
        "products",
        JSON.stringify([product, product])
      )
      const { result } = renderHook(useCart)

      act(() => {
        result.current.clearCart()
      })

      expect(result.current.products).toEqual([])
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        "products",
        "[]"
      )
    })
  })
})
