import React from "react";
import styled from "styled-components";

function Line() {
  return (
    <div>
      <LineStyled>
        <Line1 />
      </LineStyled>
    </div>
  );
}

export default Line;

const LineStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const Line1 = styled.div`
  mix-blend-mode: soft-light;
  border: 0.5px solid #bcbbbb;
  margin-top: 1rem;
  width: 30%;
`;
