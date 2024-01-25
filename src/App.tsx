import './App.css';
import About from './pages/About/About';
import Index from './pages/HomePage/HomePage';
import Contact from './pages/Contact/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Cars from './pages/Cars/Cars';
import Login from "./pages/Login/Login"
import SignUp from './pages/Login/SignUp';




function App() {
  return (
	<>
		<Navbar/>
		<Routes>
			<Route path="/about" element={<About/>} />
			<Route path="/" element={<Index/>} />
			<Route path="/contact" element={<Contact/>} />
			{ <Route path='cars' element={<Cars/>} /> }
			<Route path='/login' element = {<Login/>}/>
			<Route path='/singUp' element= {<SignUp/>}/>
		
		</Routes>
		<Footer/>
	  </>
  );
}

export default App;