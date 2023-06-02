import React from "react";
import styled from "styled-components";
function ProductText({ title, location, text }) {
  return (
    <>
      <Block>
        <TitleText>{title}</TitleText>
        <LocationText>{location}</LocationText>
        <EvaluateText>{text}</EvaluateText>
      </Block>
    </>
  );
}

export default ProductText;

const Block = styled.div`
  height: 3rem;
  margin-top: 0.2rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin: 0;
    margin: 0.5rem 4rem 0.5rem 4rem;
  }
  @media all and (max-width: 767px) {
    width: 8rem;
    height: 17rem;
    margin: 0;
  }
`;

const TitleText = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 0.5rem;
  margin-left: 33rem;
  color: #ffffff;
  @media all and (max-width: 767px) {
    font-size: 1rem;
    margin-top: 0;
    margin-top: 0.5rem;
  }
`;

const LocationText = styled.div`
  font-size: 0.7rem;
  font-weight: 1000;
  margin-top: 0.2rem;
  margin-left: 33rem;
  color: #c4c4c4;
  @media all and (max-width: 767px) {
    font-size: 0.6rem;
    margin-top: 0;
    margin-top: 0.3rem;
  }
`;

const EvaluateText = styled.div`
  display: flex;
  margin-left: 33rem;
  font-weight: 7000;
  font-size: 1rem;
  margin-top: 1rem;
  width: 31%;
  color: #ffffff;
  @media all and (max-width: 767px) {
    font-size: 0.6rem;
    margin-top: 0;
    margin-top: 0.3rem;
  }
`;
