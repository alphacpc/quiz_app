import React, { useState,  useEffect } from "react";

import QuizOver from './QuizOver';
import QuestionStepper from "./QuestionStepper";

import { FaUserGraduate } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import quizData from "./../Questions";
import 'react-toastify/dist/ReactToastify.minimal.css';

import 'react-toastify/dist/ReactToastify.css';



const Quiz = ({userData}) => {
  const levelNames = ["Debutant", "Intermediaire", "Expert"];
  const [quizLevel, setQuizLevel ] = useState(0)
  const maxQuestions = 10;
  const [idQuestion, setIdQuestion] = useState(0);
  const [sortedQuestion, setSortedQuestion] = useState([]);
  const [question, setQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [userAnswer, setUserAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [sortedDataRef, setSortedDataRef] = useState([]);
  const [percent, setPercent] = useState(0);
  const [QuizEnd, setQuizEnd] = useState(false);

  const [noticeWelcome, setNoticeWelcome] = useState(false);

  const LoadQuestions = (level) => {
    
    const fetchArrayQuiz = quizData[0].quiz[`${level}`];

    if (fetchArrayQuiz.length >= maxQuestions) {
      setSortedDataRef(fetchArrayQuiz);
      const newArray = fetchArrayQuiz.map(
        ({ answer, ...keepRest }) => keepRest
      );
      setSortedQuestion(newArray);
      setQuestion(newArray[idQuestion].question);
      setOptions(newArray[idQuestion].options);
    } else {
      console.log("Pas assez de questions pour jouer cette partie !");
    }
  };

  const submitAnswer = (answer) => {
    setBtnDisabled(false);
    setUserAnswer(answer);
  };

  const displayOptions = options.map((option, index) => {
    return (
      <p
        key={index}
        className={`Answer ${userAnswer === option ? "selected" : ""}`}
        onClick={() => submitAnswer(option)}
      >
        {option}
      </p>
    );
  });

  const welcomeToast = () => toast.info(`Bienvenue ${userData.fullname}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
    });

  useEffect(() => {
    
    LoadQuestions(levelNames[quizLevel]);

    if(noticeWelcome === false){
        welcomeToast();
        setNoticeWelcome(true);
    }

  }, [idQuestion]);


  const getPercent = (maxQuest, yourScore) => (yourScore / maxQuest) / 100; 
  
  const gameOver = () => {
    const gradePercent = getPercent(maxQuestions, score)

    if( gradePercent >= 50){
      setQuizLevel(quizLevel + 1);
      setPercent(gradePercent);
      setQuizEnd(true)
    }else{
      setPercent(gradePercent);
      setQuizEnd(true);
    }
    
    setQuizEnd(true);
    console.log("Game over")

  }



  const nextQuestion = () => {
    if (idQuestion === maxQuestions - 1) {
      gameOver();
    } 
    else {
      setIdQuestion(idQuestion + 1);
      setBtnDisabled(true)
    }

    let goodAnswer = sortedDataRef[idQuestion].answer;

    if (userAnswer === goodAnswer) {
        toast.success('Bravo +1!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true, 
            theme: 'colored'
        });
        setScore(score + 1);
    } 
    else {
      toast.error('Désolé !', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  const textBtn = idQuestion < maxQuestions - 1 ? "Suivant" : "Terminer";

  const buttonElement = ( !btnDisabled ) ?  (
    <button 
            type="submit"
            className="btnValidAnswer"
            onClick={nextQuestion}
            >{textBtn}</button>
  ): (
    <button 
            className="btnValidAnswer"
            >{textBtn}</button>
  )

  const nextLevel = (level) => {
    setQuizLevel(level+1)
    setIdQuestion(0);
    setQuestion(null);
    setUserAnswer(null);
    setScore(0);
    setSortedDataRef([]);
    setQuizEnd(false);
    setNoticeWelcome(true);
    LoadQuestions(levelNames[quizLevel]);

  }


  const currentLevel = (level) => {
    setQuizLevel(level)
    setIdQuestion(0);
    setQuestion(null);
    setUserAnswer(null);
    setScore(0);
    setSortedDataRef([]);
    setQuizEnd(false);
    setNoticeWelcome(true);
    LoadQuestions(levelNames[quizLevel]);

  }


  return (QuizEnd) ? (<QuizOver 
                        ref={ sortedDataRef }
                        levelName={ levelNames[quizLevel] }
                        levelNames = { levelNames }
                        score={score}
                        numQuestions={maxQuestions}
                        nextLevel={nextLevel}
                        currentLevel = { currentLevel }
                        quizLevel={ quizLevel }
                        percent ={percent}
                      />) :
    (
    <React.Fragment>
      


      <QuestionStepper questions={ sortedQuestion } idQuestion={idQuestion}/>

      <ToastContainer />
      <div className="mainQuiz">
        <div className="divLevel">
          <span className="titleLevel">
            <FaUserGraduate /> Niveau:
          </span>
          <span className="valueLevel">{levelNames[quizLevel]}</span>
        </div>

        <div className="divQuiz">
          <h2 className="Question">{question}</h2>
          <div className="divAnswers">{displayOptions}</div>

          { buttonElement }

        </div>
      </div>
    </React.Fragment>
  );
};

export default Quiz;
