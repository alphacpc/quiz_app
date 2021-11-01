import React, {useEffect, useState} from 'react';
import Stepper from "react-stepper-horizontal";

const QuestionStepper = ({questions, idQuestion}) => {

    const [arrayStep, setArrayStep ] = useState([]);

    useEffect(() => {
    
        const questionsStep = questions.map(question => ({title : `Question ${question.id}`}));
        setArrayStep(questionsStep);
    
    }, [questions])
    
    
    
    return (
        <div className="divStepper">
            <Stepper 
                steps = { arrayStep } 
                activeStep = {idQuestion}
                circleTop={0}
                circleFontSize={0}
                activeTitleColor="#f05"
                activeColor="#f05"
                completeTitleColor="#f05"
                completeColor="#f05"
                completeBarColor="#f05"/>
        </div>
    )
};

export default React.memo(QuestionStepper);
