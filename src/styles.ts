import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const Wrapper = styled.div`
  margin: 40px;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;

export const CartWrapper = styled.aside`
  font-family: monospace, sans-serif;
  width: 500px;
  padding: 20px;
`;

export const ItemDivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: monospace, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;

export const CartItemDivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: monospace, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .infor,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
`;
