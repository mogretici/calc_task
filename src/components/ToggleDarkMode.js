import React from "react";
import { HStack, useColorMode } from "native-base";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import IconButton from "@mui/material/IconButton";

function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <IconButton
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
    </HStack>
  );
}

export default ToggleDarkMode;
