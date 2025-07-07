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
import AppWeather from './Lesson6/Homework/AppWeather';

export default function App() {
  return (
    <div>
      {/*<Customer />*/}
      <AppWeather />
    </div>
  )
}