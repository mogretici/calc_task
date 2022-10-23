import { Box, VStack, useColorMode } from "native-base";
import React from "react";
import Monitor from "./components/Monitor";
import Numpad from "./components/Numpad";
import { CalcProvider } from "./context/CalcContext";

function App() {
  const { colorMode } = useColorMode();

  return (
    <CalcProvider>
      <Box bgColor="#E5E5E5" minHeight="100vh" justifyContent="center" px={4}>
        <VStack alignItems="center">
          <Box
            width={423}
            height={858}
            rounded="lg"
            overflow="hidden"
            borderRadius="40"
            style={
              colorMode === "light"
                ? {
                    background:
                      "linear-gradient(166.34deg, #FEFEFE 0%, #F9F9F9 12.84%, #F3F3F3 32.53%, #E5E5E5 100%)",
                  }
                : {
                    background:
                      "linear-gradient(166.34deg, #373737 0%, #252628 22.9%, #000309 100%)",
                  }
            }
          >
            <Monitor colorMode={colorMode} />
            <Numpad colorMode={colorMode} />
          </Box>
        </VStack>
      </Box>
    </CalcProvider>
  );
}

export default App;
