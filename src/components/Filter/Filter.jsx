import React, { Component } from 'react';

export class Filter extends Component {
  state = {
    filter: '',
  };
  handleInputChange = ({ target }) => {
    this.props.filterHandler(target.value.toLowerCase());
    this.setState({ filter: target.value });
  };
  render() {
    return (
      <input
        type="text"
        value={this.state.filter}
        onChange={this.handleInputChange}
      />
    );
  }
}

export default Filter;
