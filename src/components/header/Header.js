import React from "react";
import styled from "styled-components";
import { BsChevronDown } from "react-icons/bs";

function Header() {
  return (
    <>
      <Block>
        <Location>
          <Name>안양8동</Name>
          <IconSize>
            <BsChevronDown />
          </IconSize>
        </Location>
        <Search>
          <SearchBar placeholder="물품을 검색해보세요" />
          <SearchButton>검색</SearchButton>
        </Search>
      </Block>
    </>
  );
}

export default Header;

const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: bold;
  color: #ffffff;
`;
const IconSize = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  color: #ffffff;
  margin: 0.2rem 0rem 0.2rem 0rem;
`;

const Block = styled.div`
  display: flex;
  justify-content: space-between;
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

const Search = styled.div`
  display: flex;
  align-items: center;
`;

const SearchBar = styled.input`
  width: 13rem;
  height: 1.8rem;
`;

const SearchButton = styled.button`
  width: 4rem;
  height: 2rem;
  background: #23232e;
  border: 1px solid #ffffff;
  border-radius: 10px;
  margin: 0rem 1rem 0rem 1rem;
  color: #ffffff;
  cursor: pointer;
`;
