import React, { Component } from 'react';

class Hello extends Component {
	render() {
		return (
			<div>
			  <span>Hello</span>
			  <button onClick={this.props.handleClickPlus}>+</button>
			  <button onClick={this.props.handleClickMinus}>-</button>
			</div>
		);
	}
}

export default Hello;