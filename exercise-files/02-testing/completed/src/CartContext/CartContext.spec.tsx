import React from "react"

describe("CartProvider", () => {
  describe("when 'addToCart' is called", () => {
    it.todo("adds product to products array")
    it.todo("saves products in local storage")
  })

  describe("with products", () => {
    describe("when 'clearCart' is called", () => {
      it.todo("returns empty array for products")
      it.todo("removes products from local storage")
    })

    describe("when 'removeFromCart' is called", () => {
      it.todo("removes product from products array")
      it.todo("removes product from local storage")
    })
  })

  describe("with products in localStorage", () => {
    it.todo("loads products from localStorage")
  })

  describe("with empty localStorage", () => {
    it.todo("products is empty array")
  })
})
