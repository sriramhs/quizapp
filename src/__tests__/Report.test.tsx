import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import Report from "../components/Report";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const initialState = {
  studentDetails: {
    name: "Sriram",
    email: "sriram@gmail.com",
    phone: "9999929219",
    language: "React",
    done: [true, true, true, true, true],
    right: [false, false, false, false, false],
    page: 3,
  },
};

const store = configureStore({
  reducer: {
    studentDetails: (state = initialState.studentDetails, action) => state,
    setDone: (state = initialState.studentDetails.done, action) => state,
    setRight: (state = initialState.studentDetails.right, action) => state,
    setPage: (state = initialState.studentDetails.page, action) => state,
  },
});

const mockNav = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNav,
}));

describe("report testing", () => {
  test("renders everything", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Report />
        </Provider>
      </MemoryRouter>
    );

    const submitButton = screen.getByText("Retake Test");
    fireEvent.click(submitButton);
  });
});
