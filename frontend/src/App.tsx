import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Footer } from './components/main-page/Footer';
import { Home } from './components/main-page/Home';
import { All } from './components/main-page/All';
import { AuthProvider } from './components/main-page/AuthContext';


function App() {

  return (
    <Router>
    <AuthProvider>
        <div className="App">
          <TransitionGroup>
            <CSSTransition classNames="fade" timeout={700}>
              <Home />
            </CSSTransition>
          </TransitionGroup>
          <Footer />
        </div>
        </AuthProvider>
    </Router>
  );
}
export default App;
