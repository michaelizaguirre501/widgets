import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
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
const options = [
  { label: "The Color Red", value: "red" },
  { label: "The Color Green", value: "green" },
  { label: "A Shade Of Blue", value: "blue" },
];

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} />
      <Search /> */}
      <Dropdown options={options} />
    </div>
  );
};

export default App;
