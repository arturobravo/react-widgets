import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    id: 0,
    title: 'What is React?',
    content: 'React is a javascript framework'
  },
  {
    id: 1,
    title: 'Why use React?',
    content: 'Because is faster than others due to the VDOM and other things'
  },
  {
    id: 2,
    title: 'How do you use React?',
    content: 'By installing npm React libraries and start creating components'
  }
];
const dropdownOptions = [
  {
    label: 'this is color red',
    value: 'red',
    color: 'red'
  },
  {
    label: 'this is color green',
    value: 'green',
    color: 'green'
  },
  {
    label: 'a shade of blue',
    value: 'blue',
    color: 'blue'
  }
];


function App() {
  const [currentColor, setCurrentColor] = useState(dropdownOptions[0]);


  return (
    <div>
      <Header/>
      <Route path='/'>
        <Accordion items={items}/>
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown 
          label='Select a color'
          options={dropdownOptions} 
          selected={currentColor}
          onSelectedChange={setCurrentColor}
        />
      </Route>
      <Route path='/translate'>
      <Translate />
      </Route>
    </div>
  );
}

export default App;
