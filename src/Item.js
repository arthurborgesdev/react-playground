import React, { Component } from 'react';

class Hello extends Component {
	render() {
		return (
			<ul>
			  {this.props.item.map(item =>
			  	<li>{item.id} = {item.name}</li>
			  )}
			</ul>
		);
	}
}

export default Hello;