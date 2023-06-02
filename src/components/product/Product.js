import React from "react";
import styled from "styled-components";
import computer from "../../images/9a5f217a1f3aed4cdd11c6d07d2e1295e22aa311b6b2c73d487e6db399579492.jpeg";
import { Link } from "react-router-dom";

function Product({ title, location, price }) {
  return (
    <>
      <div>
        <StyledLink to={`/information`}>
          <Block>
            <IMGBlock>
              <IMG src={computer} />
            </IMGBlock>
            <TitleText>{title}</TitleText>
            <LocationText>{location}</LocationText>
            <PriceText>{price}</PriceText>
          </Block>
        </StyledLink>
      </div>
    </>
  );
}

export default Product;

const TitleText = styled.div`
  font-size: 1.3 rem;
  font-weight: 500;
  margin-top: 0.5rem;
  color: #ffffff;
  @media all and (max-width: 767px) {
    font-size: 1rem;
    margin-top: 0;
    margin-top: 0.5rem;
  }
`;

const PriceText = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-top: 0.5rem;
  color: #ffffff;
  @media all and (max-width: 767px) {
    font-size: 0.6rem;
    margin-top: 0;
    margin-top: 0.3rem;
  }
`;

const LocationText = styled.div`
  font-size: 0.7rem;
  font-weight: 1000;
  margin-top: 0.2rem;
  color: #c4c4c4;
  @media all and (max-width: 767px) {
    font-size: 0.6rem;
    margin-top: 0;
    margin-top: 0.3rem;
  }
`;

const Block = styled.div`
  width: 12.5rem;
  height: 18rem;
  margin: 5rem 4rem 1rem 4rem;
  border-radius: 20px;
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
const IMGBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 12.5rem;
  height: 12rem;
  border-radius: 1rem;
  @media all and (max-width: 767px) {
    width: 8rem;
    height: 10rem;
  }
`;
const IMG = styled.img`
  width: 12.5rem;
  height: 12rem;
  border-radius: 1rem;
  @media all and (max-width: 767px) {
    width: 6rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
