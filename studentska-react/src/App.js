import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Pocetna from './komponente/pocetna/Pocetna';
import ContactForm from './komponente/kontaktirajSluzbu/ContactForm';
import { useState } from 'react';
import Footer from './komponente/Footer/Footer';
import Navbar from './komponente/navbar/Navbar';

function App() {

  const [messages, setMessages] = useState([]);

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
         element={<ContactForm messages={messages} setMessages={setMessages}/>} >
        </Route>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
