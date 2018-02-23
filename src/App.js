import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dropdown
          initialText='Selecteer een optie:'
          options={['Foo', 'Bar', 'Baz']}
          onSelect={(name, index) => {
            console.log(name, index);
          }} />
      </div>
    );
  }
}

export default App;
