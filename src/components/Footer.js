import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/git.svg";
import navIcon5 from "../assets/img/whatsapp.svg";
import './Footer.css';
import { FiPhone } from 'react-icons/fi';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-wrapper">
          <Row className="align-items-center">
            <Col size={12} sm={6} className="footer-logo-col">
              <a href="/" className="footer-logo-link">
                <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="LSA Logo" className="footer-logo" />
              </a>
              <p className="footer-tagline">Building the future with code</p>
              <p className="client-priority">Precision and efficiency in every line of code</p>
              <p className="footer-contact"><FiPhone className="footer-contact-icon" /> <a href="tel:+918856087006">+91 8856087006</a></p>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="footer-social-icons">
                <a href="https://www.linkedin.com/in/laxman-andhale-/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" data-tooltip="LinkedIn">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://github.com/LaxmanSA" target="_blank" rel="noopener noreferrer" className="footer-social-icon" data-tooltip="GitHub">
                  <img src={navIcon4} alt="GitHub" />
                </a>
                <a href="https://wa.me/918856087006" target="_blank" rel="noopener noreferrer" className="footer-social-icon" data-tooltip="WhatsApp">
                  <img src={navIcon5} alt="WhatsApp" />
                </a>
              </div>
              <p className="copyright">&copy; {new Date().getFullYear()} Laxman Andhale. All Rights Reserved</p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  )
}
