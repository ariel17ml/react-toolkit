import React, { Component } from "react";
import { Alert as BSAlert, Button } from "react-bootstrap";


class Alert extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { show: true };
  }

  dismiss = () => {
    this.setState({ show: false });
  }

  render() {
    let retryButton;
    if (this.props.retryFunc !== undefined) {
      retryButton = <Button bsStyle={this.props.retryStyle} onClick={this.props.retryFunc}>Retry</Button>
    }

    let dismissButton;
    if (this.props.dismissable) {
      dismissButton = <Button onClick={this.handleDismiss}>Hide</Button>
    }

    if (this.state.show) {
      return (
        <BSAlert bsStyle={this.props.alertStyle}>
          <h4>{this.props.title}</h4>
          <p>{this.props.description}</p>
          <p>
            {retryButton}
            {dismissButton}
          </p>
        </BSAlert>
      );
    }
  }
}

export default Alert;