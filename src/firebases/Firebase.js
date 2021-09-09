import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import config from './config';

class Firebase{
    constructor(){
        firebase.initializeApp(config);
        this.auth = firebase.auth();
    }


    //LA METHODE DE CONNEXION
    registerUser = (email,password) => this.auth.createUserWithEmailAndPassword(email, password)

    //LA METHODE D'INSCRIPTION
    connectUser = (email, password) => this.auth.signInWithEmailAndPassword(email, password)
    
    
    //LA METHODE DE DECONNEXION
    logoutUser = () => this.auth.signOut();
}

export default Firebase;