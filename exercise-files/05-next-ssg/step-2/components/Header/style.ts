import styled from "styled-components"

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 50px;
  padding: 7px 0;

  background-color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`

export const Logo = styled.h1`
  font-size: 1.6rem;
  font-family: ${(p) => p.theme.fonts.accent};

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: ${(p) => p.theme.colors.pink};
  }
`
