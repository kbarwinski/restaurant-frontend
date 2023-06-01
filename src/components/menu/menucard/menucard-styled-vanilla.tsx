import styled from "styled-components";

export const CartOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const PriceText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;
