import React from "react";
import "./Header.css";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../logo.png";
import { render } from "react-dom";

class Header extends React.Component {
  render() {
    let button = "";
    if (this.props.name) {
      console.log("PROPS NAME", this.props.name);
      button = (
        <LinkContainer to="/">
          <NavItem onClick={this.props.removeSession}>logout</NavItem>
        </LinkContainer>
      );
    } else {
      console.log("No state");
      button = (
        <LinkContainer to="/login">
          <NavItem>login</NavItem>
        </LinkContainer>
      );
    }
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand>
          <LinkContainer to="/">
            <img src={logo} alt="logo" />
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/tutorial">
              <NavItem>Tutorial</NavItem>
            </LinkContainer>
            <LinkContainer to="/events">
              <NavItem>Events</NavItem>
            </LinkContainer>
            <LinkContainer to="/poll">
              <NavItem>Polls</NavItem>
            </LinkContainer>
            {button}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
