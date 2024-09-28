// Tfq.tsx

import React, { useEffect, useState } from "react";
import { Button, Card, Typography, Box } from "@mui/material";
import Bar from "./Bar";
import questions from "../qanda";

import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import {
  setDone,
  setPage,
  setRight,
} from "../features/Quizapp/studentDetailsSlice";

const Tfq = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  dispatch(setPage(1));

  const language = useSelector(
    (state: RootState) => state.studentDetails.language
  );

  const done = useSelector((state: RootState) => state.studentDetails.done);
  const right = useSelector((state: RootState) => state.studentDetails.right);

  const [lan, setLan] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<any>(
    localStorage.getItem("selectedAnswerTfq") === "true"
  );

  useEffect(() => {
    if (language === "React") {
      setLan(0);
    } else if (language === "JavaScript") {
      setLan(1);
    } else {
      setLan(2);
    }
  }, [language]);

  const handleAnswer = (answer: boolean) => {
    setSelectedAnswer(answer);

    const newRight = [...right];
    const newDone = [...done];
    newDone[0] = true;
    if (selectedAnswer === questions[lan].tf?.a) {
      newRight[0] = true;
    } else {
      newRight[0] = false;
    }
    dispatch(setDone(newDone));
    dispatch(setRight(newRight));
  };

  const handleSubmit = () => {
    navigate("/ms");
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
            maxWidth: "50%",
            p: 3,
            mt: 3,
            textAlign: "center",
            position: "relative",
          }}
        >
          {" "}
          {/* Add position: relative */}
          <Typography variant="h5">{questions[lan].tf?.q}</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
            <Button
              variant={selectedAnswer === true ? "contained" : "outlined"}
              onClick={() => handleAnswer(true)}
            >
              True
            </Button>
            <Button
              variant={selectedAnswer === false ? "contained" : "outlined"}
              onClick={() => handleAnswer(false)}
            >
              False
            </Button>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Button variant="contained" onClick={handleSubmit}>
              Next
            </Button>
          </Box>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default Tfq;
