import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Pocetna from "./komponente/pocetna/Pocetna";
import ContactForm from "./komponente/kontaktirajSluzbu/ContactForm";
import { useState } from "react";
import Footer from "./komponente/Footer/Footer";
import Navbar from "./komponente/navbar/Navbar";
import Molbe from "./komponente/molbe/Molbe";
import Predmeti from "./komponente/predmeti/Predmeti";
import Register from "./pages/register"; // 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [molbe, setMolbe] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/kontakt" element={<ContactForm molbe={molbe} setMolbe={setMolbe} />} />
          <Route path="/molbe" element={<Molbe molbe={molbe} setMolbe={setMolbe} />} />
          <Route path="/predmeti" element={<Predmeti />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
