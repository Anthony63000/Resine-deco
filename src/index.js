import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import "./styles/styles.css"

import Home from "./pages/Home"
import { store } from './redux/store';
import Services from './pages/Services';
import Works from './pages/Works';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NetworkAbsolute from './components/NetworkAbsolute/NetworkAbsolute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop/>
        <NetworkAbsolute/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services/>}/>
          <Route path='/works' element={<Works/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
