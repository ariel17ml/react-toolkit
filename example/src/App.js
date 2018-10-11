import React, { Component } from 'react'
import { Logger, Auth, Header } from 'react-toolkit';


export default class App extends Component {

  constructor(props) {
    super(props);
    this._logger = new Logger(true);
    this._auth = new Auth();
  }

  render () {
    this._logger.info("This is render()");
    return (
      <div>
        <h1>HELLO WORLD!</h1>
        <h2>Header</h2>
        <Header />
      </div>
    );
  }
}
