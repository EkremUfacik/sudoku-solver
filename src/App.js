import { useState } from "react";
import Cell from "./components/Cell";
import solve from "./functions";

function App() {
  const [numberList, setNumberList] = useState(Array(81).fill(0));
  const [error, setError] = useState(false);

  const formatList = (unsolvedSudoku) => {
    let formatUnsolved = [];
    for (let i = 0; i < 9; i++) {
      formatUnsolved.push(unsolvedSudoku.slice(i * 9, i * 9 + 9));
    }
    return formatUnsolved;
  };

  const handleSolve = () => {
    setError(false);
    let formattedUnsolved = formatList([...numberList]);
    solve(formattedUnsolved);
    let formattedSolved = formattedUnsolved.reduce((acc, el) => {
      acc = [...acc, ...el];
      return acc;
    }, []);
    console.log("ee");
    console.log(formattedSolved);
    if (formattedSolved.includes(0)) {
      setError(true);
      setNumberList(Array(81).fill(0));
    } else {
      setNumberList(formattedSolved);
    }
  };

  const handleReset = () => {
    setNumberList(Array(81).fill(0));
    setError(false);
  };

  return (
    <div>
      <h1>Enter the Sudoku to Solve</h1>
      {error && <p className="error">Entered sudoku is invalid</p>}

      <Cell numberList={numberList} setNumberList={setNumberList} />

      <div className="buttonDiv">
        <button onClick={handleSolve}>Solve</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
