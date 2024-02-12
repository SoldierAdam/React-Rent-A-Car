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
<<<<<<< HEAD
import PayPal from './pages/Pay/PayPal';
import Payment from './pages/Pay/Payment';
=======
import Paypal from './pages/PayPal/Payment.1';
import CreditCard from './components/CreditCard/CreditCard';
import Admin from './components/Admin/Admin';
>>>>>>> 3a418b3b61e2cb683445a09408c89ffc901abb2f





function App() {

	return (
		<>
<<<<<<< HEAD
			<BrowserRouter>
				<OverlayLoader />
				<Navbar />
				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="/" element={<Index />} />
					<Route path="/contact" element={<Contact />} />
					{/* <Route path="/admin" element={<Admin/>} /> */}
					<Route path='cars' element={<Cars />} />
					<Route path="/login" element={<Login initialUserName="" initialPassword="" />} />
					<Route path='/signUp' element={<SignUp initialEmail="" initialPassword="" initialUserName="" />} />
					<Route path="/paypal" element={<PayPal />} />
					<Route path="/payment" element={<Payment/>} />
				</Routes>
				<Footer />
			</BrowserRouter>
=======
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

>>>>>>> 3a418b3b61e2cb683445a09408c89ffc901abb2f
		</>
	);
}

export default App;