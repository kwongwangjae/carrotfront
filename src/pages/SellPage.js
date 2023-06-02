import { createGlobalStyle } from "styled-components";
import Sell from "../components/sell/Sell";

function SellPage() {
  return (
    <>
      <MainPageGlobalStyle />
      <Sell />
    </>
  );
}

export default SellPage;

const MainPageGlobalStyle = createGlobalStyle`
    body {
      background-color: #2A2A35;
    }
  `;
