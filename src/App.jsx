import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage';
import Quizoption from './Quizoption';
import 'bootstrap/dist/css/bootstrap.min.css';
import Oops from './Oops';
import Js from './Js';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/quizoption" element={<Quizoption />} />
      <Route path="/oops" element={<Oops />} />
      <Route path="/js" element={<Js />} />

    </Routes>
  );
}

export default App;
