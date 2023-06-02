import React, { useState } from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Check() {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  return (
    <div>
      <Footer>
        <IconSize>
          <AiFillHeart
            color={isFilled ? "white" : "red"}
            onClick={handleClick}
          />
        </IconSize>
        <Button>
          <EvaluationButton to={`/evaluation`}>평가하기</EvaluationButton>
          <ChatButton>채팅하기</ChatButton>
        </Button>
      </Footer>
    </div>
  );
}

export default Check;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 48rem;
  height: 3rem;
  width: 100%;
  background: #23232e;
  position: fixed;
`;

const EvaluationButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2rem;
  width: 4rem;
  background: #ecb13e;
  border-radius: 0.5rem;
  text-decoration: none;
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
`;

const ChatButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2rem;
  width: 4rem;
  margin-left: 1rem;
  background: #ecb13e;
  border-radius: 0.5rem;
  text-decoration: none;
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
`;

const Button = styled.div`
  display: flex;
`;

const IconSize = styled.div`
  font-size: 2.5rem;
  color: #ffffff;
`;
