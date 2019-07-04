import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import UserRepos from './UserRepos';
import UserBio from './UserBio';
import UserFollowers from './UserFollowers';
import './search.css';

export default class UserPage extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      followers: '',
      repos: '',
      image: '',
      score: '',
      username: ''
    });

    this.fetchUserDetails = this.fetchUserDetails.bind(this);
    this.getRepos = this.getRepos.bind(this);
    this.getFollowers = this.getFollowers.bind(this);
  }

  fetchUserDetails(user) {
    let url = 'https://api.github.com/search/users?q=' + user;
    axios.get(url).then(resp => {
      console.log("user list resp " + JSON.stringify(resp.data.items[0]));
      let response = resp.data.items[0];
      axios.all([
        this.getRepos(response.repos_url),
        this.getFollowers(response.followers_url)
      ]).then(res => {
        this.setState({
          followers: res[1].data,
          repos: res[0].data,
          image: response.avatar_url,
          score: response.score,
          username: response.login
        })
      });
    })
  }

  getRepos(url) {
    return axios.get(url);
  }

  getFollowers(url) {
    return axios.get(url);
  }

  componentDidMount() {
    this.fetchUserDetails(this.props.location.state.usr);
  }

  render() {
    return (
      <div>
        {this.state.username && <UserBio u_name={this.state.username}
          scr={this.state.score}
          img={this.state.image} />}
        {this.state.repos && <UserRepos rep={this.state.repos} />}
        {this.state.followers && <UserFollowers flw_users={this.state.followers} />}
      </div>
    )
  }
}