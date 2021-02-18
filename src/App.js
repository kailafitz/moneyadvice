import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import NavigationBar from './Components/NavigationBar';
import About from "./Pages/About";
import ContactUs from './Pages/ContactUs';
import Downloads from './Pages/Downloads';
import Features from './Pages/Features';
import Home from "./Pages/Home";
import PrivacyPolicy from './Pages/PrivacyPolicy';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
          <Switch> 
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/features">
                <Features />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/contactus">
                <ContactUs />
              </Route>
              <Route exact path="/privacypolicy">
                <PrivacyPolicy />
              </Route>
              <Route exact path="/downloads">
                <Downloads />
              </Route>
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;