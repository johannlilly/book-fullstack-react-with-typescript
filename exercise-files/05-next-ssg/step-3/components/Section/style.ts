import styled from "styled-components"

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &:after {
    content: "";
    flex: auto;
  }

  &:after,
  & > * {
    width: calc(33% - 10px);
    margin-bottom: 20px;
  }

  @media (max-width: 800px) {
    &:after,
    & > * {
      width: 100%;
    }
  }
`

export const Title = styled.h2`
  font-size: 2.8rem;
  line-height: 1.1;
  margin: 10px 0 15px;

  @media (max-width: 800px) {
    font-size: 2rem;
  }
`

export const MoreLink = styled.a`
  margin: -20px 0 30px;
  display: inline-block;
  vertical-align: top;
`
