import './App.css';
import About from './pages/About/About';
import Index from './pages/HomePage/HomePage';
import Contact from './pages/Contact/Contact';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Cars from './pages/Cars/Cars';

import SignUp from './pages/Login/SignUp/SignUp';
import Login from './pages/Login/SignIn/Login';
//import Admin from './components/Admin/Admin';
import OverlayLoader from './components/OverlayLoader/OverlayLoader';
import Paypal from './pages/PayPal/Payment.1';
import CreditCard from './components/CreditCard/CreditCard';


function App() {

	return (
		<>
			<div className='app'>
				<BrowserRouter>
					<OverlayLoader />
					<Navbar />
					<Routes>
						<Route path="/about" element={<About />} />
						<Route path="/" element={<Index />} />
						<Route path="/contact" element={<Contact />} />
						{/* <Route path="/admin" element={<Admin/>} /> */}
						<Route path='cars' element={<Cars/>} />
						<Route path="/login" element={<Login initialUserName="" initialPassword="" />} />
						<Route path='/signUp' element={<SignUp initialEmail="" initialPassword="" initialUserName="" />} />
					</Routes>
				</BrowserRouter>
			</div>
			<Footer />

		</>
	);
}

export default App;