import React, { useEffect } from "react";
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
  } = useCalc();
  let fontColor =
    colorMode === "light" ? "rgba(55, 55, 55, 1)" : "rgba(251, 251, 251, 1)";
  let bgColor =
    colorMode === "light" ? "rgba(255, 255, 255, 0.3)" : "rgba(5, 5, 5, 0.3)";

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
  const handleNumber = (value) => {
    if (value === ".") {
      if (isOperator) {
        if (num2.includes(".")) return;
        setNum2(num2 + value);
      } else {
        if (num1.includes(".")) return;
        setNum1(num1 + value);
      }
    } else if (num1 === 0) {
      setNum1(value);
    } else if (!isOperator) {
      setNum1(num1 + "" + value);
    } else if (isOperator && num2 === 0) {
      setNum2(value);
    } else if (isOperator) {
      setNum2(num2 + "" + value);
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
                    console.log(item);
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
                      console.log(number);
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
                      console.log(number);
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
                      console.log(number);
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
                  console.log(item);
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
                console.log("equal");

                if (operator === "+") {
                  setResult(parseFloat(num1) + parseFloat(num2));
                }
                if (operator === "-") {
                  setResult(parseFloat(num1) - parseFloat(num2));
                }
                if (operator === "x") {
                  setResult(parseFloat(num1) * parseFloat(num2));
                }
                if (operator === "÷") {
                  setResult(parseFloat(num1) / parseFloat(num2));
                }
                console.log(result);
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
