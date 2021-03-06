import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import config from './config';

class Firebase{
    constructor(){
        firebase.initializeApp(config);
        this.auth = firebase.auth();
        this.db = firebase.firestore();
    }


    //LA METHODE DE CONNEXION
    registerUser = (email,password) => this.auth.createUserWithEmailAndPassword(email, password)

    //LA METHODE D'INSCRIPTION
    connectUser = (email, password) => this.auth.signInWithEmailAndPassword(email, password)
    
    
    //LA METHODE DE DECONNEXION
    logoutUser = () => this.auth.signOut();

    //LA METHODE POUR RESET PASSWORD
    resetPassword = (email) => this.auth.sendPasswordResetEmail(email);

    //CURRENT USER
    userConnect = (uid) => this.db.doc(`users/${uid}`);


}

export default Firebase;