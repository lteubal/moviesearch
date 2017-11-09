import React, { Component } from 'react';
import search from '../search.png';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputText: ''
    };
  }
  onInputChange(value) {
    this.setState({inputText: value});
    this.props.onSearchTermChange(value);
  }
  render() {
    return (
      <div className="search0">
      
        <input className="search1" placeholder="Type the name of a movie to start..." value={this.state.inputText}
                      onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    );
  }
}
