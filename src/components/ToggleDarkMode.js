import React from "react";
import { HStack, useColorMode, Box, View } from "native-base";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import IconButton from "@mui/material/IconButton";
import SwitchSelector from "react-switch-selector";
import { fontSize } from "@mui/system";

function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  const options = [
    {
      label: (
        <LightModeOutlinedIcon
          style={{ fontSize: 30 }}
          sx={
            colorMode === "light"
              ? {
                  color: "rgba(55, 55, 55, 0.8)",
                }
              : {
                  color: "rgba(251, 251, 251, 0.4)",
                }
          }
        />
      ),

      selectedBackgroundColor: "rgba(216, 238, 255, 1)",
      unSelectedBackgroundColor: "rgba(27, 106, 156, 1) ",
      innerHeight: 44,
      index: 0,
    },
    {
      label: (
        <BedtimeOutlinedIcon
          style={{ fontSize: 30 }}
          sx={
            colorMode === "light"
              ? {
                  color: "rgba(55, 55, 55, 0.8)",
                }
              : {
                  color: "rgba(251, 251, 251, 0.8)",
                }
          }
        />
      ),

      selectedBackgroundColor: "rgba(0, 54, 97, 1)",
      unSelectedBackgroundColor: "#A9DCFD",

      innerHeight: 44,
      index: 1,
    },
  ];

  const onChange = () => {
    toggleColorMode();
  };

  return (
    <HStack>
      {/* <IconButton
        aria-label="delete"
        size="small"
        onClick={() => {
          toggleColorMode();
        }}
      >
        {colorMode === "light" ? (
          <BedtimeOutlinedIcon
            fontSize="large"
            sx={{ color: "rgba(55, 55, 55, 0.8)" }}
          />
        ) : (
          <LightModeOutlinedIcon
            fontSize="large"
            sx={{ color: "rgba(251, 251, 251, 1)" }}
          />
        )}
      </IconButton>
       */}
      <View style={{ width: 122, height: 44 }}>
        <SwitchSelector
          onChange={onChange}
          options={options}
          initialSelectedIndex={1}
          backgroundColor={colorMode === "light" ? "#A9DCFD" : "#1B6A9C"}
          optionBorderRadius={40}
          wrapperBorderRadius={40}
          selectionIndicatorMargin={0}
        />
      </View>
    </HStack>
  );
}

export default ToggleDarkMode;
