import React from "react";

const Cell = ({ num, numberList, setNumberList, index }) => {
  const handleChange = (e) => {
    let changeNum = [...numberList];
    changeNum[index] = Number(e.target.value);
    setNumberList(changeNum);
  };

  console.log(numberList);

  return (
    <input type="number" value={num != 0 ? num : ""} onChange={handleChange} />
  );
};

export default Cell;
