//import { Search, ListFilter, SlidersHorizontal } from 'lucide-react';
//import { FaPhone, FaApple, FaGoogle, FaFacebookF } from 'react-icons/fa';
//import { IoIosArrowForward } from "react-icons/io";
//import SearchInput from './SearchInput';
//import Button from './components/Button';
//import "./App.css";
//import React from 'react';
//import Contact from "./Contact";
//import Cardphone from './Cardphone/Cardphone';
//import Electronics from './Electronics/Electronics';
//import Deal_of_day from './Deal_of_day/Deal_of_day';
//import Color from './Color1/Color';
//import Rating from './Rating/Rating';
//import LikeButton from './LikeButton/LikeButton';
//import SlidewithThumb from './SlidewithThumb/SlidewithThumb';
//import ButtonTabs from './ButtonTabs/ButtonTabs';
//import ButtonAccordions from './ButtonAccordions/ButtonAccordions';
//import Ex1_ButtonClick from "./Lesson5/afternoon/Ex1_ButtonClick";
//import Ex2_InputFieldTracker from "./Lesson5/afternoon/Ex2_InputFieldTracker";
//import Ex3_ToggleSwitch from "./Lesson5/afternoon/Ex3_ToggleSwitch";
//import Ex4_HoverHighlight from "./Lesson5/afternoon/Ex4_HoverHighlight";
//import Ex5_FormSubmissionAlert from "./Lesson5/afternoon/Ex5_FormSubmissionAlert";
//import Ex6_KeyPressDisplay from "./Lesson5/afternoon/Ex6_KeyPressDisplay";
//import Ex7_DoubleClickMessage from "./Lesson5/afternoon/Ex7_DoubleClickMessage";
//import Ex8_DropdownSelection from "./Lesson5/afternoon/Ex8_DropdownSelection";
//import Ex9_CheckboxToggle from "./Lesson5/afternoon/Ex9_CheckboxToggle";
//import Ex10_SearchFilter from "./Lesson5/afternoon/Ex10_SearchFilter";
//import Calculator from "./Lesson5/homework/Calculator/Calculator";
//import RegistrationForm from "./Lesson5/homework/RegistrationForm/RegistrationForm";


//function App() {
//  return (
//    <div>
//      {/*<div className="app-container">
//          <Button label="Get started" rightIcon={<IoIosArrowForward size={16}/>} type='primary'/>
//          <Button label="Continue with Apple" leftIcon={<FaApple size={16} />} type="primary" />
//          <Button label="Continue with Google" leftIcon={<FaGoogle size={16} />} type="outline" />
//          <Button label="Continue with Facebook" leftIcon={<FaFacebookF size={16} />} type="outline" />
//        </div>

//      <div className='panel'>
//        <SearchInput leftIcon={<Search size={20} />} placeholder="" />
//        <SearchInput leftIcon={<Search size={20} />} placeholder="Search" />
//        <SearchInput leftIcon={<Search size={20} />} placeholder="Textfield" bold />
//        <SearchInput leftIcon={<Search size={20} />} placeholder="Search in the web" rightIcon={<ListFilter size={20} color='black'/>} />
//        <SearchInput leftIcon={<Search size={20} />} placeholder="Search crypto" rightIcon={<SlidersHorizontal size={20} color='black'/>} />
//        <SearchInput placeholder="Phone number" rightIcon={<FaPhone size={18} color='black'/>} placeholderColor="#ccc" rightIconBg="#d2fbe3" />
//        <SearchInput leftIcon={<Search size={20} />} placeholder="Search in the web" rightIcon={<ListFilter size={20} color='black'/>} rightIconBg="#fce96a" />
//      </div>

//      <div className="contactPanel">
//        <Contact />
//      </div>*/}
//      <div>
//        {/*<Cardphone />
//        <Electronics />
//        <Deal_of_day />
//        <Color />
//        <Rating />
//        <LikeButton />
//        <SlidewithThumb />
//        <ButtonTabs />
//        <ButtonAccordions />*/}
//        {/*<Ex1_ButtonClick />
//        <Ex2_InputFieldTracker />
//        <Ex3_ToggleSwitch />
//        <Ex4_HoverHighlight />
//        <Ex5_FormSubmissionAlert />
//        <Ex6_KeyPressDisplay />
//        <Ex7_DoubleClickMessage />
//        <Ex8_DropdownSelection />
//        <Ex9_CheckboxToggle />
//        <Ex10_SearchFilter />*/}
//        <section>
//          <div
//            style={{
//              display: "flex-col",
//              justifyContent: "center",
//              marginTop: "50px",
//            }}
//          >
//            <Calculator />
//          </div>
//        </section>
//      </div>
//      <div>
//        <section>
//          <div
//            style={{
//              display: "flex-col",
//              justifyContent: "center",
//              marginTop: "50px",
//            }}
//          >
//            <RegistrationForm />
//          </div>
//        </section>
//      </div>
//    </div>
//  );
//}

