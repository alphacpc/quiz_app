import React, { useEffect, useState} from 'react';
import { FaUserGraduate } from "react-icons/fa";


const QuizOver = React.forwardRef((props, ref) => {

    const { levelName, score, numQuestions, nextLevel, quizLevel } = props;
       
    const [questionList, setQuestionList] = useState([]);

    useEffect(()=>{
        setQuestionList(ref)
    },[ref])

    const questionAsked = questionList.map((element) => {
        return <tr key={element.id}>
            <td><span className="indexQuestion">{questionList.indexOf(element) + 1} </span>{element.question}</td>
            <td>{element.answer}</td>
            <td><button className="btnInfoRelatedQuestion">Cliquez-ici</button></td>
        </tr>
    })

    return (
        <div className="divOverStep">
            <div className="divMsgNextLevel">
                <p>Bravo, vous etes un expert</p>
                <button onClick={() => nextLevel(quizLevel) }>Niveau suivant</button>
            </div>

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
