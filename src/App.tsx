import React, { useState } from "react";
import logo from "./logo.svg";

import "./App.css";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { setStudentDetails } from "./features/Quizapp/studentDetailsSlice";
import { RootState } from "./app/store";

interface StudentDetails {
  name: string;
  email: string;
  phone: string;
  language: string;
}

function App() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [details, setDetails] = useState<StudentDetails>({
    name: "",
    email: "",
    phone: "",
    language: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSelectChange = (event: any) => {
    const value = event.target.value as string;
    setDetails({ ...details, language: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(details);
    // setContextDetails(details);
    navigate("/tfq");

    dispatch(setStudentDetails(details));
    // eslint-disable-next-line react-hooks/rules-of-hooks
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      style={{ backgroundColor: "#E6E6FA" }} // Pastel Purple Color
    >
      <Card sx={{ maxWidth: 400, p: 4 }}>
        <Typography variant="h4" align="center" sx={{ color: "#673ab7" }}>
          Quiz App
        </Typography>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={details.name}
            onChange={handleInputChange}
            sx={{ background: "white" }}
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={details.email}
            onChange={handleInputChange}
            sx={{ background: "white" }}
          />
          <TextField
            label="Phone"
            variant="outlined"
            type="tel"
            name="phone"
            value={details.phone}
            onChange={handleInputChange}
            sx={{ background: "white" }}
          />
          <FormControl variant="outlined" sx={{ background: "white" }}>
            <InputLabel id="languagelabel">Language</InputLabel>
            <Select
              label="Language"
              labelId="languagelabel"
              name="language"
              value={details.language}
              onChange={handleSelectChange}
              sx={{ background: "white" }}
            >
              <MenuItem value="JavaScript">JavaScript</MenuItem>
              <MenuItem value="React">React</MenuItem>
              <MenuItem value="TypeScript">TypeScript</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={
              details.email === "" ||
              details.language === "" ||
              details.name === "" ||
              details.phone === ""
            }
            sx={{ backgroundColor: "#673ab7" }}
          >
            Start
          </Button>
        </form>
      </Card>
    </Box>
  );
}

export default App;
