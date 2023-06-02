import React from "react";
import styled from "styled-components";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Evaluate() {
  const navigate = useNavigate();
  return (
    <div>
      <Block>
        <Location>
          <BiChevronLeft
            size={50}
            color="#ffffff"
            onClick={() => {
              navigate(-1);
            }}
          />
          <Name>평가하기</Name>
        </Location>
        <Done>완료</Done>
      </Block>
    </div>
  );
}

export default Evaluate;

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  margin-bottom: 1rem;
  background: #23232e;
  position: fixed;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  display: flex;
  margin-left: 0.6rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  font-weight: medium;
  color: #ffffff;
`;

const Done = styled.button`
  margin-right: 1rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  font-weight: medium;
  background: #23232e;
  color: #ecb13e;
  border: none;
  cursor: pointer;
`;
