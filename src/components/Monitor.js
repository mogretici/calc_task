import React from "react";
import { Box, HStack, Text, VStack } from "native-base";
import History from "./History";
import ToggleDarkMode from "./ToggleDarkMode";
import { useCalc } from "../context/CalcContext";

function Monitor({ colorMode }) {
  const { result, num1, num2, operator, combined } = useCalc();

  return (
    <div>
      <Box justifyContent={"flex-start"} width={423} height={351}>
        <HStack justifyContent={"flex-end"} padding={5}>
          <HStack
            justifyContent={"space-between"}
            width={260}
            paddingTop={30}
            paddingRight={3}
          >
            <ToggleDarkMode colorMode={colorMode} />
            <History colorMode={colorMode} />
          </HStack>
        </HStack>
        <HStack>
          <VStack justifyContent={"flex-end"} h={260}>
            <HStack justifyContent={"flex-end"}>
              <Text
                fontFamily={"Poppins, sans-serif"}
                fontSize={22}
                fontWeight={500}
                color={
                  colorMode === "light"
                    ? "rgba(55, 55, 55, 0.5)"
                    : "rgba(251, 251, 251, 0.5)"
                }
                paddingRight={10}
              >
                {result === 0 && num1 != 0 ? parseFloat(num1) + " " : combined}

                {operator}

                {num2 !== 0 ? " " + parseFloat(num2) : " "}
              </Text>
            </HStack>

            <HStack
              justifyContent={"space-between"}
              w={"423"}
              padding={10}
              paddingTop={-5}
              color={
                colorMode === "light"
                  ? "rgba(55, 55, 55, 1)"
                  : "rgba(251, 251, 251, 1)"
              }
            >
              <Text
                fontSize={26}
                fontWeight={600}
                alignSelf={"center"}
                fontFamily={"Poppins, sans-serif"}
                paddingLeft={5}
              >
                =
              </Text>
              <Text
                fontSize={40}
                fontStyle={"normal"}
                fontWeight={600}
                fontFamily={"Poppins, sans-serif"}
              >
                {result.toString().length > 5
                  ? parseFloat(result).toPrecision(5)
                  : parseFloat(result)}
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </div>
  );
}

export default Monitor;
