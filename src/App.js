import React, { Component } from 'react';
import Hello from './Hello';
import World from './World';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0}

    this.handleClickPlus = this.handleClickPlus.bind(this);
    this.handleClickMinus = this.handleClickMinus.bind(this);
  }

  handleClickPlus() {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleClickMinus() {
    this.setState({
      count: this.state.count - 1
    })
  }


  render() {
    const items = [{id: 1, name: "one"}, {id: 2, name: "two"}]
    return (
      <div>
        <Hello handleClickPlus={this.handleClickPlus} handleClickMinus={this.handleClickMinus}/>
        <World name="29" />
        <Item item={items} />
        <h3>{this.state.count}</h3>
      </div>
    );
  }
}

export default App;
