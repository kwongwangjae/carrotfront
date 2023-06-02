import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function PlusModal() {
  return (
    <>
      <Link to="/Sell" style={{ textDecoration: "none" }}>
        <Button>내 물건 팔기</Button>;
      </Link>
    </>
  );
}

export default PlusModal;

const Button = styled.button`
  width: 8rem;
  height: 3rem;
  border: 1px solid black;
  font-size: 1.2rem;
  border-radius: 5px;
  margin: 0rem 0rem 4rem 0rem;
  background-color: #ffffff;
  position: fixed;
`;
