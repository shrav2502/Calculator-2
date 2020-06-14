import React from "react";

class Result extends React.Component {
  render() {
    let { result } = this.props;
    return (
      <div>
        <div className="result">{result}</div>
      </div>
    );
  }
}
export default Result;
