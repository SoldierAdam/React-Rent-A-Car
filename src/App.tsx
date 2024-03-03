import './App.css';
import About from './pages/About/About';
import Index from './pages/HomePage/HomePage';
import Contact from './pages/Contact/Contact';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Cars from './pages/Cars/Cars';
import SignUp from './pages/Login/SignUp/SignUp';
import Login from './pages/Login/Login/Login';
import Admin from './components/Admin2/Admin';
import OverlayLoader from './components/OverlayLoader/OverlayLoader';
import CarDetails from './pages/RentNow/RentNow';
import ForgotPassword from './pages/Login/Login/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/Login/Login/ForgotPassword/ResetPassword';
import Customers from './components/Customer/Customers';
import Profile from './pages/ProfilePage/Profile';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
	return (
		<BrowserRouter>
			<AppContent />
		</BrowserRouter>
	);
}

function AppContent() {
	const location = useLocation();
	// const [isAdminPage, setIsAdminPage] = useState(false);

	// useEffect(() => {
	// 	setIsAdminPage(location.pathname.startsWith("/admin"));
	// }, [location]);

	return (
		<>
		<div className='app'>
			 <OverlayLoader /> 
			{/* {isAdminPage ? null : <Navbar />} */}
			<Navbar />
			<Routes>
				<Route path="/customer" element={<Customers />} />
				<Route path="/about" element={<About />} />
				<Route path="/" element={<Index />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/rentNow" element={<CarDetails />} />
				<Route path='cars' element={<Cars />} />
				<Route path='profile' element={<Profile />} />
				<Route path="/login" element={<Login initialUserName="" initialPassword="" />} />
				<Route path='/signUp' element={<SignUp initialEmail="" initialPassword="" initialUserName="" />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="/reset-password/:token" element={<ResetPassword />} />

				<Route path="/admin/cars" element={<Admin />} />
				<Route path="/admin/brands" element={<Admin />} />
				<Route path="/admin/models" element={<Admin />} />
				<Route path="/admin/colors" element={<Admin />} />
				<Route path="/admin/customers" element={<Admin />} />
				<Route path="/admin/rentals" element={<Admin />} />

			</Routes>
		</div>
			<Footer />
			</>
	);
}

export default App;