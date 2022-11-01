import React from "react";

const Form2 = () => {
  return (
    <div className="container mt-5 col-sm-5">
      <div className="card text-white bg-info mb-3 border border-dark shadow-lg rounded">
        <div className="card-header">
          <h3>Email</h3>
        </div>
        <div className="card-body">
          <form>
            <label className="col-form-label mt-4" for="inputDefault">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              id="inputDefault"
            ></input>
            <button className="btn btn-info mt-3 border border-dark shadow-lg rounded">
              <a href="/form3">Next</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form2;
