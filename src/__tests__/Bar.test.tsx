import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import Bar from "../components/Bar";
// import * as MyContextModule from "../MyContext";
import { Provider } from "react-redux";
import { PayloadAction, configureStore } from "@reduxjs/toolkit";
import { StudentDetails } from "../features/Quizapp/studentDetailsSlice";

const initialState = {
  studentDetails: {
    name: "Sriram",
    email: "sriram@gmail.com",
    phone: "9999929219",
    language: "React",
    done: [true, true, true, true, true],
    right: [false, false, false, false, false],
    page: 1,
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

const initialState1 = {
  studentDetails: {
    name: "Sriram",
    email: "sriram@gmail.com",
    phone: "9999929219",
    language: "JavaScript",
    done: [true, true, false, true, true],
    right: [false, false, false, false, false],
    page: 2,
  },
};

const store1 = configureStore({
  reducer: {
    studentDetails: (state = initialState1.studentDetails, action) => state,
    setDone: (state = initialState1.studentDetails.done, action) => state,
    setRight: (state = initialState1.studentDetails.right, action) => state,
    setPage: (state = initialState1.studentDetails.page, action) => state,
  },
});

const initialState2 = {
  studentDetails: {
    name: "Sriram",
    email: "sriram@gmail.com",
    phone: "9999929219",
    language: "TypeScript",
    done: [true, true, false, true, true],
    right: [false, false, false, false, false],
    page: 3,
  },
};

const store2 = configureStore({
  reducer: {
    studentDetails: (state = initialState2.studentDetails, action) => state,
    setDone: (state = initialState2.studentDetails.done, action) => state,
    setRight: (state = initialState2.studentDetails.right, action) => state,
    setPage: (state = initialState2.studentDetails.page, action) => state,
  },
});

const initialState3 = {
  studentDetails: {
    name: "Sriram",
    email: "sriram@gmail.com",
    phone: "9999929219",
    language: "TypeScript",
    done: [true, true, false, true, true],
    right: [false, false, false, false, false],
    page: 5,
  },
};

const store3 = configureStore({
  reducer: {
    studentDetails: (state = initialState3.studentDetails, action) => state,
    setDone: (state = initialState3.studentDetails.done, action) => state,
    setRight: (state = initialState3.studentDetails.right, action) => state,
    setPage: (state = initialState3.studentDetails.page, action) => state,
  },
});

const initialState4 = {
  studentDetails: {
    name: "Sriram",
    email: "sriram@gmail.com",
    phone: "9999929219",
    language: "TypeScript",
    done: [true, true, false, true, true],
    right: [false, false, false, false, false],
    page: 4,
  },
};

const store4 = configureStore({
  reducer: {
    studentDetails: (state = initialState4.studentDetails, action) => state,
    setDone: (state = initialState4.studentDetails.done, action) => state,
    setRight: (state = initialState4.studentDetails.right, action) => state,
    setPage: (state = initialState4.studentDetails.page, action) => state,
  },
});

const mockNav = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNav,
}));

describe("bar test", () => {
  test("render Everything", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Bar />
        </Provider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("3"));
    fireEvent.click(screen.getByText("4"));
    fireEvent.click(screen.getByText("5"));
  });

  test("render second", () => {
    render(
      <MemoryRouter>
        <Provider store={store2}>
          <Bar />
        </Provider>
      </MemoryRouter>
    );
  });

  test("render first", () => {
    render(
      <MemoryRouter>
        <Provider store={store1}>
          <Bar />
        </Provider>
      </MemoryRouter>
    );
  });

  test("render fourth", () => {
    render(
      <MemoryRouter>
        <Provider store={store3}>
          <Bar />
        </Provider>
      </MemoryRouter>
    );
  });

  test("render third", () => {
    render(
      <MemoryRouter>
        <Provider store={store4}>
          <Bar />
        </Provider>
      </MemoryRouter>
    );
  });
});
