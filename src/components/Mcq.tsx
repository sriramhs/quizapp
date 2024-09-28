import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Bar from "./Bar";
import questions from "../qanda";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setDone,
  setPage,
  setRight,
} from "../features/Quizapp/studentDetailsSlice";
import { RootState } from "../app/store";

export default function Mcq() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  dispatch(setPage(4));

  const data = useSelector((state: RootState) => state.studentDetails);

  const [language, setLan] = useState(0);

  useEffect(() => {
    if (data?.language === "React") {
      setLan(0);
    } else if (data?.language === "JavaScript") {
      setLan(1);
    } else if (data.language === "TypeScript") {
      setLan(2);
    }
  }, []);

  const [selectedAnswer, setSelectedAnswer] = useState<string>(
    localStorage.getItem("selectedAnswerMcq") || ""
  );

  // Update local storage whenever selectedAnswer changes
  useEffect(() => {
    localStorage.setItem("selectedAnswerMcq", selectedAnswer);
    if (selectedAnswer !== "") {
      const newDone = [...data?.done];
      newDone[3] = true;
      dispatch(setDone(newDone));
    }
  }, [selectedAnswer]);

  const handleAnswer = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedAnswer(event.target.value);
    const newRight = [...data?.right];

    if (selectedAnswer === questions[language].mcq?.a) {
      newRight[3] = true;
    } else {
      newRight[3] = false;
    }

    dispatch(setRight(newRight));
  };

  const handleSubmit = () => {
    navigate("/fib");
  };

  const goPrev = () => {
    navigate("/mtf");
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
            p: 10,
            mt: 3,
            pl: 10,
            textAlign: "left",
            position: "relative",
          }}
        >
          <Typography variant="h5">{questions[language].mcq?.q}</Typography>
          <FormControl component="fieldset">
            <RadioGroup
              value={selectedAnswer}
              onChange={handleAnswer}
              sx={{ pl: 2 }}
            >
              {questions[language].mcq?.o?.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" onClick={goPrev}>
              Prev
            </Button>
            <Button variant="contained" onClick={handleSubmit}>
              Next
            </Button>
          </Box>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
