import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useState } from "react";

export default function Bar() {
  const navigate = useNavigate();

  const contextDone = useSelector(
    (state: RootState) => state.studentDetails.done
  );
  const actPage = useSelector((state: RootState) => state.studentDetails.page);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#673ab7", // Pastel Purple
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#673ab7" }}>
          <Toolbar sx={{ alignSelf: "center", gap: 3 }}>
            <Button
              color="primary"
              sx={{
                backgroundColor:
                  actPage === 1
                    ? "#B6DCFE"
                    : contextDone[0]
                    ? "#ADF7B6"
                    : "transparent",
                color:
                  actPage === 1
                    ? "#004E64"
                    : contextDone[0]
                    ? "#004E64"
                    : "white",
                borderRadius: "25px",

                "&:hover": {
                  backgroundColor:
                    actPage === 1
                      ? "#B6DCFE"
                      : contextDone[0]
                      ? "#ADF7B6"
                      : "transparent",
                },
              }}
              onClick={() => {
                navigate("/tfq");
              }}
            >
              <strong>1</strong>
            </Button>
            <Button
              color="primary"
              sx={{
                backgroundColor:
                  actPage === 2
                    ? "#B6DCFE"
                    : contextDone[1]
                    ? "#ADF7B6"
                    : "transparent",
                color:
                  actPage === 2
                    ? "#004E64"
                    : contextDone[1]
                    ? "#004E64"
                    : "white",
                borderRadius: "25px",

                "&:hover": {
                  backgroundColor:
                    actPage === 2
                      ? "#B6DCFE"
                      : contextDone[1]
                      ? "#ADF7B6"
                      : "transparent",
                },
              }}
              onClick={() => {
                navigate("/ms");
              }}
            >
              <strong> 2</strong>
            </Button>
            <Button
              color="primary"
              sx={{
                backgroundColor:
                  actPage === 3
                    ? "#B6DCFE"
                    : contextDone[2]
                    ? "#ADF7B6"
                    : "transparent",
                color:
                  actPage === 3
                    ? "#004E64"
                    : contextDone[2]
                    ? "#004E64"
                    : "white",
                borderRadius: "25px",

                "&:hover": {
                  backgroundColor:
                    actPage === 3
                      ? "#B6DCFE"
                      : contextDone[2]
                      ? "#ADF7B6"
                      : "transparent",
                },
              }}
              onClick={() => {
                navigate("/mtf");
              }}
            >
              <strong>3</strong>
            </Button>
            <Button
              color="primary"
              sx={{
                backgroundColor:
                  actPage === 4
                    ? "#B6DCFE"
                    : contextDone[3]
                    ? "#ADF7B6"
                    : "transparent",
                color:
                  actPage === 4
                    ? "#004E64"
                    : contextDone[3]
                    ? "#004E64"
                    : "white",
                borderRadius: "25px",

                "&:hover": {
                  backgroundColor:
                    actPage === 4
                      ? "#B6DCFE"
                      : contextDone[3]
                      ? "#ADF7B6"
                      : "transparent",
                },
              }}
              onClick={() => {
                navigate("/mcq");
              }}
            >
              <strong>4</strong>
            </Button>
            <Button
              color="primary"
              sx={{
                backgroundColor:
                  actPage === 5
                    ? "#B6DCFE"
                    : contextDone[4]
                    ? "#ADF7B6"
                    : "transparent",
                color:
                  actPage === 5
                    ? "#004E64"
                    : contextDone[4]
                    ? "#004E64"
                    : "white",
                borderRadius: "25px",

                "&:hover": {
                  backgroundColor:
                    actPage === 5
                      ? "#B6DCFE"
                      : contextDone[4]
                      ? "#ADF7B6"
                      : "transparent",
                },
              }}
              onClick={() => {
                navigate("/fib");
              }}
            >
              <strong>5</strong>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
