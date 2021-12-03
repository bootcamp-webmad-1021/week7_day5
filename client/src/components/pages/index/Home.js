import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <h1>Bievenid@ a Coasters App!</h1>
      <p>Una MERN Stack sobre montañas rusas</p>

      <hr></hr>

      <Link to="/coaster-list">
        <Button variant="dark" size="lg">Ver montañas rusas</Button>
      </Link>
    </Container>
  )
}

export default Home