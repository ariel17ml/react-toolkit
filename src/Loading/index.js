import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Spinner from "react-spinkit";


class Loading extends Component {

  render() {
    return (
        <Col sm={1} md={1} smOffset={6} mdOffset={6}>
            <Row>
                <Spinner name="line-scale-pulse-out-rapid" color="blue"/>
                <p>LOADING</p>
            </Row>
        </Col>
    );
  }
}

export default Loading;