import React, { Component } from 'react'
import Logger from 'react-toolkit/Logger';


export default class App extends Component {

  constructor(props) {
    super(props);
    this._logger = new Logger();
  }

  render () {
    this._logger.info("This is render()");
    return (
      <div>HELLO WORLD!</div>
    );
  }
}
