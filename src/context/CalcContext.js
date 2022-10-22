import { createContext, useState, useContext } from "react";

const CalcContext = createContext();

const CalcProvider = ({ children }) => {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("");
  const [isOperator, setIsOperator] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const values = {
    result,
    setResult,
    num1,
    setNum1,
    num2,
    setNum2,
    operator,
    setOperator,
    isOperator,
    setIsOperator,
    isResult,
    setIsResult,
  };
  return <CalcContext.Provider value={values}>{children}</CalcContext.Provider>;
};

const useCalc = () => useContext(CalcContext);
export { useCalc, CalcProvider };
