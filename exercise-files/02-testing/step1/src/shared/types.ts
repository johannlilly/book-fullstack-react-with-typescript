export interface Product {
  name: string
  price: number
  image: string
}

export interface Category {
  name: string
  items: Product[]
}