//export default App;

//import React, { useState } from 'react';
//import './App.css';
//import { CartProvider } from './Lesson5/homework/Shopping/components/CartContext';
//import { CartIcon } from './Lesson5/homework/Shopping/components/CartIcon';
//import { ProductGrid } from './Lesson5/homework/Shopping/components/ProductGrid';
//import { CartDropdown } from './Lesson5/homework/Shopping/components/CartDropdown';

//const App: React.FC = () => {
//  const [isCartOpen, setIsCartOpen] = useState(false);

//  const toggleCart = () => {
//    setIsCartOpen((prev) => !prev);
//  };

//  return (
//    <CartProvider>
//      <div className="app">
//        <header className="header">
//          <div className="headerContent">
//            <h1>🛒 Big Market</h1>

//            {/* Bọc CartIcon + CartDropdown trong khối có position: relative */}
//            <div style={{ position: 'relative' }}>
//              <CartIcon onClick={toggleCart} />
//              {isCartOpen && <CartDropdown isOpen={isCartOpen} />}
//            </div>
//          </div>
//        </header>

//        <main className="main">
//          <div className="container">
//            <h2>Thực phẩm khô</h2>
//            <ProductGrid />
//          </div>
//        </main>
//      </div>
//    </CartProvider>
//  );
//};

//export default App;

//import Customer from './Lesson6/CRUD/components';
//import AppWeather from './Lesson6/Homework/AppWeather';

//export default function App() {
//  return (
//    <div>
//      {/*<Customer />*/}
//      <AppWeather />
//    </div>
//  )
//}

//import Header from './Lesson7/Afternoon/components/Header';
//import HomePage from './Lesson7/Afternoon/pages/HomePage';
//import BlogPage from './Lesson7/Afternoon/pages/BlogPage';
//import CategoryPage from './Lesson7/Afternoon/pages/CategoryPage';
//import ProductPage from './Lesson7/Afternoon/pages/ProductPage';
//import CustomerPage from './Lesson7/Afternoon/pages/CustomerPage';
//import { Route, BrowserRouter, Routes } from 'react-router';
//import LoginPage from './Lesson7/Afternoon/pages/LoginPage';

//function App() {
//  return (
//    <BrowserRouter>
//      <Header />
//      <Routes>
//        <Route path="/" element={<HomePage />} />
//        <Route path="/blog" element={<BlogPage />} />
//        <Route path="/category" element={<CategoryPage />} />
//        <Route path="/product" element={<ProductPage />} />
//        <Route path="/login" element={<LoginPage />} />
//        <Route path="/customer" element={<CustomerPage />} />
//      </Routes>
//    </BrowserRouter>
//  );
//}

//export default App;

//import Sidebar from "./Lesson7/Homework/components/Sidebar";
//import DepartmentPage from "./Lesson7/Homework/pages/DepartmentsPage";
//import HistoryPage from "./Lesson7/Homework/pages/HistoryPage";
//import { Route, BrowserRouter, Routes } from "react-router";
//import MapPage from "./Lesson7/Homework/pages/MapPage";
//import OverviewPage from "./Lesson7/Homework/pages/OverviewPage";
//import PatientsPage from "./Lesson7/Homework/pages/PatientsPage";
//import SettingsPage from "./Lesson7/Homework/pages/SettingsPage";
//import DoctorsPage from "./Lesson7/Homework/pages/DoctorsPage";

//function App() {
//  return (
//    <BrowserRouter>
//      <div className="flex h-screen bg-gray-50">
//        <Sidebar />
//        <div className="flex-1 flex flex-col">
//          {/* Header */}
//          <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
//            {/* Search Bar */}
//            <div className="flex-1 max-w-md">
//              <div className="relative">
//                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                  <svg
//                    className="h-5 w-5 text-gray-400"
//                    fill="none"
//                    viewBox="0 0 24 24"
//                    stroke="currentColor"
//                  >
//                    <path
//                      strokeLinecap="round"
//                      strokeLinejoin="round"
//                      strokeWidth={2}
//                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                    />
//                  </svg>
//                </div>
//                <input
//                  type="text"
//                  placeholder="Search..."
//                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 placeholder-gray-500"
//                />
//              </div>
//            </div>

