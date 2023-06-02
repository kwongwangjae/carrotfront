import React from "react";
import styled from "styled-components";
import Product from "./Product";

const ProductKey = ({ ProductList }) => {
  return (
    <div>
      <Div>
        {ProductList &&
          ProductList.map((v, index) => (
            <Product
              key={index}
              title={v.title}
              location={v.location}
              price={v.price}
            />
          ))}
      </Div>
    </div>
  );
};

export default ProductKey;

const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;
