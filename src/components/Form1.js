import React from "react";

const Form1 = () => {
  return (
    <div className="container mt-5 col-sm-5">
      <div className="card text-white bg-success mb-3 border border-dark shadow-lg rounded">
        <div className="card-header">
          <h3>Name</h3>
        </div>
        <div className="card-body">
          <form>
            <label className="col-form-label mt-4" for="inputDefault">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              id="inputDefault"
            ></input>
            <button className="btn btn-info mt-3 border border-dark shadow-lg rounded">
              <a href="/form2">Next</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form1;
