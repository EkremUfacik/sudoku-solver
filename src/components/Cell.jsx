import React from "react";

const Cell = ({ numberList, setNumberList }) => {
  const handleChange = (e, index) => {
    let changeNum = [...numberList];
    changeNum[index] = Number(e.target.value);
    setNumberList(changeNum);
  };

  console.log(numberList);

  return (
    <div className="container">
      {numberList?.map((num, index) => (
        <input
          type="number"
          max="9"
          min="0"
          value={num !== 0 ? (num > 9 ? 9 : num) : ""}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
};

export default Cell;
