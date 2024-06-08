import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './Page';
import Home from './Home';
import SignUp from './components/Login/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./tailwind.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/page" element={<Page />} />
        </Routes>
    </Router>      
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
