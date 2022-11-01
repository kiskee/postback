import React, { useEffect } from "react";
import PostbackSend from "./PostbackSend";

const Success = () => {
  //PostbackSend();

  return (
    <div className="container mt-5 col-sm-5  ">
    <div className="card text-white bg-success mb-3 border border-dark shadow-lg rounded">
      <div className="card-header">THANKS!!!!</div>
      <div className="card-body">
        <h4 className="card-title">Success job apply</h4>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Success;
