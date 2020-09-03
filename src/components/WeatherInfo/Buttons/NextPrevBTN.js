import React from "react";

const NextPrevBTN = ({ nextBtn, prevBtn }) => {
  return (
    <div>
      <button onClick={prevBtn}>Prev</button>
      <button onClick={nextBtn}>Next</button>
    </div>
  );
};

export default NextPrevBTN;
