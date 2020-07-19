import React from "react"
import { CheckoutList } from "./CheckoutList"
import { useCart } from "../CartContext/CartContext"
import { CheckoutForm } from "./CheckoutForm"

export const Checkout = () => {
  const { products, totalPrice } = useCart()

  return (
    <section className="nes-container with-title">
      <h1 className="title">Checkout</h1>
      <div className="nes-container is-rounded checkout-list-wrapper">
        <p>You are going to buy:</p>
        <CheckoutList products={products} />
        <p>Total: {totalPrice()} Zm</p>
      </div>
      <p>Enter your payment credentials:</p>
      <CheckoutForm />
    </section>
  )
}
