import React, { Component } from "react";
import { Container } from 'react-bootstrap'
import CoasterService from "../../../services/coaster.service";
import CoasterList from "./CoasterList";

class CoasterPage extends Component {
  constructor() {
    super()

    this.state = {
      coasters: []
    }

    this.service = new CoasterService()
  }

  componentDidMount() {
    this.refreshCoasters()
  }

  refreshCoasters = () => {
    this.service.getAllCoasters()
      .then(response => {
        const coasters = response.data

        this.setState({ coasters: coasters })
      })
      .catch(err => console.log(err))
  }

  render() {

    return (
      <Container>
        <h1>Coaster List</h1>

        <CoasterList refreshCoasters={this.refreshCoasters} coasters={this.state.coasters} />

      </Container>
    )
  }
}

export default CoasterPage