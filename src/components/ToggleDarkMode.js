import React from "react";
import { HStack, useColorMode, View } from "native-base";
import SwitchSelector from "react-switch-selector";
import { ReactComponent as MoonIcon } from "../assets/moon.svg";
import { ReactComponent as MoonDarkIcon } from "../assets/moonDark.svg";
import { ReactComponent as SunIcon } from "../assets/sun.svg";
import { ReactComponent as SunDarkIcon } from "../assets/sunDark.svg";

function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  const options = [
    {
      label:
        colorMode === "light" ? (
          <SunIcon
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
        ) : (
          <SunDarkIcon
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
      label:
        colorMode === "light" ? (
          <MoonIcon
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
        ) : (
          <MoonDarkIcon
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
          selectionIndicatorMargin={-2}
        />
      </View>
    </HStack>
  );
}

export default ToggleDarkMode;
