import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoasterService from "../../../services/coaster.service";

class CoasterDetails extends Component {
  constructor() {
    super()

    this.state = {
      title: "",
      description: "",
      inversions: "",
      length: "",
      imageUrl: "",
    }

    this.service = new CoasterService()
  }

  componentDidMount() {
    const id = this.props.match.params.id

    this.service.getOneCoaster(id)
      .then(response => {
        const { title, description, inversions, length, imageUrl } = response.data

        this.setState({ title, description, inversions, length, imageUrl })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Container>
        <h1>Detalles</h1>

        <Row>
          <Col>
            <article>
              <h2>{this.state.title}</h2>
              <div>
                <p>{this.state.description}</p>
                <hr />
                <br />
                <p>Nº de Inversiones: {this.state.inversions}</p>
                <p>Longitud: {this.state.length}</p>
              </div>
            </article>
          </Col>
          <Col>
            <img src={this.state.imageUrl} alt={this.state.title} ></img>
          </Col>
        </Row>
      </Container >
    )
  }
}

export default CoasterDetails