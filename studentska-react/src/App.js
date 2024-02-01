import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Pocetna from './komponente/pocetna/Pocetna';
import ContactForm from './komponente/kontaktirajSluzbu/ContactForm';
import { useState } from 'react';
import Footer from './komponente/Footer/Footer';
import Navbar from './komponente/navbar/Navbar';
import Molbe from './komponente/molbe/Molbe';
import Predmeti from './komponente/predmeti/Predmeti';

function App() {

  const [molbe, setMolbe] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route 
        path='/'
        element={<Pocetna/>}>
        </Route>
        <Route
         path="/kontakt" 
         element={<ContactForm molbe={molbe} setMolbe={setMolbe}/>} >
        </Route>
        <Route
         path="/molbe" 
         element={<Molbe molbe={molbe} setMolbe={setMolbe}/>} >
        </Route>
        <Route
         path="/predmeti" 
         element={<Predmeti/>} >
        </Route>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
