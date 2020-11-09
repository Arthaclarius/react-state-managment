import styled from "styled-components";

export const InputText = styled.input.attrs((props) => ({
  ...props,
  type: "text",
}))`
  display: flex;
  flex: 1;
  align-content: center;
  border: none;
  color: white;
  background-color: #40444b;
  outline: none;
  padding: 0 8px;
  border-radius: 5px;

  ::placeholder {
    color: #72767d;
  }
`;
