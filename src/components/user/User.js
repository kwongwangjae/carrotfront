import React from "react";
import styled from "styled-components";
import computer from "../../images/9a5f217a1f3aed4cdd11c6d07d2e1295e22aa311b6b2c73d487e6db399579492.jpeg";

function User({ user, location }) {
  return (
    <>
      <Block>
        <IMGBlock>
          <IMG src={computer} />
        </IMGBlock>
        <InformationBlck>
          <UserText>{user}</UserText>
          <LocationText>{location}</LocationText>
        </InformationBlck>
      </Block>
    </>
  );
}

const Block = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  margin-top: 1rem;
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
  align-items: center;
  margin-left: 32.5rem;
`;

const IMG = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

const InformationBlck = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1rem;
  margin-top: 0.25rem;
`;

const UserText = styled.div`
  color: #ffffff;
  font-weight: 700;
`;

const LocationText = styled.div`
  color: #ffffff;
  font-weight: 500;
`;

export default User;
