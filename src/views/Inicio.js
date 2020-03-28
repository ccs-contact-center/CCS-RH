import React, { Component } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import logo from "../assets/img/brand/logo.png";
import withAuth from "../services/withAuth";

class Inicio extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    console.log(this.props);

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader className="text-center">¡Bienvenido!</CardHeader>
              <CardBody className="text-center">
                <img src={logo} alt="Logo CCS" className="img-fluid" />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withAuth(Inicio);
