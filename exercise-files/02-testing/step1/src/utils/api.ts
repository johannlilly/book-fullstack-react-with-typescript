import { Product } from "../shared/types"

export const getProducts = () => {
  return fetch("http://localhost:4000/products")
    .then((res) => {
      return res.json()
    })
    .catch(console.log)
}

export const getOrder = (id: string) => {
  return fetch(`http://localhost:4000/order/${id}`)
    .then((res) => {
      return res.json()
    })
    .catch(console.log)
}

export interface CheckoutPayload {
  products: Product[]
}

export const postCheckout = (data: CheckoutPayload) => {
  return fetch(`http://localhost:4000/checkout`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json()
    })
    .catch(console.log)
}
