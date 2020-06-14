import React from "react";
import logo from "./logo.svg";
import "./style.css";
import Layout from "./Layout";
import Result from "./Result";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };

    this.calculate = this.calculate.bind(this);
    this.reset = this.reset.bind(this);
    this.delete = this.delete.bind(this);
  }

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "AC") {
      this.reset();
    } else if (button == "Del") {
      this.delete();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  reset() {
    this.setState({
      result: "",
    });
  }

  calculate() {
    this.setState({
      result: eval(this.state.result),
    });
  }

  delete() {
    this.setState((prevState) => ({
      result: prevState.result.slice(0, -1),
    }));
  }

  render() {
    return (
      <div className="parent">
        <Result result={this.state.result} />
        <Layout onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
