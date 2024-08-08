import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FormDataDisplay from "./components/FormDisplay";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form-data" element={<FormDataDisplay />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
