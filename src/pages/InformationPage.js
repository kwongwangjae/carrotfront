import { createGlobalStyle } from "styled-components";
import Header from "../components/header/Header";
import Information from "../components/information/Information";
import UserKey from "../components/user/UserKey";
import UserList from "../components/user/UserList";
import Line from "../components/line/Line";
import ProductTextKey from "../components/product/ProductTextKey";
import ProductTextList from "../components/product/ProductTextList";
function InformationPage() {
  return (
    <>
      <MainPageGlobalStyle />
      <Header />
      <Information />
      <UserKey UserList={UserList} />
      <Line />
      <ProductTextKey ProductTextList={ProductTextList} />
    </>
  );
}

export default InformationPage;

const MainPageGlobalStyle = createGlobalStyle`
  body {
    background-color: #2A2A35;
  }
`;
