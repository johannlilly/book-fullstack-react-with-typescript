import React from "react"
import { App } from "./App"
import { createMemoryHistory } from "history"
import { render } from "@testing-library/react"
import { Router } from "react-router-dom"

jest.mock("./Home", () => ({ Home: () => <div>Home</div> }))
jest.mock("./Cart", () => ({ Cart: () => <div>Cart</div> }))
jest.mock("./Checkout", () => ({
  Checkout: () => <div>Checkout</div>
}))
jest.mock("./OrderSummary", () => ({
  OrderSummary: () => <div>Order summary</div>
}))

describe("App", () => {
  it("renders successfully", () => {
    const history = createMemoryHistory()
    const { container } = render(
      <Router history={history}>
        <App />
      </Router>
    )
    expect(container.innerHTML).toMatch("Goblin Store")
  })

  describe("routing", () => {
    it("renders home page on '/'", () => {
      const { container } = renderWithRouter(
        () => <App />,
        "/"
      )
      expect(container.innerHTML).toMatch("Home")
    })

    it("renders checkout page on '/cart'", () => {
      const { container } = renderWithRouter(
        () => <App />,
        "/cart"
      )
      expect(container.innerHTML).toMatch("Cart")
    })

    it("renders checkout page on '/checkout'", () => {
      const { container } = renderWithRouter(
        () => <App />,
        "/checkout"
      )
      expect(container.innerHTML).toMatch("Checkout")
    })

    it("renders order summary page on '/order'", () => {
      const { container } = renderWithRouter(
        () => <App />,
        "/order"
      )
      expect(container.innerHTML).toMatch("Order summary")
    })

    it("renders 'page not found' message on nonexistent route", () => {
      const { container } = renderWithRouter(
        () => <App />,
        "/this-route-does-not-exist"
      )
      expect(container.innerHTML).toMatch("Page not found")
    })
  })
})
