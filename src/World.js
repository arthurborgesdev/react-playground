import React, { Component } from 'react';

class World extends Component {
	render() {
		return <span>World + {this.props.name}</span>;
	}
}

export default World;