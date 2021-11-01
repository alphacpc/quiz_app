import React, { useEffect, useState} from 'react';
import Popup from "./ModalPopup";
import { FaUserGraduate } from "react-icons/fa";


const QuizOver = React.forwardRef((props, ref) => {

    const { levelName, score, numQuestions, nextLevel, currentLevel ,quizLevel, percent, levelNames } = props;
       
    const [questionList, setQuestionList] = useState([]);
    const [openPopup, setOpenPopup ] = useState(false);

    useEffect(()=>{
        setQuestionList(ref);
    },[ref])


    const showPopup = el => {
        setOpenPopup(true);
    }

    const hidePopup = () => {
        setOpenPopup(false);
    }

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
                    <h2>Titre</h2>
                </div>
                <div className="popupBody">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cupiditate maiores at accusantium id voluptatibus assumenda excepturi adipisci quod aliquid! Ut modi eveniet at dolor adipisci laborum architecto similique quam.
                    Pariatur dolor amet voluptas eius quae at repellendus itaque, beatae unde modi? Dolorem expedita molestias itaque, dolor recusandae maxime corrupti. Nihil, consectetur pariatur at autem sed aliquid sapiente eaque incidunt?
                    Delectus ab nulla dicta officia voluptatem dolorem quisquam debitis placeat aperiam nesciunt consectetur nisi tempore non deserunt tempora natus, ipsum fuga laboriosam in amet quod minus? Placeat alias reprehenderit dignissimos.
                    Sapiente nam dolores iure voluptates, voluptatem atque molestias vero temporibus, reprehenderit, doloribus incidunt laudantium consequatur mollitia fugiat nesciunt exercitationem officia velit saepe ea necessitatibus adipisci? Perferendis rerum ex veritatis temporibus!
                    Incidunt, perferendis cumque! Ab nam, neque delectus reiciendis distinctio debitis deserunt praesentium cum laborum sed magnam iure modi cupiditate aut aliquam rerum dolores quas. Tenetur, ea nostrum! Maiores, laudantium error.</p>
                </div>
                <div className="popupFooter">
                    <button className="btn ClosePopup" onClick={() => hidePopup()}>Fermer</button>
                </div>
            </Popup>

        </div>
    )
})

export default QuizOver;
