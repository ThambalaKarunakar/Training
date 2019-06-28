import React from "react";

class LoanComp extends React.Component {
  constructor() {
    super();
    this.state = {
      loan: "",
      duration: "",
      roi: "",
      emi: ""
    };
  }

  handlePrincipleAmt = event => {
    this.setState({
      loan: event.target.value
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
  calEMI = () => {
    this.setState({
      //[P x R x (1+R)^N]/[(1+R)^N-1][P x R x (1+R)^N]/[(1+R)^N-1]

      // emi:
      //   (parseInt(this.state.loan) *
      //     parseInt(this.state.roi) *
      //     parseInt(Math.pow(1 + this.state.roi, this.state.duration))) /
      //   parseInt(Math.pow(1 + this.state.roi, this.state.duration) - 1)

      emi: (this.state.loan * this.state.duration * this.state.roi) / 100
    });
  };

  render() {
    return (
      <div className="rdf" style={{ margin: "20px" }}>
        <h1>Loan Form</h1>
        <label>
          <b>Loan:</b>
          <input
            type="text"
            value={this.state.loan}
            name="pamt"
            onChange={this.handlePrincipleAmt}
            style={{ display: "block" }}
          />
          <br />
        </label>
        <label>
          <b>Duration</b>:
          <input
            type="number"
            value={this.state.duration}
            name="duration"
            onChange={this.handleDuration}
            style={{ display: "block" }}
          />
          {/* <select
            id="myList"
            onChange={this.handleDuration}
            style={{ display: "block" }}
          >
            <option value="select">select</option>
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
          </select> */}
          <br />
        </label>
        <label>
          <b> ROI:</b>
          <input
            type="number"
            value={this.state.roi}
            onChange={this.handleROI}
            style={{ display: "block" }}
          />
          <br />
        </label>
        <label>
          <span style={{ fontWeight: "bold" }}>EMI:</span>
          {this.state.emi}
        </label>
        <br />
        <button onClick={this.calEMI}>Calculate</button>
      </div>
    );
  }
}
export default LoanComp;
