import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";


class Header extends Component {

  constructor(props, context) {
    super(props, context);
    this.loginURL = this._getValue(props, 'loginURL', process.env.REACT_APP_HEADER_LOGIN_URL)
    this.loginText = this._getValue(props, 'loginText', process.env.REACT_APP_HEADER_LOGIN_TEXT, "Login")
    this.logoutURL = this._getValue(props, 'logoutURL', process.env.REACT_APP_HEADER_LOGOUT_URL, "/")
    this.logoutText = this._getValue(props, 'logoutText', process.env.REACT_APP_HEADER_LOGOUT_TEXT, "Logout")
    this.brandHref = this._getValue(props, 'brandHref', process.env.REACT_APP_HEADER_BRAND_HREF, "/")
    this.brandText = this._getValue(props, 'brandText', process.env.REACT_APP_HEADER_BRAND_TEXT, "SingularMentor")
  }

  _getValue(props, key, env, defValue) {
    if (props[key] === undefined) {
      if (env === undefined) {
        if (defValue !== undefined) {
          return defValue;
        }
        throw new Error(key + " cannot be undefined");
      }
      return env;
    }
    return props[key];
  }

  login = () => {
    const p = this.props;
    p.auth.login();
    p.history.push(this.loginURL);
  }

  logout = () => {
    const p = this.props;
    p.auth.logout();
    p.history.push(this.logoutURL);
  }

  render() {
    const p = this.props;
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href={this.brandHref}>{this.brandText}</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {!p.auth.isAuthenticated() && (
              <NavItem eventKey={2} onClick={this.login}>
                {this.loginText}
              </NavItem>
            )}
            {p.auth.isAuthenticated() && (
              <NavItem eventKey={2} href="#" onClick={this.logout}>
                {this.logoutText}
              </NavItem>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;