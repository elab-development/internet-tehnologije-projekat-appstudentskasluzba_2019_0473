import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './komponente/footer/Footer';
import Navbar from './komponente/nav/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
