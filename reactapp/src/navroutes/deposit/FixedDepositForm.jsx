import React from "react";

class FixedDepositForm extends React.Component {
  constructor() {
    super();
    this.state = {
      principleAmt: "",
      duration: "",
      roi: "",
      MaturityAmt: ""
    };
  }

  handlePrincipleAmt = event => {
    this.setState({
      principleAmt: event.target.value
    });
  };
  handleDuration = event => {
    this.setState({
      duration: event.target.value
    });
  };
  handleROI = event => {
    this.setState({
      roi: event.target.value
    });
  };
  displayMaturity = () => {
    const { principleAmt, duration, roi } = this.state;
    this.setState({
      MaturityAmt: (principleAmt * duration * roi) / 100
    });
  };
  clear = () => {
    this.setState({
      principleAmt: "",
      duration: "",
      roi: "",
      MaturityAmt: ""
    });
  };

  render() {
    const { principleAmt, duration, roi, MaturityAmt } = this.state;
    return (
      <div>
        <h1>Fixed Deposit Form</h1>
        <label>
          <span style={{ fontWeight: "bold" }}>PrincipleAmt:</span>
          <input
            type="text"
            value={principleAmt}
            name="pamt"
            onChange={this.handlePrincipleAmt}
            style={{ display: "block" }}
          />
          <br />
        </label>
        <label>
          <span style={{ fontWeight: "bold" }}>Duration:</span>
          {/* <input
            type="number"
            value={duration}
            name="duration"
            onChange={this.handleDuration}
            style={{ display: "block" }}
          /> */}
          <select
            id="myList"
            onChange={this.handleDuration}
            style={{ display: "block" }}
          >
            <option value="select">select</option>
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
          </select>
          <br />
        </label>
        <label>
          <span style={{ fontWeight: "bold" }}>Rate Of Interset</span>:
          <input
            type="number"
            value={roi}
            onChange={this.handleROI}
            style={{ display: "block" }}
          />
          <br />
        </label>
        <span style={{ fontWeight: "bold" }}>
          Maturiy Amount:
          {MaturityAmt}
        </span>
        <br />
        <div style={{ margin: "20px" }}>
          <button
            onClick={this.displayMaturity}
            style={{ marginRight: "20px" }}
          >
            Calculate
          </button>
          <button onClick={this.clear}>Reset</button>
        </div>
      </div>
    );
  }
}
export default FixedDepositForm;
