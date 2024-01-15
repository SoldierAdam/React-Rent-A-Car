import './App.css';
import About from './pages/About';
import Index from './pages/HomePage';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CarCard from './components/CarCard/CarCard';

function App() {
  return (
	<>
		<Navbar/>
		<div className="App">
     	 <CarCard/>
   		 </div>
		<Routes>
			<Route path="/about" element={<About/>} />
			<Route path="/" element={<Index/>} />
			<Route path="/contact" element={<Contact/>} />
		</Routes>
		<Footer/>
	  </>
  );
}

export default App;