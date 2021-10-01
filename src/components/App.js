import React from "react";
import Accordion from "./Accordion";
import "./Accordion.css";

const items = [
  {
    title: "What is React",
    content: "React is a JavaScript Library for building user interfaces.",
  },
  {
    title: "Why use React",
    content: "React is a favorite js library for engineers",
  },
  {
    title: "How do you use React",
    content: "You use React by creating components",
  },
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
