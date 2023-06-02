import React, { useState } from "react";
import styled from "styled-components";
import { BiChevronLeft } from "react-icons/bi";
import Line from "../line/Line";
import { useNavigate } from "react-router-dom";

function Sell() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Upload file:", selectedFile);
    } else {
      console.log("No file selected.");
    }
  };

  return (
    <>
      <Block>
        <Location>
          <BiChevronLeft
            size={50}
            color="#ffffff"
            onClick={() => {
              navigate(-1);
            }}
          />
          <Name>중고거래 글쓰기</Name>
        </Location>
        <Done>완료</Done>
      </Block>
      <SellBlock>
        <FileText>
          <File type="file" onChange={handleFileChange} placeholder="FILE" />
          <FileButton onClick={handleUpload}>추가</FileButton>
        </FileText>
        {selectedFile && (
          <ImgBlock>
            <Img src={URL.createObjectURL(selectedFile)} alt="Selected File" />
          </ImgBlock>
        )}

        <Line />
        <TitleText type="text" placeholder="제목" />
        <Line />
        <PriceText type="text" placeholder="₩가격(선택 사항)" />
        <Line />
        <CommonText type="text" placeholder="게시글" />
        <Line />
      </SellBlock>
    </>
  );
}

export default Sell;

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

const SellBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const FileText = styled.div`
  display: flex;
  justify-content: center;
`;

const File = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  font-style: normal;
  font-weight: 700;
  font-size: 1.35rem;
  width: 20rem;
  height: 2rem;
  background-color: #ffffff;
  margin-top: 8rem;
  margin-bottom: 1rem;
  border: none;
`;

const FileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 1.2rem;
  width: 8rem;
  height: 2rem;
  margin-top: 8rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
`;

const TitleText = styled.input`
  display: flex;
  align-items: center;
  margin-left: 33rem;
  width: 30%;
  height: 2rem;
  font-size: 1rem;
  border: none;
  background-color: #2a2a35;
  margin-top: 1.5rem;
  color: #ffffff;
`;

const PriceText = styled.input`
  display: flex;
  align-items: center;
  margin-left: 33rem;
  width: 30%;
  height: 2rem;
  font-size: 1rem;
  border: none;
  background-color: #2a2a35;
  margin-top: 1.5rem;
  color: #ffffff;
`;

const CommonText = styled.textarea`
  display: flex;
  margin-left: 33rem;
  textalign: top;
  width: 30%;
  height: 10rem;
  font-size: 1rem;
  border: none;
  background-color: #2a2a35;
  margin-top: 1.5rem;
  color: #ffffff;
`;

const Img = styled.img`
  display: flex;
  width: 20rem;
  height: 15rem;
`;
const ImgBlock = styled.div`
  display: flex;
  margin-left: 33rem;
`;
