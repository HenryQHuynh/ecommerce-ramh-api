import React from "react";
import "./Home.css";
import { images } from "../../constants";
import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Footer from '../Footer/Footer'
import Image from 'react-bootstrap/Image'
export default function Home() {
  return (
    <main>
      <div className="home-container">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={images.background}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={images.backgroundtwo}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={images.newsletter}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={images.poisonivy}
              alt="Third slide"
            />


            <Carousel.Caption className="poisonivy">
              <div className="poisonivy-text">
                <h1>Join our newsletter!</h1>
                <p>
                  Stay up to date with all of our releases.
                </p>
              </div>
              <Button className="poisonivybutton" variant="dark" size="md" active>
                LEARN MORE
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* <Container className="subscription-bar">
          <Row className="subscription-bar-row">
            <Col>
             <h1>hellloooo</h1>
            </Col>
          </Row>
        </Container> */}
        <Container className="content-one">
          <Row className="content-one-row">
            <Col xs={6}>
              <img
                className="d-block w-100"
                src={images.tempimg}
                alt="photograph"
              />
            </Col>
            <Col xs={6}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

              </p>
            </Col>
          </Row>
        </Container>
        <Container className="content-two">
          <Row className="content-two-row">
            <Col xs={6}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

              </p>
            </Col>
            <Col xs={6}>
              <img
                className="d-block w-100"
                src={images.ironman}
                alt="photograph"
              />
            </Col>
          </Row>
        </Container>
        <Container className="new-comics">
        <h1 className="new-releases">NEW RELEASES</h1>
          <Row className="new-comics-row">
            <Col>
              <img
                className="d-block w-100"
                src={images.avengers}
                alt="photograph"
              />
              <p>AVENGERS: Earths Mightiest Heroes</p>
            </Col>
            <Col>
            <img
              className="d-block w-100"
              src={images.darkknight}
              alt="photograph"
            />
            <p>BATMAN: One Dark Knight</p>
          </Col>
          <Col>
            <img
              className="d-block w-100"
              src={images.spiderman}
              alt="photograph"
            />
            <p>SPIDERMAN: The Sinister Seven</p>
          </Col>
          <Col>
            <img
              className="d-block w-100"
              src={images.blackpanther}
              alt="photograph"
            />
            <p>BLACK PANTHER: Ridley Cabal</p>
          </Col>
          <Col>
            <img
              className="d-block w-100"
              src={images.superman}
              alt="photograph"
            />
            <p>SUPERMAN: Space Age</p>
          </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </main>
  );
}
