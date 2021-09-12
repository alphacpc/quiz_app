import React from 'react'
import ProgressBar from './ProgressBar';
import {FaUserGraduate} from 'react-icons/fa';


const Quiz = () => {
    return (
        <React.Fragment>
            <ProgressBar />            
            
            <div className="mainQuiz">
                <div className="divLevel">
                    <span className="titleLevel"> <FaUserGraduate/> Niveau:</span>
                    <span className="valueLevel">Debutant</span>
                </div>
                
                <div className="divQuiz">
                    <h2 className="Question">Quelle est la capital du Senegal ?</h2>
                    <div className="divAnswers">
                        <p className="Answer">Conakry</p>
                        <p className="Answer">Lagos</p>
                        <p className="Answer selected">Dakar</p>
                        <p className="Answer">Addis-Abeba</p>
                    </div>

                    <button className="btnValidAnswer" type="submit">Valider</button>
                </div>
        
            </div>
        </React.Fragment>
    )
}

export default Quiz;
