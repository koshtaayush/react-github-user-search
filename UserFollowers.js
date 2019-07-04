import React, { Component } from 'react';
import { render } from 'react-dom';
import './userfollowerstyle.css';

export default class UserFollowers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var flw_list = this.props.flw_users.map((x, i) =>
      <li className="section_item" key={i}>
        <img className="flw_img" src={x.avatar_url} />
        <p className="flw_1">{x.login}</p>
      </li>);

    if (this.props.flw_users.length == 0) {
      return (
        <div className="user_follower_section">
          <div className="followers_heading">User followers are:</div>
          <div className="section_item">The user does not have any followers.</div>
        </div>
      )
    } else {
      return (
        <div className="user_follower_section">
          <div className="followers_heading">User followers are</div>
          <ul><div>{flw_list}</div></ul>
        </div>
      )
    }
  }
}