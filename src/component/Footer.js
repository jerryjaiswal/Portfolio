import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6} className="text-center text-sm-start">
            <div className="social-icon">
              <a  href="#"><img className="social-icon-img" src={navIcon1} alt="Icon" /></a>
              <a  href="#"><img className="social-icon-img" src={navIcon2} alt="Icon" /></a>
              <a  href="#"><img className="social-icon-img" src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          { <p className="text-center text-sm-end" >Made by Ronak Jaiswal</p> }
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
