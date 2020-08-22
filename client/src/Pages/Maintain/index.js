import './style.css';
import React, { Component } from 'react';
import MaintainForm from "../../Components/MaintainForm"
import Card from "../../Components/Card"
import axios from "axios"

export default class Maintain extends Component {

  state = {
    post: {
      part: "",
      fluid: "",
      amount: 0,
      mile: "",
      duration: "",
      date: ""
    }, posts: []
  }

  componentDidMount() {
    this.getMaintainEntries()
  }

  getMaintainEntries = () => {
    axios.get("/api/maintain")
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err))
  }

  handleChange = e => {
    const { name, value } = e.target
    const post = { ... this.state.post }
    post[name] = value
    this.setState({ post: post })
  }

  handleSubmit = e => {
    e.preventDefault()
    axios.post("/api/maintain", this.state.post)
      .then(res => this.getMaintainEntries())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="containerHome">
        <MaintainForm
          part={this.state.post.part}
          fluid={this.state.post.fluid}
          mile={this.state.post.mile}
          duration={this.state.post.duration}
          amount={this.state.post.amount}
          date={this.state.post.date}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.posts.map(post => (
          <Card post={post} key={post._id} />
        ))}
      </div>

    )
  }
}

