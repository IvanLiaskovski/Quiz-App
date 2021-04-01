import React from "react";
import Main from "./Main/Main";

class App extends React.Component {
  render() {
    return (
      <>
        <h1 className="main-title">Quiz App</h1>
        <div className="container">
          <Main />
        </div>
      </>
    );
  }
}

export default App;
