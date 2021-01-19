import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './app.css'
import ButtonAppBar from './Components/ButtonAppBar';
import About from "./Pages/About";
import Home from "./Pages/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <ButtonAppBar />
          <Switch> 
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
