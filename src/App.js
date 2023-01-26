import { useState } from "react";
import Cell from "./components/Cell";
import solve from "./functions";

function App() {
  const [numberList, setNumberList] = useState(Array(81).fill(0));

  const formatList = (unsolvedSudoku) => {
    let formatUnsolved = [];
    for (let i = 0; i < 9; i++) {
      formatUnsolved.push(unsolvedSudoku.slice(i * 9, i * 9 + 9));
    }
    return formatUnsolved;
  };

  const handleSolve = () => {
    let formattedUnsolved = formatList([...numberList]);
    solve(formattedUnsolved);
    let formattedSolved = formattedUnsolved.reduce((acc, el) => {
      acc = [...acc, ...el];
      return acc;
    }, []);
    setNumberList(formattedSolved);
  };

  const handleReset = () => {
    setNumberList(Array(81).fill(0));
  };

  return (
    <div>
      <h1>Enter the Sudoku to Solve</h1>
      <div className="container">
        {numberList?.map((num, index) => (
          <Cell
            num={num}
            numberList={numberList}
            setNumberList={setNumberList}
            index={index}
          />
        ))}
      </div>
      <div className="buttonDiv">
        <button onClick={handleSolve}>Solve</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
