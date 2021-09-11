import React ,{useContext, useState, useEffect} from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import ForgetPassword from './pages/ForgetPassword'; 
import NotFound from './pages/NotFound'; 

import FirebaseContext from './firebases/contextFirebase';

import './assets/css/App.css'

function App() {

  const [userSession, setUserSession] = useState(null);
  const [userData, setUserData] = useState({});
  const firebase = useContext(FirebaseContext);

  useEffect( async () => {
    firebase.auth.onAuthStateChanged((user) => (user) ? setUserSession(user) : null );

    if(!!userSession){
      try{
        const doc = await firebase.userConnect(userSession.uid).get();
        if(doc && doc.exists){
          const myData = doc.data();
          setUserData(myData);
        }
      }
      catch(error){
        console.log(error);
      }
    }
  }, [userSession])


  return (
    <Router>
       <Switch>
        <Route exact path="/"><Login /></Route>
        <Route path="/bienvenue">{ (userSession !== null) ? <Welcome userData={userData}/> : <Redirect to="/connexion" /> }</Route>
        <Route path="/mot_de_passe_oublie"><ForgetPassword /></Route>
        <Route path="/connexion"><Login /></Route>
        <Route path="/inscription"><Register /></Route>
        <Route><NotFound /></Route>
      </Switch>
  </Router>
  );
}

export default App;
