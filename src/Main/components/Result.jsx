import React, { Fragment } from "react";

function Result(props) {
    return (
        <>
            <h2 className="title">Your result {props.score}/5  <span>({props.score * 100 / 5}%)</span></h2>
            <h3 className="sub-title"></h3>
            {
                props.data.map((item, index) => {
                    return (
                        <Fragment key={item.questionId}>
                            <h2 className="question">{item.question}</h2>
                            {item.answers.map((answer, id) => {
                                return (
                                    <div key={answer} htmlFor={`item${id}`} className={
                                        `answer ${(answer === item.correct) ? "correct" :
                                            (answer === props.userAnswers[index]) ? "incorrect" : ""}`
                                    }>
                                        <div className="answer-title">
                                            <legend>{answer}</legend>
                                        </div>
                                    </div>
                                );
                            })}

                        </Fragment>
                    );
                })
            }
            <div className="center-fix">
                <button className="btn" onClick={props.restart}>Restart</button>
            </div>
        </>
    );
}

export default Result;