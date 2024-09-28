interface Question {
  tf: { q: string; a: boolean };
  fib: { q: string; a: string };
  mcq: { q: string; o: string[]; a: string };
  ms: { q: string; o: string[]; a: string[] };
  mtf: { lo: { id: string; text: string }[]; ro: { id: string; text: string }[]; co: { id: string; text: string }[] };
}


const questions:Question[] = [
  {
    tf: { q: "Is React a programming language?", a: true },
    fib: {
      q: "React uses a virtual _________ to efficiently update the DOM.",
      a: "Virtual DOM",
    },
    mcq: {
      q: "What function is used to render a React component to the DOM?",
      o: [
        "ReactDOM.render()",
        "React.renderComponent()",
        "React.render()",
        "DOM.renderComponent()",
      ],
      a: "ReactDOM.render()",
    },
    ms: {
      q: "Which of the following are core concepts or features of React? (Select all that apply)",
      o: [
        "Virtual DOM",
        "JSX",
        "Redux",
        "Component Lifecycle",
        "JavaScript ES6 classes",
      ],
      a: ["Virtual DOM", "JSX", "Component Lifecycle"],
    },

    mtf: {
      lo: [
        { id: "1", text: "Component" },
        { id: "2", text: "Props" },
        { id: "3", text: "State" },
        { id: "4", text: "Virtual DOM" },
        { id: "5", text: "Lifecycle Methods" },
      ],

      ro: [
        { id: "1", text: "Library" },
        { id: "2", text: "Data Passing" },
        { id: "3", text: "Internal Data" },
        { id: "4", text: "Lightweight Representation" },
        { id: "5", text: "Reusable Code" },
      ],

      co: [
        { id: "5", text: "Reusable Code" },
        { id: "2", text: "Data Passing" },
        { id: "3", text: "Internal Data" },
        { id: "4", text: "Lightweight Representation" },
        { id: "1", text: "Library" },
      ],
    },
  },
  {
    // JavaScript questions
    tf: { q: "Is JavaScript a statically typed language?", a: false },
    fib: {
      q: "What keyword is used to declare a variable in JavaScript?",
      a: "var",
    },
    mcq: {
      q: "Which of the following is a primitive data type in JavaScript?",
      o: ["object", "array", "string", "function"],
      a: "string",
    },
    ms: {
      q: "Select the correct ways to define a function in JavaScript. (Select all that apply)",
      o: [
        "function foo() {}",
        "const bar = function() {}",
        "class Baz {}",
        "let qux = () => {}",
      ],
      a: ["function foo() {}", "const bar = function() {}"],
    },
    mtf: {
      lo: [
        { id: "1", text: "Function Declaration" },
        { id: "2", text: "Variable Declaration" },
        { id: "3", text: "Array" },
        { id: "4", text: "Object" },
        { id: "5", text: "String" },
      ],
      ro: [
        { id: "1", text: "Loosely Typed" },
        { id: "2", text: "ES6 Arrow Function" },
        { id: "3", text: "Primitive Data Type" },
        { id: "4", text: "Key-Value Pairs" },
        { id: "5", text: "Indexed Collection" },
      ],
      co: [
        { id: "5", text: "Indexed Collection" },
        { id: "2", text: "ES6 Arrow Function" },
        { id: "1", text: "Loosely Typed" },
        { id: "3", text: "Primitive Data Type" },
        { id: "4", text: "Key-Value Pairs" },
      ],
    },
  },
  {
    // TypeScript questions
    tf: { q: "Is TypeScript a superset of JavaScript?", a: true },
    fib: {
      q: "What keyword is used to define a type in TypeScript?",
      a: "type",
    },
    mcq: {
      q: "Which of the following is a benefit of using TypeScript?",
      o: [
        "Static typing",
        "Dynamic typing",
        "TypeScript is slower",
        "TypeScript lacks tooling support",
      ],
      a: "Static typing",
    },
    ms: {
      q: "Select the correct ways to define a class in TypeScript. (Select all that apply)",
      o: [
        "class Foo {}",
        "const bar = class {}",
        "interface Baz {}",
        "let qux: class {}",
      ],
      a: ["class Foo {}", "const bar = class {}"],
    },
    mtf: {
      lo: [
        { id: "1", text: "Type" },
        { id: "2", text: "Interface" },
        { id: "3", text: "Class" },
        { id: "4", text: "Enum" },
        { id: "5", text: "Union Type" },
      ],
      ro: [
        { id: "1", text: "Type Definition" },
        { id: "2", text: "Object Shape" },
        { id: "3", text: "Value Definition" },
        { id: "4", text: "Enum Values" },
        { id: "5", text: "Combining Types" },
      ],

      co: [
        { id: "1", text: "Type Definition" },
        { id: "2", text: "Object Shape" },
        { id: "3", text: "Value Definition" },
        { id: "4", text: "Enum Values" },
        { id: "5", text: "Combining Types" },
      ],
    },
  },
];

export default questions;
