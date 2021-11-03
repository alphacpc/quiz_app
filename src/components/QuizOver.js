import React, { useEffect, useState} from 'react';
import Popup from "./ModalPopup";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from 'react-router-dom';


const QuizOver = React.forwardRef((props, ref) => {

    const { levelName, score, numQuestions, nextLevel, currentLevel ,quizLevel, levelNames } = props;
       
    const [questionList, setQuestionList] = useState([]);
    const [openPopup, setOpenPopup ] = useState(false);
    const [qPopup, setQpopup] = useState("");
    const [qDpopup, setQdPopup] = useState("");
    const [qIpopup, setQiPopup] = useState("");

    useEffect(()=>{
        setQuestionList(ref);
    },[ref])

    
    const showPopup = el => {
        setQdPopup(el.complement.infos);
        setQpopup(el.question)
        setQiPopup(el.complement.img)
        setOpenPopup(true);
        console.log(qIpopup)
    }

    const hidePopup = () => {
        setOpenPopup(false);
    }

    const checkRenderRow = (qIpopup !== "") ? (
        <div>
            <p>{qDpopup}</p>
            <Link target="_blank"><img src={qIpopup.default} alt="image"/></Link>
        </div>
    ):(
        <p>{qDpopup}</p>
    );

    const decision = score >= numQuestions / 2 ? (
        <React.Fragment>
        <div className="divMsgNextLevel">
            { 
                (quizLevel < levelNames.length) ? 
                (   
                    <React.Fragment>
                        <p>Bravo, passez au niveau suivant</p>
                        <button onClick={() => nextLevel(quizLevel) }>Niveau suivant</button>
                    </React.Fragment>         
                ) : (
                    <React.Fragment>
                        <p>Bravo, vous etes un expert</p>
                        <button onClick={() => nextLevel(0) }>Rejouer</button>
                    </React.Fragment>
                )
            }
        </div>
        </React.Fragment>

    ) : (<div className="divMsgNextLevel">
            <p className="pLoser">Desole, vous avez echoue</p>
            {/* <button onClick={() => nextLevel(quizLevel) }>Niveau suivant</button> */}
        </div>
    );

    const questionAsked = ( score >= numQuestions / 2) ? (questionList.map((element) => {
        return <tr key={element.id}>
            <td><span className="indexQuestion">{questionList.indexOf(element) + 1} </span>{element.question}</td>
            <td>{element.answer}</td>
            <td><button className="btnInfoRelatedQuestion" onClick={() => showPopup(element) }>Cliquez-ici</button></td>
        </tr>
    })) : <div class="divMsgLoser">
                <p>Veuillez reprendre la partie !</p>
                <button onClick={() => currentLevel(quizLevel)} >Cliquez-ici</button>
        </div>;

    return (
        <div className="divOverStep">
            
            { decision }    

            <div className="divGradeScore">
                <p>
                    <FaUserGraduate /> Niveau: <span className="valueLevel">{ levelName }</span>
                </p>
                <p>
                    <span className="scoreLabel">Score : </span>
                    <span className="scoreValue">{score}/{ numQuestions}</span>
                </p>
            </div>

            <hr id="myDivider"/>
            
            <div className="divAllQuestions">
                <table className="tableAnswers">
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Reponse</th>
                            <th>Information</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questionAsked}
                    </tbody>
                </table>
            </div>
            
            <Popup show={openPopup}>
                <div className="popupHeader">
                    <h2>{qPopup}</h2>
                </div>
                <div className="popupBody">
                    {checkRenderRow}
                </div>
                <div className="popupFooter">
                    <button className="btn ClosePopup" onClick={() => hidePopup()}>Fermer</button>
                </div>
            </Popup>

        </div>
    )
})

export default QuizOver;
