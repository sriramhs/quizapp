import React, { useEffect, useState } from "react";
import { Button, Card, Typography, TextField, Box, Alert } from "@mui/material";
import Bar from "./Bar";
import questions from "../qanda";
import { useNavigate } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  setDone,
  setPage,
  setRight,
} from "../features/Quizapp/studentDetailsSlice";
import { RootState } from "../app/store";

const Fib = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  dispatch(setPage(5));
  const data = useSelector((state: RootState) => state.studentDetails);
  const [x, setLan] = useState(0);

  useEffect(() => {
    if (data?.language === "React") {
      setLan(0);
    } else if (data?.language === "JavaScript") {
      setLan(1);
    } else if (data?.language === "TypeScript") {
      setLan(2);
    }
  }, []);

  const [userAnswer, setUserAnswer] = useState(
    localStorage.getItem("fib") || ""
  );

  useEffect(() => {
    localStorage.setItem("fib", userAnswer);
    if (userAnswer === "") {
      const newDone = [...data.done];
      newDone[4] = false;
      dispatch(setDone(newDone));
    } else {
      const newRight = [...data.right];
      const newDone = [...data.done];
      newDone[4] = true;
      if (userAnswer === questions[x].fib?.a) {
        newRight[4] = true;
        console.log("fib works");
      } else {
        newRight[4] = false;
      }
      dispatch(setDone(newDone));
      dispatch(setRight(newRight));
    }
  }, [userAnswer]);

  const handleAnswer = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUserAnswer(event.target.value);
  };

  const handleSubmit = () => {
    navigate("/report");
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#673ab7", // Pastel Purple
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Bar />
      <Box
        height="89vh"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#E6E6FA",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "50%",
            p: 3,
            mt: 3,
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">{questions[x].fib?.q}</Typography>
          <form style={{ margin: 20 }}>
            <TextField
              label="Your Answer"
              variant="outlined"
              value={userAnswer}
              onChange={handleAnswer}
            />
            <Box sx={{ marginTop: 2 }}>
              <Button variant="contained" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Box>
          </form>
          <Alert severity="info" sx={{ maxWidth: "50%", alignSelf: "center" }}>
            Once you submit you cannot go back
          </Alert>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default Fib;
