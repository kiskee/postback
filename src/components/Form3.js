import React from 'react'

const Form3 = () => {
  return (
    <div className="container mt-5 col-sm-5">
    <div className="card text-white bg-danger mb-3 border border-dark shadow-lg rounded">
      <div className="card-header">
        <h3>Password</h3>
      </div>
      <div className="card-body">
        <form>
          <label className="col-form-label mt-4" for="inputDefault">
          Password
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            id="inputDefault"
          ></input>
          <button className="btn btn-info mt-3 border border-dark shadow-lg rounded">
            <a href="/success">Next</a>
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Form3