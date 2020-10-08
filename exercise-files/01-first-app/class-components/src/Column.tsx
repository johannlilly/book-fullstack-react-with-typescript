import React from "react"
import { ColumnContainer, ColumnTitle } from "./styles"

/**
 * Here is the React.PropsWithChildren type definition:

type React.PropsWithChildren<P> = P & {
  children?: React.ReactNode;
}

 * The letter P in angle brackets is a generic type.
 * It serves as a placeholder for an actual type that we can pass there. 
 * It doesn’t necessarily have to be P, but the convention is to use capital Latin letters.
 * 
 * When we used React.PropsWithChildren we’ve passed our ColumnProps interface to it.
 * Then it was combined with another type using an ampersand.
 * As a result, we’ve got a new type that combines the fields of both source types.
 * In TypeScript it’s called a type intersection.
 */

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