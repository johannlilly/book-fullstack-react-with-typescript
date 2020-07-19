import React from "react"
import { ColumnContainer, ColumnTitle } from "./styles"

interface ColumnProps {
  text: string
}

export const Column = ({
  text,
  children
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  )
}