//            {/* Right Side - Notification & Profile */}
//            <div className="flex items-center space-x-4">
//              {/* Notification Icon */}
//              <button className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
//                <svg
//                  className="h-6 w-6"
//                  fill="none"
//                  viewBox="0 0 24 24"
//                  stroke="currentColor"
//                >
//                  <path
//                    strokeLinecap="round"
//                    strokeLinejoin="round"
//                    strokeWidth={2}
//                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h16zM13.73 21a2 2 0 01-3.46 0"
//                  />
//                </svg>
//              </button>

//              {/* User Profile */}
//              <div className="flex items-center space-x-3">
//                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center"></div>
//                <div className="hidden sm:block">
//                  <p className="text-sm font-medium text-gray-900">Emma Kwan</p>
//                </div>
//              </div>
//            </div>
//          </header>

//          {/* Main Content */}
//          <main className="flex-1 overflow-y-auto">
//            <Routes>
//              <Route path="/" element={<PatientsPage />} />
//              <Route path="/department" element={<DepartmentPage />} />
//              <Route path="/patients" element={<PatientsPage />} />
//              <Route path="/overview" element={<OverviewPage />} />
//              <Route path="/map" element={<MapPage />} />
//              <Route path="/doctors" element={<DoctorsPage />} />
//              <Route path="/history" element={<HistoryPage />} />
//              <Route path="/settings" element={<SettingsPage />} />
//            </Routes>
//          </main>
//        </div>
//      </div>
//    </BrowserRouter>
//  );
//}

//export default App;

//import { useState } from 'react';


//import SignUpForm from './Lesson8/Afternoon/Lab1/SignUpForm';
//import StartForm from './Lesson8/Afternoon/Lab1/StartForm';
//import LoginForm from './Lesson8/Afternoon/Lab1/Login';

//export default function App() {
//  const [step, setStep] = useState<'start' | 'signup' | 'login'>('start');
//  const [email, setEmail] = useState('');

//  const handleEmailSubmit = (email: string) => {
//    setEmail(email);
//    setStep(email.includes('new') ? 'signup' : 'login');
//  };

//  return (
//    <div className="min-h-screen bg-pink-300 flex flex-col md:flex-row justify-center items-center gap-6 p-4">
//      {step === 'start' && <StartForm onNext={handleEmailSubmit} />}
//      {step === 'signup' && <SignUpForm email={email} />}
//      {step === 'login' && <LoginForm email={email} />}
//    </div>
//  );
//}


import LoginForm from "./Lesson8/Afternoon/Lab3/LoginForm";
import AuthPage from "./Lesson8/Afternoon/Lab1/Pages/AuthPage";
import RegisterForm from "./Lesson8/Afternoon/Lab2/RegisterForm";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh", padding: "40px" }}>
      
      {/* Lab 1 Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Lab 1 - Auth Page</h2>
        <AuthPage />
      </div>

      {/* Lab 2 Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Lab 2 - Register Form</h2>
        <RegisterForm />
      </div>

      {/* Lab 3 Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Lab 3 - Đăng nhập hệ thống</h2>
        <div className="min-h-screen flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 h-64 md:h-auto relative">
            <img
              src="/images/lab3.PNG"
              alt="Login Illustration"
              className="w-full h-full object-cover"
            />
            {/* Text overlay ở phần trên cùng của ảnh */}
            <div className="absolute top-0 left-0 right-0 p-4 md:p-6">
              <div className="text-left">
                <h1 className="text-xl md:text-3xl font-bold leading-tight text-gray-800">
                  Set Your Partner
                  <br />
                  Recruitment on <span className="text-blue-600">Auto-Pilot</span>
                </h1>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-4 py-8">
            <div className="max-w-sm w-full">
              {/* Wrap LoginForm để ẩn phần tiêu đề bị lệch */}
              <div className="[&>div:first-child]:hidden">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



//import Registration from "./Lesson8/Homework/RegistrationForm"

//function App() {
//  return (
//   <div>
//      {/*<Registration />*/}
      
//   </div>
//  );
//}

//export default App;