import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import InformationPage from "./pages/InformationPage";
import SellPage from "./pages/SellPage";
import EvaluatePage from "./pages/EvaluatePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/information" element={<InformationPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/evaluation" element={<EvaluatePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
