import React from "react"
import { CheckoutList } from "./CheckoutList"
import { Product } from "../shared/types"
import { render } from "@testing-library/react"

describe("CheckoutList", () => {
  it("renders list of products", () => {
    const products: Product[] = [
      {
        name: "Product foo",
        price: 10,
        image: "/image.png"
      },
      {
        name: "Product bar",
        price: 10,
        image: "/image.png"
      }
    ]

    const { container } = render(
      <CheckoutList products={products} />
    )
    expect(container.innerHTML).toMatch("Product foo")
    expect(container.innerHTML).toMatch("Product bar")
  })
})
