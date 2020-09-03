import React from "react";

const DeleteUpdateBTN = ({ deleteBtn, updateBtn }) => {
  return (
    <div>
      <button onClick={updateBtn}>Update</button>
      <button onClick={deleteBtn}>Delete</button>
    </div>
  );
};

export default DeleteUpdateBTN;
