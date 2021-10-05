import React, { useState } from "react";
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
  { label: "Really Red", value: "red" },
  { label: "Money Green", value: "green" },
  { label: "Blue Skies", value: "blue" },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [ok, setOK] = useState(true);
  return (
    <div>
      <button onClick={() => setOK(!ok)}>show</button>
      {/* <Accordion items={items} />
      <Search /> */}
      {ok ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectChange={setSelected}
          whatFor={"Color"}
        />
      ) : null}
    </div>
  );
};

export default App;
