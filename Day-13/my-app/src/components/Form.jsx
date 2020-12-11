/* jshint ignore:start */

import React from "react";

function Form() {
  return (
    <form className="jumbotron container shadow">
      <div className="form-group">
        <label htmlFor="exampleInput">Enter Something . . .</label>
        <input
          type="text"
          className="form-control"
          id="exampleInput"
          autoComplete="off"
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={getValue}>
        Submit
      </button>
    </form>
  );

  function getValue() {
    alert(document.getElementById("exampleInput").value);
  }
}

export default Form;

/* jshint ignore:end */
