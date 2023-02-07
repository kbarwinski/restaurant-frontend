import styled from "styled-components";

export const FormContainer = styled.div`
  min-width: 70%;
  place-self: center;
  display: grid;
  grid-template-areas:
    "a b b"
    "a b b"
    "a b b"
    "a b b"
    "c c c";
  grid-gap:1vh;
  padding: 16px 16px 16px 16px;
  margin: 40px 0 40px 0;
  background-color: #ccc;
`;

export const SpaceA = styled.div`
  grid-area: a;
  display: flex;
  flex-direction: column;
`;
export const SpaceB = styled.div`
  grid-area: b;
  display: flex;
  flex-direction: column;
`;
export const SpaceC = styled.div`
  grid-area: c;
`;
