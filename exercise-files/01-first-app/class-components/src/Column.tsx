import React from "react"
import { ColumnContainer, ColumnTitle } from "./styles"

interface ColumnProps {
  text: string
}

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>Column Title</ColumnTitle>
    </ColumnContainer>
  )
}