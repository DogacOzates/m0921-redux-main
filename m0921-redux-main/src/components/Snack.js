import React, { memo } from "react";

const Snack = memo(({ snack, handleQuantity, getRandomColor }) => {
  return (
    <div className="card">
      <div
        className="card-body fw-bold"
        style={{ backgroundColor: getRandomColor() }}
      >
        {snack.food} : {snack.quantity}
      </div>
      <div className="card-footer">
        <button
          className="btn btn-primary m-1"
          onClick={() => handleQuantity("+", snack.id)}
        >
          +
        </button>
        <button
          className="btn btn-danger m-1"
          onClick={() => handleQuantity("-", snack.id)}
        >
          -
        </button>
      </div>
    </div>
  );
});

export default Snack;
