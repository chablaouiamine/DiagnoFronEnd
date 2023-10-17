import React from "react";

export default function Login() {
  return (
    <div>
      <form action="" className="d-flex flex-column">
        <div className="col-4 mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="col-4 mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
       
        <button type="submit" className="btn btn-primary col-4">
          Submit
        </button>
      </form>
    </div>
  );
}
