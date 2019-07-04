import React, { Component } from 'react';
import { render } from 'react-dom';
import './userrepostyle.css';

export default class UserRepos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var repolist = this.props.rep.map((x, i) =>
      <li className="section_item" key={i}>
        <a href={x.html_url}><p className="repo_1">{x.name}</p></a>
        <p>{x.description}</p>
      </li>);
    return (
      <div className="user_repo_section">
        <div className="repo_heading">User repos are :</div>
        <ul><div>{repolist}</div></ul>
      </div>
    )
  }
}