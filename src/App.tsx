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
import Admin from './components/Admin/Admin';
import OverlayLoader from './components/OverlayLoader/OverlayLoader';
import CarDetails from './pages/RentNow/RentNow';
import ForgotPassword from './pages/Login/Login/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/Login/Login/ForgotPassword/ResetPassword';
import Customers from './components/Customer/Customers';
import Profile from './pages/Profile/Profile';

import Profile from './pages/Profile/Profile';

function App() {

	return (
		<>

			<div className='app'>
				<BrowserRouter>
					{/* <OverlayLoader /> */}
					<Navbar />
					<Routes>
						<Route path="/customer" element={<Customers />} />
						<Route path="/about" element={<About />} />
						<Route path="/" element={<Index />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/rentNow" element={<CarDetails />} />
						<Route path="/admin" element={<Admin/>} />
						<Route path='cars' element={<Cars/>} />
						<Route path='profile' element={<Profile/>} />
						<Route path="/login" element={<Login initialUserName="" initialPassword="" />} />
						<Route path='/signUp' element={<SignUp initialEmail="" initialPassword="" initialUserName="" />} />
						<Route path="/forgot-password" element={<ForgotPassword/>}/>
						<Route path="/reset-password/:token" element={<ResetPassword/>} />
						<Route path="/profile" element={<Profile/>} />
						
						

					</Routes>
				</BrowserRouter>
			</div>
			<Footer />

		</>
	);
}

export default App;