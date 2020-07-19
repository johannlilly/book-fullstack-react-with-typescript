import styled from "styled-components"

export const Container = styled.article`
  padding: 10px 0;
`

export const Author = styled.h4`
  display: block;
  font-size: 1rem;
`
export const Body = styled.p`
  margin: 0;
`

export const Meta = styled.footer`
  color: ${(p) => p.theme.colors.gray};
  font-size: 0.8em;
`
