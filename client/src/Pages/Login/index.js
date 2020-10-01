import './style.css';
import React, { Component } from 'react';
import LoginForm from "../../Components/LoginForm"
import axios from "axios"

export default class Login extends Component {

  state = {
    post: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    }, posts: []
  }

  componentDidMount() {
    this.getLoginEntries()
  }

  getLoginEntries = () => {
    axios.get("/api/user")
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err))
  }

  handleChange = e => {
    const { name, value } = e.target
    const post = { ...this.state.post }
    post[name] = value
    this.setState({ post: post })
  }

  handleSubmit = e => {
    e.preventDefault()
    axios.post("/api/user", this.state.post)
      .then(res => this.getLoginEntries())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <div>
          <LoginForm
            email={this.state.post.email}
            password={this.state.post.password}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />

        </div>
        <div className="col-md-4">
          <p>
            <br />
            <br />
            <br />
          </p>
        </div>
      </div>
    )
  }
}

