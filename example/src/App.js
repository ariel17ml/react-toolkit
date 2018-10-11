import React, { Component } from 'react'
import { Logger } from 'react-toolkit';


export default class App extends Component {

  constructor(props) {
    super(props);
    this._logger = new Logger(true);
  }

  render () {
    this._logger.info("This is render()");
    return (
      <div>HELLO WORLD!</div>
    );
  }
}
