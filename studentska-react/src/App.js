import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './komponente/footer/Footer';
import Navbar from './komponente/nav/Navbar';
import Pocetna from './komponente/pocetna/Pocetna';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route 
        path='/'
        element={<Pocetna/>}>
        </Route>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
