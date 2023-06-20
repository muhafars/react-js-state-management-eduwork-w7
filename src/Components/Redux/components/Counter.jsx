import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../../app/features/counter/actions";
import "bootstrap/dist/css/bootstrap.min.css";

const Counter = function () {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="container my-5">
      <h1 className="text-center">Counter</h1>
      <div className="row justify-content-center mt-3">
        <div className="col-auto">
          <button className="btn btn-danger ms-2" onClick={() => dispatch(decrement())}>
            -
          </button>
        </div>
        <div className="col-auto">
          <p className="fs-1">{count}</p>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary me-2" onClick={() => dispatch(increment())}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
