import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import ForgetPassword from './pages/ForgetPassword'; 
import NotFound from './pages/NotFound'; 

import './assets/css/App.css'

function App() {
  return (
    <Router>
       <Switch>
        <Route exact path="/"><Login /></Route>
        <Route path="/bienvenue"><Welcome /></Route>
        <Route path="/mot_de_passe_oublie"><ForgetPassword /></Route>
        <Route path="/connexion"><Login /></Route>
        <Route path="/inscription"><Register /></Route>
        <Route><NotFound /></Route>
      </Switch>
  </Router>
  );
}

export default App;
