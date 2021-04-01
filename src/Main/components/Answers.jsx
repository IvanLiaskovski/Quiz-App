function Answers(props) {
    return (
        <>
            <h2 className="title">Question {props.count}<span>/{props.data.length}</span></h2>
            <form onSubmit={props.next}>
                <h3 className="sub-title question">{props.question}</h3>
                {props.data &&
                    props.answers.map((item, index) => {
                        return (
                            <label key={item} htmlFor={`item${index}`} className="answer">
                                <div className="answer-title">
                                    <legend>{item}</legend>
                                </div>
                                <div>
                                    <input type="radio" id={`item${index}`} value={item} name="answer" />
                                </div>
                            </label>
                        );
                    })
                }
                <div className="center-fix">
                    <button type="submit" className="btn"><span>Next</span></button>
                </div>
            </form>
        </>
    );
}

export default Answers;