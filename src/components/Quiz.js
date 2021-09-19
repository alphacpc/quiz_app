import React, { useState, useContext, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import { FaUserGraduate } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import quizData from "./../Questions";
import 'react-toastify/dist/ReactToastify.minimal.css';

import 'react-toastify/dist/ReactToastify.css';
 
const Quiz = ({userData}) => {
  const levelNames = ["Debutant", "Intermediaire", "Expert"];
  const quizLevel = 0;
  const maxQuestions = 10;
  const [idQuestion, setIdQuestion] = useState(0);
  const [sortedQuestion, setSortedQuestion] = useState([]);
  const [question, setQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [sortedDataRef, setSortedDataRef] = useState([]);

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

  const nextQuestion = () => {
    if (idQuestion === maxQuestions - 1) {
      //End
    } 
    else {
      setIdQuestion(idQuestion + 1);
    }

    let goodAnswer = sortedDataRef[idQuestion].answer;

    if (userAnswer === goodAnswer) {
        toast.success('Bravo +1!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true, 
            theme: 'colored'
        });
        setScore(score + 1);
    } 
    else {
      toast.error('Erreur !', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  return (
    <React.Fragment>
      <ProgressBar />
      <ToastContainer />
      <div className="mainQuiz">
        <div className="divLevel">
          <span className="titleLevel">
            {" "}
            <FaUserGraduate /> Niveau:
          </span>
          <span className="valueLevel">Debutant</span>
        </div>

        <div className="divQuiz">
          <h2 className="Question">{question}</h2>
          <div className="divAnswers">{displayOptions}</div>

          <button
            className="btnValidAnswer"
            disabled={btnDisabled}
            type="submit"
            onClick={nextQuestion}
          >
            Valider
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Quiz;
