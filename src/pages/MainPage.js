import React, { useState } from "react";
import ProductKey from "../components/product/ProductKey";
import ProductList from "../components/product/ProductList";
import Header from "../components/header/Header";
import styled, { createGlobalStyle } from "styled-components";
import { AiFillPlusCircle } from "react-icons/ai";
import PlusModal from "../components/product/PlusModal";

function MainPage() {
  const [modal, setmodal] = useState(false);
  const togglemodal = () => {
    setmodal(!modal);
  };
  return (
    <>
      <MainPageGlobalStyle />
      <Header />;
      <ModalBlock>
        <AiFillPlusCircle onClick={togglemodal} color="#ffffff" size={54} />
        {modal === true ? <PlusModal /> : null}
      </ModalBlock>
      <ProductKey ProductList={ProductList} />
    </>
  );
}

export default MainPage;

const MainPageGlobalStyle = createGlobalStyle`
  body {
    background-color: #2A2A35;
  }
`;

const ModalBlock = styled.div`
  position: fixed;
  margin: 45rem 0% 0% 95%;
  display: flex;
  flex-direction: colum-reverse;
`;
