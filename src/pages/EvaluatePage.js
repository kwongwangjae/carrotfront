import { createGlobalStyle } from "styled-components";
import Evaluate from "../components/evaluate/Evaluate";

function EvaluatePage() {
  return (
    <>
      <MainPageGlobalStyle />
      <Evaluate />
    </>
  );
}

export default EvaluatePage;

const MainPageGlobalStyle = createGlobalStyle`
    body {
      background-color: #2A2A35;
    }
  `;
