import React from "react";
import { ListGroup } from "reactstrap";

import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
        <h5>Now we are serving quick meals!</h5>
        <h5>Now available from anywhere within campus! Say Location And We Deliver!</h5>
      </div>
      <div>
        <h5 className="footer__title mb-3">Operating Hours:</h5>
        <ListGroup>
          <div className="delivery__time-item border-0 ps-0">
            <span>Monday - Friday</span>
            <p>10:00am - 11:00pm</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <span>Saturday & Sunday</span>
            <p>11:00am - 8:00pm</p>
          </div>
        </ListGroup>
      </div>
    </footer>
  );
};

export default Footer;
