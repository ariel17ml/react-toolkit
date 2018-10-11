import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import ScaleLoader from "react-spinners/ScaleLoader";


class Loading extends Component {

  render() {
    return (
        <Col sm={1} md={1} smOffset={6} mdOffset={6}>
            <Row>
                <ScaleLoader loading={true} />
                <p>LOADING</p>
            </Row>
        </Col>
    );
  }
}

export default Loading;