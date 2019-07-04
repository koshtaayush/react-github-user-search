import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import LoadingPage from './LoadingPage';
import UserPage from './UserPage';
import { Link } from 'react-router-dom';
import './search.css';

export default class GithubSearch extends Component {
  constructor() {
    super();
    this.state = {
      username: ''
    }

    this.handleSubmmitButton = this.handleSubmmitButton.bind(this);
  }

  handleSubmmitButton() {
    this.setState({
      username: this.refs.username.value
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Github User Search</a>
          </div>
        </nav>
        <div className="navbar navbar-default">
          <input className="form-control" type="text" ref="username" placeholder="Enter username here" onChange={this.handleSubmmitButton} />
          <Link to={{ pathname: '/user', state: { usr: this.state.username } }}><button className="btn btn-primary">Search github</button></Link>
        </div>

        <main>
          <Route path="/" exact component={LoadingPage} />
          <Route path="/user" component={UserPage} />
        </main>
      </div>
    )
  }
}