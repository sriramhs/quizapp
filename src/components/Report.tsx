import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import {
  setDone,
  setRight,
  setStudentDetails,
} from "../features/Quizapp/studentDetailsSlice";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Report() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const details = useSelector((state: RootState) => state.studentDetails);

  const boolArray = details.right;

  const trueCount = boolArray.filter((value: any) => value).length;
  const falseCount = boolArray.length - trueCount;

  const data = {
    labels: ["Correct Answers", "Wrong Answers"],
    datasets: [
      {
        label: "answers",
        data: [trueCount, falseCount],
        backgroundColor: [
          "rgba(0, 255, 0, 0.2)", // Green for true
          "rgba(255, 0, 0, 0.2)", // Red for false
        ],
        borderColor: ["rgba(0, 255, 0, 1)", "rgba(255, 0, 0, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const handleRetake = () => {
    dispatch(setStudentDetails({}));
    dispatch(setDone([false, false, false, false, false]));
    dispatch(setRight([false, false, false, false, false]));
    navigate("/");
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
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Card sx={{ width: 300 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
              <strong>Report</strong>
            </Typography>
            <Typography variant="subtitle1">
              <strong>Name:</strong> {details.name}
            </Typography>
            <Typography variant="subtitle1">
              <strong>Percentage:</strong>{" "}
              {((trueCount / boolArray.length) * 100).toFixed(2)}%
            </Typography>
            <Typography variant="subtitle1">
              Right Answers: {trueCount}
            </Typography>
            <Typography variant="subtitle1">
              Wrong Answers: {falseCount}
            </Typography>
            <Pie data={data} />
            <Button
              variant="contained"
              color="primary"
              onClick={handleRetake}
              sx={{ m: 3, ml: 8 }}
            >
              Retake Test
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </ThemeProvider>
  );
}
