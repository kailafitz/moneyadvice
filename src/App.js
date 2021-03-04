import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//  SCSS import
import './App.css';

// Navigation bar
import NavigationBar from './Components/NavigationBar';

// Page imports
import About from "./Pages/About";
import ContactUs from './Pages/ContactUs';
import Downloads from './Pages/Downloads';
import ProductFeatures from './Pages/ProductFeatures';
import Home from "./Pages/Home";
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ProductComparison from './Pages/ProductComparison';
import AdditionalServices from './Pages/AdditionalServices';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
          <Switch> 
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/productfeatures">
                <ProductFeatures />
              </Route>
              <Route exact path="/productcomparison">
                <ProductComparison />
              </Route>
              <Route exact path="/additionalservices">
                <AdditionalServices />
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