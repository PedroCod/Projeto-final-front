import "./App.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import { Routes, Route } from "react-router-dom";
import View from "./pages/View";
import Edit from "./pages/Edit";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
