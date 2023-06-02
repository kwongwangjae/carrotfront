import React from "react";
import Check from "./Check";
import styled from "styled-components";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import computer from "../../images/9a5f217a1f3aed4cdd11c6d07d2e1295e22aa311b6b2c73d487e6db399579492.jpeg";

function Information() {
  return (
    <div>
      <Check />
      <IMGBlock>
        <IconSize>
          <BiChevronLeft size={58} color="#ffffff" />
        </IconSize>
        <IMG src={computer} />
        <IconSize>
          <BiChevronRight size={58} color="#ffffff" />
        </IconSize>
      </IMGBlock>
    </div>
  );
}

export default Information;

const IMGBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media all and (max-width: 767px) {
    width: 8rem;
    height: 10rem;
  }
`;
const IMG = styled.img`
  width: 30rem;
  height: 22rem;
  border-radius: 1rem;
  margin-top: 5rem;
  @media all and (max-width: 767px) {
    width: 6rem;
  }
`;

const IconSize = styled.div`
  margin-top: 5rem;
`;
