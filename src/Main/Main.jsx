import React from "react";
import Answers from "./components/Answers";
import Result from "./components/Result";
import questions from "../API/questions";
import "./Main.css";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            question: "",
            answers: [],
            correct: "",
            score: 0,
            count: 1,
            userAnswers: []
        }
        this.nextAnswer = this.nextAnswer.bind(this);
        this.restart = this.restart.bind(this);
    }

    async componentDidMount() {
        await questions().then(data => this.setState({ dataList: data }));
        this.setState({
            question: this.state.dataList[0].question,
            answers: this.state.dataList[0].answers,
            correct: this.state.dataList[0].correct
        });
    }

    nextAnswer(e) {
        e.preventDefault();
        //If user answer is correct grow score
        if (e.target.answer.value === this.state.correct) {
            this.setState({ score: this.state.score + 1 });
        }
        this.setState({ count: this.state.count + 1 });

        if (this.state.count >= 5) return false;
        //Create next question
        let nextQuestion = this.state.dataList[this.state.count];
        this.setState({
            question: nextQuestion.question,
            answers: nextQuestion.answers,
            correct: nextQuestion.correct,
        });
        this.state.userAnswers.push(e.target.answer.value);
    }

    async restart() {
        await questions().then(data => this.setState({ dataList: data }));
        this.setState({
            question: this.state.dataList[0].question,
            answers: this.state.dataList[0].answers,
            correct: this.state.dataList[0].correct,
            score: 0,
            count: 1,
            userAnswers: []
        });
    }

    render() {
        return (
            <div className="quiz-inner">
                {this.state.count < 6 ?
                    <Answers next={this.nextAnswer} data={this.state.dataList}
                        answers={this.state.answers} question={this.state.question} count={this.state.count} />
                    :
                    <Result score={this.state.score} data={this.state.dataList}
                        userAnswers={this.state.userAnswers} restart={this.restart} />
                }
            </div>
        );
    }
}

export default Main;