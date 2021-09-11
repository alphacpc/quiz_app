import React, {useContext, useState, } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';

import FirebaseContext from './../firebases/contextFirebase';


const ForgetPassword = () => {

    const firebase = useContext(FirebaseContext);
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const history = useHistory();

    const handleChange = (e) => setEmail(e.target.value);

    const checkBtn = (email !== "") ? 
    <button type="submit" className="btnSubmit">Envoyer</button> : <button disabled className="btnSubmit">Envoyer</button>     

    const checkError = (error !== null) ? 
        <div className={`form-group-error ${'show'}`}>
            <p>{error.message}</p>
        </div> : <React.Fragment></React.Fragment>;
    

    const checkSuccess = (success !== null) ? <div className="form-group-success">
            <p>{success}</p>
        </div> : <React.Fragment></React.Fragment>;
    

    const handleSubmit = async (e) => {
        e.preventDefault();
 
        try{
            await firebase.resetPassword(email);
            setError(null);
            setEmail("");
            setSuccess(`Consultez votre boite mail, un e-mail a été envoyé à l'adresse ${email} !`)

            setTimeout(()=>{
                setSuccess(null);
                history.push("/connexion");
                
            },3000)
        }

        catch(err){
            setSuccess(null);
            setError(err);
            setEmail("");
        }
    };


    return (
        <div className="Auth">
        <div className="mainLogin mainChild">
            <form onSubmit={ handleSubmit } >

                <div className="form-group-head">
                    <h1 className="titleApp">jangOo</h1>
                </div>

                { checkError}

                { checkSuccess }

                <div className="form-group">
                    <span><FaEnvelope /></span>
                    <input type="email" id="email" onChange={ handleChange } value={email} placeholder="Veuillez entrer votre adresse e-mail" autoComplete="off" required/>
                </div>

                
                <div className="form-group">
                    { checkBtn }
                </div>

                <div className="form-group">
                    <p>Vous avez deja un compte !<Link to="connexion" className="btnCurrentForm">se connecter</Link></p>      
                </div>

            </form>
        </div>
        </div>
    )
}

export default ForgetPassword
