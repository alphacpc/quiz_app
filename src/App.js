import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import Auth from './pages/Auth';
import './assets/css/App.css';

function App() {
  return (
    <Router>
       <Switch>
        <Route exact path="/"><Auth /></Route>
        <Route path="/welcome"><Welcome /></Route>
        <Route path="/connexion"><Login /></Route>
        <Route path="/inscription"><Register /></Route>
      </Switch>
  </Router>
  );
}

export default App;
