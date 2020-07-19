import styled from "styled-components";

export const Title = styled.h2`
  font-size: 2.8rem;
  line-height: 1.2;
  margin: 10px 0 20px;

  @media (max-width: 800px) {
    font-size: 1.8rem;
    margin: 15px 0;
  }
`;

export const Figure = styled.figure`
  padding: 35% 0 0;
  margin: 0 0 30px;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 6px;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 800px) {
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  font-size: 1.25rem;
  line-height: 1.4;
  max-width: 800px;
`;

export const Meta = styled.footer`
  color: ${(p) => p.theme.colors.gray};

  & > * {
    margin-right: 0.3em;
  }
`;
