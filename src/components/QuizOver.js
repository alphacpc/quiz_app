import React, { useEffect, useState} from 'react';

const QuizOver = React.forwardRef((props, ref) => {

    // console.log(props)
    console.log(ref)
    const [questionList, setQuestionList] = useState([]);

    useEffect(()=>{
        setQuestionList(ref)
    },[ref])

    const questionAsked = questionList.map((element) => {
        return <tr key={element.id}>
            <td>{element.question}</td>
            <td>{element.answer}</td>
            <td><button className="btnInfoRelatedQuestion">Cliquez-ici</button></td>
        </tr>
    })

    return (
        <div className="divOverStep">
            <div className="divMsgNextLevel">
                <p>Bravo, vous etes un expert</p>
                <button>Niveau suivant</button>
            </div>

            <div className="divGradeScore">
                <p>
                    <span className="scoreLabel">Score : </span>
                    <span className="scoreValue">10/10</span>
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
