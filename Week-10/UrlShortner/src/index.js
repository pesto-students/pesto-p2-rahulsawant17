import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router ,Routes} from 'react-router-dom'
import './index.css';
import Contact from './contact'
import { Home } from "./App";

const routing = (
    <Router>
    <div>
      <Routes>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </div>
  </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'));