import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React",
    content: "React is a front end framework",
  },
  {
    title: "Why use React",
    content: "Because it is beautiful",
  },
  {
    title: "How to use React",
    content: "By creating compoonents",
  },
];

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "The shade of blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};

export default App;
