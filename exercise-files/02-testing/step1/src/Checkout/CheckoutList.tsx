import React from "react"
import { Product } from "../shared/types"

export interface CheckoutListProps {
  products: Product[]
}

export const CheckoutList = ({ products }: CheckoutListProps) => {
  return (
    <ul className="nes-list is-circle">
      {products.map((product) => {
        return <li key={product.name}>{product.name}</li>
      })}
    </ul>
  )
}
