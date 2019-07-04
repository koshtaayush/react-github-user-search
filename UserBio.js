import React, { Component } from 'react';
import { render } from 'react-dom';
import './userbiostyle.css'

export default class UserBio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user_bio_section">
        <div className="section_item">
          <img className="img_class" src={this.props.img} />
        </div>
        <div className="section_item">
          Username : {this.props.u_name}
        </div>
        <div className="section_item">
          Score : {this.props.scr}
        </div>
      </div>
    )
  }

}