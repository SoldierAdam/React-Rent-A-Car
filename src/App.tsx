import './App.css';
import About from './pages/About';
import Index from './pages/HomePage/HomePage';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CarCard from './components/CarCard/CarCard';
import Cars from './pages/Cars';

function App() {
  return (
	<>
		<Navbar/>
		<Routes>
			<Route path="/about" element={<About/>} />
			<Route path="/" element={<Index/>} />
			<Route path="/contact" element={<Contact/>} />
			{ <Route path='cars' element={<Cars/>} /> }
		</Routes>
		{/* <div className="App">
     	 <CarCard/>
   		 </div> */}
		<Footer/>
	  </>
  );
}

export default App;