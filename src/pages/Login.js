import React, { useContext, useState, useEffect} from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from './../firebases/contextFirebase';

const Login = () => {


    const initData = {
        'email': '',
        'mdp': '',
    }


    const firebase = useContext(FirebaseContext);
    const [loginData, setLoginData] = useState(initData);    
    const [error, setError] = useState('');
    const history = useHistory();

    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.id] : e.target.value});
    }

    const { email, mdp} = loginData;

    const checkBtn = email == '' || mdp == '' ? 
    <button className="btnSubmit" disabled>s'inscrire</button> : <button type="submit" className="btnSubmit">s'inscrire</button>   

    const checkError = ( error != '' ) ?
        <div className={`form-group-error ${'show'}`} >
            <p>{error.message}</p>
        </div> : 
        <div className="form-group-error"></div>;


    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const user = await firebase.connectUser(email, mdp);
            if(user){
                setLoginData({...initData});
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
        <div className="mainLogin mainChild">
            <form onSubmit={ handleSubmit }>


                <div className="form-group-head">
                    <h1 className="titleApp">jangOo</h1>
                </div>

                { checkError}


                <div className="form-group">
                    <span><FaEnvelope/></span>
                    <input type="email" id="email" onChange={handleChange} value={email} placeholder="Adresse email ou nom d'utilisateur" autoComplete="off" required/>
                </div>

                <div className="form-group">
                    <span><FaLock /></span>
                    <input type="password" id="mdp" onChange={handleChange} value={mdp} placeholder="Entrer votre mot de passe" autoComplete="off" required/>
                </div>

                <div className="form-group form-group-forget">
                    <Link to="mot_de_passe_oublie" className="linkForget">Mot de passe oublié !</Link>      
                </div>
                
                <div className="form-group">
                    {checkBtn}    
                </div>

                <div className="form-group">
                    <p>Vous n'avez pas de compte !<Link to="inscription" className="btnCurrentForm">s'inscrire</Link></p>      
                </div>

            </form>
        </div>
        </div>
    )
}

export default Login;
