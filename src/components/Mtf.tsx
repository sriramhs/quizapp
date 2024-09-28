import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Button,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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

type Option = {
  id: string;
  text: string;
};

const DraggableOption: React.FC<{
  option: Option;
  onDrop: (sourceId: string, targetId: string) => void;
}> = ({ option, onDrop }) => {
  const [, ref] = useDrag({
    type: "OPTION",
    item: { id: option.id, text: option.text },
  });

  const [, drop] = useDrop({
    accept: "OPTION",
    drop: (item: { id: string }) => onDrop(item.id, option.id),
  });

  const optionStyle = {
    padding: "10px",
    margin: "10px",
    backgroundColor: "#f5f5f5",
    cursor: "pointer",
  };

  return (
    <div ref={(node) => ref(drop(node))} style={optionStyle}>
      {option.text}
    </div>
  );
};

const Mtf: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  dispatch(setPage(3));

  const [lan, setLan] = useState(0);

  const data = useSelector((state: RootState) => state.studentDetails);
  const language = data.language;
  console.log(data);

  useEffect(() => {
    if (language === "React") {
      setLan(0);
    } else if (language === "JavaScript") {
      setLan(1);
    } else {
      setLan(2);
    }
  }, [language]);

  const [leftOptions, setLeftOptions] = useState<Option[]>([]);

  const [rightOptions, setRightOptions] = useState<Option[]>([]);

  useEffect(() => {
    if (lan === 0) {
      setLeftOptions(questions[0].mtf?.lo);

      setRightOptions(questions[0].mtf?.ro);
    } else if (lan === 1) {
      setLeftOptions(questions[1].mtf?.lo);

      setRightOptions(questions[1].mtf?.ro);
    } else {
      setLeftOptions(questions[2].mtf?.lo);

      setRightOptions(questions[2].mtf?.ro);
    }
  }, [lan]);

  const handleRightDrop = (sourceId: string, targetId: string) => {
    const sourceIndex = rightOptions.findIndex(
      (option) => option.id === sourceId
    );
    const targetIndex = rightOptions.findIndex(
      (option) => option.id === targetId
    );

    if (sourceIndex !== -1 && targetIndex !== -1) {
      const newRightOptions = [...rightOptions];
      [newRightOptions[sourceIndex], newRightOptions[targetIndex]] = [
        newRightOptions[targetIndex],
        newRightOptions[sourceIndex],
      ];
      setRightOptions(newRightOptions);
      localStorage.setItem("rightOptions", JSON.stringify(newRightOptions));
    }

    const areAnswersCorrect =
      JSON.stringify(rightOptions) === JSON.stringify(questions[lan].mtf.co);
    const newRight = [...data.right];
    const newDone = [...data.done];
    newDone[2] = true;
    if (areAnswersCorrect) {
      newRight[2] = true;
    } else {
      newRight[2] = false;
    }
    dispatch(setDone(newDone));
    dispatch(setRight(newRight));
  };

  const checkAnswers = () => {
    navigate("/mcq");
  };
  const goPrev = () => {
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
      <DndProvider backend={HTML5Backend}>
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
          <Typography variant="h5">Match the Following:</Typography>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              {leftOptions.map((option) => (
                <DraggableOption
                  key={option.id}
                  option={option}
                  onDrop={() => {}}
                />
              ))}
            </Grid>
            <Grid item xs={6}>
              {rightOptions.map((option) => (
                <DraggableOption
                  key={option.id}
                  option={option}
                  onDrop={handleRightDrop}
                />
              ))}
            </Grid>
          </Grid>
          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <Button variant="contained" color="primary" onClick={goPrev}>
              Previous
            </Button>
            <Button variant="contained" color="primary" onClick={checkAnswers}>
              Next
            </Button>
          </Box>
        </Box>
      </DndProvider>
    </ThemeProvider>
  );
};

export default Mtf;
