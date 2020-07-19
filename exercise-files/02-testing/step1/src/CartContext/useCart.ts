import { useEffect, useState } from "react"
import { Product } from "../shared/types"

const saveProducts = (products: Product[]) => {
  localStorage.setItem("products", JSON.stringify(products))
}

export const useCart = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    try {
      const storedProducts = localStorage.getItem(
        "products"
      )
      const parsedProducts = storedProducts
        ? JSON.parse(storedProducts)
        : []
      setProducts(parsedProducts)
    } catch (error) {}
  }, [])

  const totalPrice = () => {
    return products.reduce((total: number, product) => {
      return total + Number(product.price)
    }, 0)
  }

  const addToCart = (newProduct: Product) => {
    if (
      products.find(
        (product) => newProduct.name === product.name
      )
    ) {
      return
    }
    const newProducts = [...products, newProduct]
    setProducts(newProducts)
    saveProducts(newProducts)
  }

  const removeFromCart = (product: Product) => {
    const newProducts = products.filter((p) => {
      return p.name !== product.name
    })
    setProducts(newProducts)
    saveProducts(newProducts)
  }

  const clearCart = () => {
    setProducts([])
    saveProducts([])
  }

  return {
    products,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart
  }
}
