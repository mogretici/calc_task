import React from "react";
import { Box, HStack, Center, VStack } from "native-base";
import History from "./History";
import ToggleDarkMode from "./ToggleDarkMode";
import { useCalc } from "../context/CalcContext";

function Monitor({ colorMode }) {
  const { result, num1, num2 } = useCalc();

  return (
    <div>
      <Box justifyContent={"flex-start"} width={423} height={351}>
        <HStack space={4} justifyContent={"flex-end"} padding={3}>
          <HStack
            justifyContent={"space-between"}
            width={210}
            paddingTop={30}
            paddingRight={3}
          >
            <ToggleDarkMode colorMode={colorMode} />
            <History colorMode={colorMode} />
          </HStack>
        </HStack>
        <HStack>
          <VStack>
            {parseFloat(num1)}-{parseFloat(num2)} -{result}
          </VStack>
        </HStack>
      </Box>
    </div>
  );
}

export default Monitor;
