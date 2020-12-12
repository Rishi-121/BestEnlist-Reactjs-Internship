/* jshint ignore:start */

import React from "react";
import { add, sub, div, mul } from "../arithmeticOperations";

function Calculator() {
  return (
    <form className="form-group jumbotron container shadow">
      <div className="row">
        <div className="col-lg-4 col-md-4">
          <input
            type="number"
            className="form-control"
            id="inputValue1"
            placeholder="Enter First Value"
            required
          />
        </div>
        <div className="col-lg-4 col-md-4">
          <select className="form-control" id="operator">
            <option defaultValue value="default">
              Choose Operator
            </option>
            <option value="+">+ (Addition)</option>
            <option value="-">- (Subtraction)</option>
            <option value="/">/ (Division)</option>
            <option value="*">* (Multiplication)</option>
          </select>
        </div>
        <div className="col-lg-4 col-md-4">
          <input
            type="number"
            className="form-control"
            id="inputValue2"
            placeholder="Enter Second Value"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-3"
        onClick={getResult}
      >
        Submit
      </button>
    </form>
  );

  function getResult() {
    const value1 = document.getElementById("inputValue1").value;
    const operator = document.getElementById("operator").value;
    const value2 = document.getElementById("inputValue2").value;

    if (operator === "+") {
      alert(add(value1, value2));
    } else if (operator === "-") {
      alert(sub(value1, value2));
    } else if (operator === "/") {
      alert(div(value1, value2));
    } else if (operator === "*") {
      alert(mul(value1, value2));
    } else {
      alert("Invalid Input");
    }
  }
}

export default Calculator;

/* jshint ignore:end */
