import React, { useState, useContext, useEffect} from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import FirebaseContext from './../firebases/contextFirebase';

const Register = () => {
    
    const initData = {
        'fullname': '',
        'email': '',
        'mdp': '',
        'mdpc': ''
    }


    const firebase = useContext(FirebaseContext);
    const [loginData, setLoginData] = useState(initData);    
    const [error, setError] = useState('');
    const history = useHistory();

    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.id] : e.target.value});
    }

    const { fullname, email, mdp, mdpc} = loginData;

    const checkBtn = fullname == '' || email == '' || mdp == '' || mdpc == '' ? 
    <button className="btnSubmit" disabled>s'inscrire</button> : <button type="submit" className="btnSubmit">s'inscrire</button>   

    const checkError = ( error != '' ) ?
        <div className={`form-group-error ${'show'}`} >
            <p>{error.message}</p>
        </div> : 
        <div className="form-group-error"></div>;


    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const user = await firebase.registerUser(email, mdp);
            if(user){
                setLoginData({...initData});
                //return <Redirect to="/bienvenue" />
                history.push('/bienvenue');
            }
        }
        catch(err){
            setError(err);
            setLoginData({...initData});
        }
    } 
    
    useEffect(()=>{
         if(document.querySelector('.show') != null){
             setTimeout(()=>{
                 document.querySelector('.form-group-error').classList.remove('show');
             },3000);
         }

    },[loginData])

    return (
        <div className="Auth">

        <div className="mainRegister mainChild">
            <form onSubmit={ handleSubmit}>

                <div className="form-group-head">
                    <h1 className="titleApp">jangOo</h1>
                </div>

                {checkError}

                <div className="form-group">
                    <input type="text" id="fullname" onChange={ handleChange } value={ loginData.fullname } placeholder="Entrer votre Prénom et Nom de famille" autoComplete="off" required/>
                </div>

                <div className="form-group">
                    <input type="email" id="email" onChange={ handleChange } value={ loginData.email } placeholder="Entrer votre adresse e-mail" autoComplete="off" required/>
                </div>

                <div className="form-group">
                    <input type="password" id="mdp" onChange={ handleChange } value={ loginData.mdp } placeholder="Entrer votre mot de passe" autoComplete="off" required/>
                </div>

                <div className="form-group">
                    <input type="password" id="mdpc"  onChange={ handleChange } value={ loginData.mdpc } placeholder="Veuillez confirmer votre mot de passe" autoComplete="off" required/>
                </div>


                <div className="form-group">
                    { checkBtn }      
                </div>

                <div className="form-group">
                    <p>Vous avez deja un compte !<Link to="connexion" className="btnCurrentForm">connectez-vous</Link></p>      
                </div>

            </form>
        </div>

        </div>
    )
}

export default Register
