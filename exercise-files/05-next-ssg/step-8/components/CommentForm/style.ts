import styled from "styled-components"

export const Form = styled.form`
  input,
  textarea {
    display: block;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: none;
    resize: none;
    font-size: 1em;
    padding: 5px;
    border-radius: 2px;
    margin: 10px 0;
  }

  button {
    border: 0;
    font-size: 1rem;
    padding: 8px 20px;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.035),
      0 4px 25px rgba(0, 0, 0, 0.07);
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.035),
        0 6px 35px rgba(0, 0, 0, 0.2);
    }
  }
`
