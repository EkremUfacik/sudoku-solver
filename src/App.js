import { useState } from "react";
import Cell from "./components/Cell";
import solve from "./functions";

// useEffect(() => {
//   setNumberList(Array(81).fill(0));
// }, []);

function App() {
  const [numberList, setNumberList] = useState(Array(81).fill(0));

  const formatList = (solvedList) => {
    let formList = [];
    for (let i = 0; i < 9; i++) {
      formList.push(solvedList.slice(i * 9, i * 9 + 9));
    }
    return formList;
  };

  const handleSolve = () => {
    let format = formatList([...numberList]);
    solve(format);
    console.log(format);
    let result = format.reduce((acc, el) => {
      acc = [...acc, ...el];
      return acc;
    }, []);
    setNumberList(result);
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
      </div>
    </div>
  );
}

export default App;
