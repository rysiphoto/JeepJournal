import './style.css';
import React, { Component } from 'react';
import TripsCard from "../../Components/TripsCard"
import TripsForm from "../../Components/TripsForm"
import axios from "axios"
export default class Trips extends Component {

  state = {
    post: {
      title: "",
      destination: "",
      trail: "",
      date: "",
      details: ""
    }, posts: []
  }

  componentDidMount() {
    this.getTripsEntries()
  }

  getTripsEntries = () => {
    axios.get("/api/user/user/trips")
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err))
  }

  // deleteTripsEntries = () => {
  //   axios.delete("/api/trips/trips/${id}")
  //     .then(res => this.setState({ posts: res.data }))
  //     .catch(err => console.log(err))
  // }

  handleChange = e => {
    const { name, value } = e.target
    const post = { ...this.state.post }
    post[name] = value
    this.setState({ post: post })
  }

  handleSubmit = e => {
    e.preventDefault()
    axios.post("/api/user/user/trips", this.state.post)
      .then(res => this.getTripsEntries())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <div>
          <TripsForm
            title={this.state.post.title}
            destination={this.state.post.destination}
            trail={this.state.post.trail}
            date={this.state.post.date}
            details={this.state.post.details}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          {this.state.posts.map(post => (
            <TripsCard post={post} key={post._id} />
          ))}
        </div>
        <div class="col-md-4">
          <p>
            <br />
            <br />
            <br />
          </p>
        </div>
      </>
    )
  }
}