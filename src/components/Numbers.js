import React, { useEffect, useState } from "react";
import { HStack, VStack, View } from "native-base";
import { Button } from "react-bootstrap";
import { useCalc } from "../context/CalcContext";

function Numbers({ colorMode }) {
  const {
    num1,
    setNum1,
    result,
    setResult,
    num2,
    setNum2,
    operator,
    isOperator,
    setOperator,
    setIsOperator,
    history,
    setHistory,
    combined,
    setCombined,
  } = useCalc();
  const [isResult, setIsResult] = useState(false);

  let fontColor =
    colorMode === "light" ? "rgba(55, 55, 55, 1)" : "rgba(251, 251, 251, 1)";
  let bgColor =
    colorMode === "light" ? "rgba(255, 255, 255, 0.3)" : "rgba(5, 5, 5, 0.4)";

  const btn = {
    textDecoration: "none",
    color: fontColor,
    fontWeight: "600",
    fontSize: "26px",
    active: "none",
    width: "70px",
    height: "70px",
    fontFamily: "Poppins, sans-serif",
    fontStyle: "semi-bold",
    lineHeight: "39px",
    letterSpacing: "0em",
    textAlign: "center",
  };

  const num = {
    width: "70px",
    height: "70px",
    margin: "9px",
    marginLeft: "20px",
    borderRadius: "40px",
    backgroundColor: bgColor,
    boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.05)",
  };
  const equal = {
    width: "70px",
    height: "70px",
    borderRadius: "40px",
    backgroundColor: bgColor,
  };
  useEffect(() => {
    if (isOperator) {
      setNum1(result);
      setNum2(0);
    }
  }, [result]);

  useEffect(() => {
    handleFunction("AC");
  }, []);

  useEffect(() => {
    if (isResult && num2 !== 0) {
      if (history.length == 3) {
        history.shift();
      }
      setHistory([
        ...history,
        {
          id: history.length + 1,
          combine: combined,
          result: result,
        },
      ]);
      setNum1(0);
      setNum2(0);
      setOperator("");
      setIsOperator(false);
      setCombined([]);
    }
  }, [isResult]);

  const handleNumber = (value) => {
    setIsResult(false);
    if (isResult) {
      setNum1(value);
      setNum2(0);
      setResult(0);
      setOperator("");
      setIsOperator(false);
      setCombined([]);
    }

    if (result !== 0 && !isOperator) {
      return;
    }
    if (!isOperator) {
      if (num1 === 0) {
        if (value === ".") {
          setNum1("0.");
        } else setNum1(value);
      } else {
        if (value === "." && num1.toString().includes(".")) {
          return;
        } else {
          setNum1(num1 + "" + value);
        }
      }
    } else {
      if (num2 === 0) {
        if (value === ".") {
          setNum2("0.");
        } else setNum2(value);
      } else {
        if (value === "." && num2.toString().includes(".")) {
          return;
        } else {
          setNum2(num2 + "" + value);
        }
      }
    }
  };
  const handleFunction = (value) => {
    if (value === "AC") {
      setNum1(0);
      setNum2(0);
      setResult(0);
      setOperator("");
      setIsOperator(false);
      setCombined([]);
    } else if (value === "+/-") {
      if (!isOperator) {
        setNum1(num1 * -1);
      } else {
        setNum2(num2 * -1);
      }
    } else if (value === "%") {
      if (!isOperator) {
        setNum1(num1 / 100);
      } else {
        setNum2(num2 / 100);
      }
    }
  };

  const handleResult = () => {
    if (operator === "+") {
      setResult(parseFloat(num1) + parseFloat(num2));
    } else if (operator === "-") {
      setResult(parseFloat(num1) - parseFloat(num2));
    } else if (operator === "x") {
      setResult(parseFloat(num1) * parseFloat(num2));
    } else if (operator === "÷") {
      setResult(parseFloat(num1) / parseFloat(num2));
    }
    if (combined.length !== 0) {
      setCombined([...combined, operator + " " + num2 + " "]);
    } else {
      setCombined([num1 + " " + operator + " " + num2 + " "]);
    }
  };
  return (
    <div>
      <HStack>
        <VStack>
          <HStack
            style={{
              width: "260px",
              height: "70px",
              margin: "20px",
              borderRadius: "40px",
              backgroundColor: bgColor,
            }}
            justifyContent={"space-between"}
            paddingLeft={3}
            paddingRight={3}
          >
            {["AC", "+/-", "%"].map((item, index) => {
              return (
                <Button
                  style={btn}
                  variant="link"
                  key={index}
                  onClick={() => {
                    handleFunction(item);
                  }}
                >
                  {item}
                </Button>
              );
            })}
          </HStack>
          <HStack>
            <VStack>
              {[1, 4, 7, "."].map((number, index) => (
                <HStack style={num} key={index}>
                  <Button
                    variant="link"
                    style={btn}
                    onClick={() => {
                      handleNumber(number);
                    }}
                  >
                    {number}
                  </Button>
                </HStack>
              ))}
            </VStack>
            <VStack>
              {[2, 5, 8, 0].map((number, index) => (
                <HStack style={num} key={index}>
                  <Button
                    variant="link"
                    style={btn}
                    onClick={() => {
                      handleNumber(number);
                    }}
                  >
                    {number}
                  </Button>
                </HStack>
              ))}
            </VStack>
            <VStack>
              {[3, 6, 9, "00"].map((number, index) => (
                <HStack style={num} key={index}>
                  <Button
                    variant="link"
                    style={btn}
                    onClick={() => {
                      handleNumber(number);
                    }}
                  >
                    {number}
                  </Button>
                </HStack>
              ))}
            </VStack>
          </HStack>
        </VStack>
        <VStack
          style={{
            width: "70px",
            height: "435px",
            margin: "20px",
            borderRadius: "40px",
            backgroundColor: bgColor,
          }}
          justifyContent={"space-between"}
        >
          {["÷", "x", "-", "+"].map((item, index) => {
            return (
              <Button
                style={btn}
                variant="link"
                key={index}
                onClick={() => {
                  if (num1 === 0) {
                    if (result !== 0) {
                      setNum1(result);
                      setNum2(0);
                      setOperator(item);
                      setIsOperator(true);
                      setIsResult(false);
                    } else return;
                  }
                  if (num1 !== 0 && num2 !== 0) {
                    handleResult();
                  }
                  if (result !== 0) {
                    setNum1(result);
                    setNum2(0);
                  }
                  setIsOperator(true);
                  setOperator(item);
                }}
              >
                {item}
              </Button>
            );
          })}

          <View style={equal}>
            <Button
              variant="link"
              style={btn}
              onClick={() => {
                if (num2 === 0) return;
                setIsOperator(false);
                handleResult();
                setIsResult(true);
              }}
            >
              =
            </Button>
          </View>
        </VStack>
      </HStack>
    </div>
  );
}

export default Numbers;
