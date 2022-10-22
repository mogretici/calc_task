import React from "react";
import IconButton from "@mui/material/IconButton";
import HistoryIcon from "@mui/icons-material/History";
function History({ colorMode }) {
  colorMode = colorMode === "light" ? "#373737CC" : "#FBFBFB";
  return (
    <div>
      <IconButton aria-label="delete" size="small" onClick={() => {}}>
        <HistoryIcon fontSize="large" sx={{ color: colorMode }} />
      </IconButton>
    </div>
  );
}

export default History;
