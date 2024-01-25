import './App.css';
import About from './pages/About/About';
import Index from './pages/HomePage/HomePage';
import Contact from './pages/Contact/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Cars from './pages/Cars/Cars';
import SignIn from './pages/SignIn/SignIn';


function App() {
  return (
	<>
		<Navbar/>
		<div style={{minHeight:'100vh'}}>
			<Routes>
				<Route path="/about" element={<About/>} />
				<Route path="/" element={<Index/>} />
				<Route path="/contact" element={<Contact/>} />
				{ <Route path='cars' element={<Cars/>} /> }
				<Route path='/signIn' element={<SignIn/>}/>
			</Routes>
		</div>
		<Footer/>
	  </>
  );
}

export default App;