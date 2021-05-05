import './style.css';
import React, { Component } from 'react';
import RegisterForm from "../../Components/RegisterForm"
import axios from "axios"

export default class Register extends Component {

  state = {
    post: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      vehicleMake: "",
      vehicleModel: "",
      vehicleTrim: "",
      vehicleYear: "",
      vehicleColor: ""
    }, posts: []
  }

  componentDidMount() {
    this.getRegisterEntries()
  }

  getRegisterEntries = () => {
    axios.get("/api/user/user")
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
    axios.post("/api/user/user", this.state.post)
      .then(res => this.getRegisterEntries())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <div>
          <RegisterForm
            email={this.state.post.email}
            password={this.state.post.password}
            confirmPassword={this.state.post.confirmPassword}
            firstName={this.state.post.firstName}
            lastName={this.state.post.lastName}
            vehicleMake={this.state.post.vehicleMake}
            vehicleModel={this.state.post.vehicleModel}
            vehicleTrim={this.state.post.vehicleTrim}
            vehicleYear={this.state.post.vehicleYear}
            vehicleColor={this.state.post.vehicleColor}
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

