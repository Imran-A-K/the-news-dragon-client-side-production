import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} />
        <p className="text-secondary">
          <small>Journalism without fear or favor</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
      <Button variant="danger">Latest</Button>
      <Marquee speed={100} className="text-danger">
        The quick brown fox jumped.       The quick brown fox jumped.          The quick brown fox jumped.
      </Marquee>
      </div>
      
    </Container>
  );
};

export default Header;
