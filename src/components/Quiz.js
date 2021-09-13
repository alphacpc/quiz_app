import React, {useState, useContext, useEffect} from 'react'
import ProgressBar from './ProgressBar';
import {FaUserGraduate} from 'react-icons/fa';
import quizData from './../Questions';

const Quiz = () => {

    const levelNames = ["Debutant","Intermediaire","Expert"];
    const quizLevel = 0;
    const maxQuestions = 10;
    const indexQuestion = 0;
    const [sortedQuestion, setSortedQuestion] = useState([]);
    const [question,setQuestion] = useState(null);
    const [options, setOptions] = useState([]);

    const LoadQuestions = (level) =>{
        const fetchArrayQuiz = quizData[0].quiz[`${level}`]

        if(fetchArrayQuiz.length >= maxQuestions){
            const newArray = fetchArrayQuiz.map(({answer,...keepRest}) => keepRest)
            setSortedQuestion(newArray);
            setQuestion(newArray[indexQuestion].question);
            setOptions(newArray[indexQuestion].options);
        }else{
            console.log("Pas assez de questions pour jouer cette partie !");
        }
    }



    // if(sortedQuestion.length > 0){
    //     setQuestion(sortedQuestion[indexQuestion].question);
    //     setOptions(sortedQuestion[indexQuestion].options);
    // }


    const displayOptions = options.map( (option, index) => <p key={index} className="Answer">{option}</p> )



    useEffect(()=>{
        
        LoadQuestions(levelNames[quizLevel])

    },[])

    console.log(question)
    console.log(options)

    return (
        <React.Fragment>
            <ProgressBar />            
            
            <div className="mainQuiz">
                <div className="divLevel">
                    <span className="titleLevel"> <FaUserGraduate/> Niveau:</span>
                    <span className="valueLevel">Debutant</span>
                </div>
                
                <div className="divQuiz">
                    <h2 className="Question">{question}</h2>
                    <div className="divAnswers">
                        {displayOptions}
                    </div>

                    <button className="btnValidAnswer" type="submit">Valider</button>
                </div>
        
            </div>
        </React.Fragment>
    )
}

export default Quiz;
