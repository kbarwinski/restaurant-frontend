import styled from 'styled-components';

export const FormContainer = styled.div`
  min-width: 70%;
  place-self: center;
  display: grid;
  grid-template-areas:
    'a b b'
    'a b b'
    'a b b'
    'a b b'
    'a c c';
  grid-gap: 20px;
  padding: 16px 16px 16px 16px;
  margin: 40px 0 40px 0;
  box-shadow: 16px 16px 20px #111;
`;

export const SpaceA = styled.div`
  grid-area: a;
  display: grid;
  grid-gap: 20px;
`;
export const SpaceB = styled.div`
  grid-area: b;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`;
export const SpaceC = styled.div`
  grid-area: c;
`;
