import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";

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
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;
