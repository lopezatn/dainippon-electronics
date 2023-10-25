import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Index/Index';
import Contact from './components/Contact/Index';
import Company from './components/OurCompany/Index';
import Products from './components/Products/Index';
import Login from './components/Login/Index';

function App() {
  return (
      <Home />
      
      /* <Route exact path="/Nuestra-empresa" component={Company} />
      <Route exact path="/Productos" component={Products} />
      <Route exact path="/Contacto" component={Contact} />
      <Route exact path="/Login" component={Login} /> */
  );
}

export default App;
