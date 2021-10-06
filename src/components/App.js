import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Navbar from "./Navbar";
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
  { label: "Really Red", value: "red" },
  { label: "Money Green", value: "green" },
  { label: "Blue Skies", value: "blue" },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Navbar />
      <Route path={"/"}>
        <Accordion items={items} />
      </Route>
      <Route path={"/search"}>
        <Search />
      </Route>
      <Route path={"/translate"}>
        <Translate />
      </Route>
      <Route path={"/dropdown"}>
        <Dropdown
          options={options}
          whatFor={"colors"}
          selected={selected}
          onSelectChange={setSelected}
        />
      </Route>
    </div>
  );
};

export default App;
