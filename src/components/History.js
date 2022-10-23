import React from "react";
import IconButton from "@mui/material/IconButton";
import Popper from "@mui/material/Popper";
import Box from "@mui/material/Box";
import { Center, Text } from "native-base";
import { useCalc } from "../context/CalcContext";
import { ReactComponent as HistoryIcon } from "../assets/history.svg";
import { ReactComponent as HistoryDarkIcon } from "../assets/historyDark.svg";

function History({ colorMode }) {
  const { history } = useCalc();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <div>
      <IconButton aria-label="delete" size="small" onClick={handleClick}>
        {colorMode === "light" ? (
          <HistoryIcon
            fontSize="large"
            sx={
              colorMode === "light"
                ? {
                    color: "rgba(55, 55, 55, 0.8)",
                  }
                : {
                    color: "rgba(251, 251, 251, 1)",
                  }
            }
          />
        ) : (
          <HistoryDarkIcon
            fontSize="large"
            sx={
              colorMode === "light"
                ? {
                    color: "rgba(55, 55, 55, 0.8)",
                  }
                : {
                    color: "rgba(251, 251, 251, 1)",
                  }
            }
          />
        )}
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-end">
        <Box
          sx={{
            width: 370,
            height: 110,
            marginTop: 4,
            borderRadius: 7,
            p: 1,
            background:
              colorMode === "light"
                ? "rgba(169, 220, 253, 0.2)"
                : "rgba(0, 54, 97, 0.2)",
          }}
        >
          <Center>
            <Text fontSize={20}>
              {history.map((item, index) => (
                <div key={index}>
                  {item.combine !== 0 && item.result !== ""
                    ? item.combine.join("") + " = "
                    : ""}
                  {item.result.toString().length > 5
                    ? item.result.toPrecision(5)
                    : item.result}
                </div>
              ))}
            </Text>
          </Center>
        </Box>
      </Popper>
    </div>
  );
}

export default History;
