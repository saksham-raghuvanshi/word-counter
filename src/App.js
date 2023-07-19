import { Route, Routes } from "react-router-dom";
import "./Style/Header.css";
import "./Style/Counter.css";
import "./Style/pnf.css";
import "./Style/Top.css";
import "./Style/Footer.css";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
