import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Typography,
  Checkbox,
  FormControlLabel,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Bar from "./Bar";
import questions from "../qanda";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import {
  setDone,
  setPage,
  setRight,
} from "../features/Quizapp/studentDetailsSlice";

const Ms: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  dispatch(setPage(2));

  const [lan, setLan] = useState(0);

  const language = useSelector(
    (state: RootState) => state.studentDetails.language
  );

  const done = useSelector((state: RootState) => state.studentDetails.done);
  const right = useSelector((state: RootState) => state.studentDetails.right);

  useEffect(() => {
    if (language === "React") {
      setLan(0);
    } else if (language === "JavaScript") {
      setLan(1);
    } else if (language === "TypeScript") {
      setLan(2);
    }
  }, [language]);

  const [selectedOptions, setSelectedOptions] = useState<string[]>(() => {
    // Initialize with options from local storage, or an empty array if not found
    const storedOptions = localStorage.getItem("selectedOptionsMs");
    return storedOptions ? JSON.parse(storedOptions) : [];
  });

  const options = questions[lan].ms?.o;

  const handleAnswer = (value: string) => {
    const updatedOptions = [...selectedOptions];
    if (updatedOptions.includes(value)) {
      updatedOptions.splice(updatedOptions.indexOf(value), 1);
    } else {
      updatedOptions.push(value);
    }
    setSelectedOptions(updatedOptions);
    localStorage.setItem("selectedOptionsMs", JSON.stringify(updatedOptions));
  };

  useEffect(() => {
    if (selectedOptions.length > 0) {
      const newDone = [...done];
      newDone[1] = true;
      dispatch(setDone(newDone));
      const selectedOptionsSet = new Set(selectedOptions);
      const correctAnswerSet = new Set(questions[lan].ms.a);
      const newRight = [...right];

      if (setsHaveSameElements(selectedOptionsSet, correctAnswerSet)) {
        newRight[1] = true;
      } else {
        newRight[1] = false;
      }

      dispatch(setRight(newRight));
      console.log(selectedOptions);
    } else {
      const newDone = [...done];
      newDone[1] = false;
      dispatch(setDone(newDone));
    }
  }, [selectedOptions]);

  function setsHaveSameElements<T>(set1: Set<T>, set2: Set<T>): boolean {
    if (set1.size !== set2.size) {
      return false;
    }

    const arr1 = Array.from(set1);
    const arr2 = Array.from(set2);

    return arr1.every((item) => arr2.includes(item));
  }

  const handleSubmit = () => {
    navigate("/mtf");
  };
  const goPrev = () => {
    navigate("/tfq");
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
            pl: 5,
            textAlign: "left",
            position: "relative",
          }}
        >
          <Typography variant="h5">{questions[lan].ms?.q}</Typography>
          {options?.map((option) => (
            <div key={option}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleAnswer(option)}
                  />
                }
                label={option}
              />
            </div>
          ))}
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
};

export default Ms;
