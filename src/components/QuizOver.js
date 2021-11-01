import React, { useEffect, useState} from 'react';
import { FaUserGraduate } from "react-icons/fa";


const QuizOver = React.forwardRef((props, ref) => {

    const { levelName, score, numQuestions, nextLevel, currentLevel ,quizLevel, percent, levelNames } = props;
       
    const [questionList, setQuestionList] = useState([]);

    useEffect(()=>{
        setQuestionList(ref)
    },[ref])


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
                        <button onClick={() => nextLevel(quizLevel) }>Niveau suivant</button>
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
            <td><button className="btnInfoRelatedQuestion">Cliquez-ici</button></td>
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
            
        </div>
    )
})

export default QuizOver;
