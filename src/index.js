import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contact from "./pages/Contact"
import ServicePage from "./pages/ServicePage"
import Training from "./pages/Training"
import About from "./pages/About"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route index element={<App />} />
      <Route path="/" element={<App/>}/>
      <Route path='/contactus' element={<Contact/>}/>
      <Route path='/service' element={<ServicePage/>}/>
      <Route path='/training' element={<Training />}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
