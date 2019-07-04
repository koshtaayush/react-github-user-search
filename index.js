import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { BrowserRouter, Route } from 'react-router-dom';
import GithubSearch from './GithubSearch';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <BrowserRouter>
        <GithubSearch />
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
