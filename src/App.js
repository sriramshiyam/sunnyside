import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

