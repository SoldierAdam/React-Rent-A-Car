import './App.css';
import About from './pages/About/About';
import Index from './pages/HomePage/HomePage';
import Contact from './pages/Contact/Contact';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Cars from './pages/Cars/Cars';
import { useState } from 'react';

import SignUp from './pages/Login/SignUp/SignUp';
import Login from './pages/Login/SignIn/Login';




function App() {
	const handleLoginSuccess = () => {
		// window.location.href = '/';
	};

	const handleSignUpSuccess = () => {
		window.location.href = '/login';
	}


  return (
	<>
		<Navbar/>
		<Routes>
			<Route path="/about" element={<About/>} />
			<Route path="/" element={<Index/>} />
			<Route path="/contact" element={<Contact/>} />
			{ <Route path='cars' element={<Cars/>} /> }
			<Route path="/login" element={<Login initialUserName="" initialPassword="" onSubmitSuccess={handleLoginSuccess} />} />
			<Route path='/signUp' element= {<SignUp initialEmail="" initialPassword="" initialUserName="" onSubmitSuccess={handleSignUpSuccess} /> }/>
		</Routes>
		<Footer/>
	  </>
  );
}

export default App;