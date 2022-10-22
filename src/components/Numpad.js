import { Box, View } from "native-base";
import React from "react";
import Numbers from "./Numbers";

function Numpad({ colorMode }) {
  return (
    <div>
      <Box
        justifyContent={"flex-start"}
        width={423}
        height={507}
        rounded="lg"
        overflow="hidden"
        borderRadius="20"
      >
        <View
          style={
            colorMode === "light"
              ? {
                  width: "1277.09px",
                  height: "862.29px",

                  left: "-628.35px",
                  top: "-58.02px",
                  background:
                    "linear-gradient(244.38deg, #9EE8FF 8.14%, #5ACEFF 27.9%, #79AFFF 56.94%, #2D5FDE 84.11%)",
                  transform: "rotate(-50deg)",
                  filter: "blur(302px)",
                  position: "absolute",
                }
              : {
                  width: "1277.09px",
                  height: "862.29px",

                  left: "-628.35px",
                  top: "-58.02px",
                  background:
                    "linear-gradient(244.38deg, #42869B 8.14%, #2A7DA1 27.9%, #224E91 56.94%, #00123F 84.11%)",
                  transform: "rotate(-15deg)",
                  filter: "blur(302px)",
                  position: "absolute",
                }
          }
        ></View>
        <Numbers colorMode={colorMode} />
      </Box>
    </div>
  );
}

export default Numpad;
