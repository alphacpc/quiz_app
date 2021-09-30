import React from 'react';

const QuizOver = React.forwardRef((props, ref) => {

    console.log(props)
    console.log(ref)
    return (
        <div className="divOverStep">
            <div className="divMsgNextLevel">
                <p>Bravo, vous etes un expert</p>
                <button>Niveau suivant</button>
            </div>

            <div className="divGradeScore">
                <span>Reussite : 10 %</span>
                <span>Score : 10/10</span>
            </div>
            <hr id="myDivider"/>
            <div className="divAllQuestions">
                <p>Lorem ipsum</p>
            </div>
            
        </div>
    )
})

export default QuizOver;
