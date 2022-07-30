import React from 'react';
import './Products.css'
import { images } from "../../constants";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../Footer/Footer'
export default function Products() {
  return (
    <main>
    <div className='products-container'>
      <Container className="best-selling-container">
        <h1 className="best-selling-header">BEST SELLING</h1>
          <Row className="new-comics-row">
            <Col>
              <img
                className="d-block w-100"
                src={images.xstatic}
                alt="photograph"
              />
              <p>X-STATIX: Volume Uno</p>
            </Col>
            <Col>
            <img
              className="d-block w-100"
              src={images.thesixth}
              alt="photograph"
            />
            <p>THE SIXTH GUN: Bunn Hurtt</p>
          </Col>
          <Col>
            <img
              className="d-block w-100"
              src={images.antman}
              alt="photograph"
            />
            <p>ANTMAN: The 60th Edition</p>
          </Col>
          <Col>
            <img
              className="d-block w-100"
              src={images.giants}
              alt="photograph"
            />
            <p>IKILLGIANTS: Joe Kelly + Jm Ken</p>
          </Col>
          <Col>
            <img
              className="d-block w-100"
              src={images.starwars}
              alt="photograph"
            />
            <p>STAR WARS: Doctor Alpha</p>
          </Col>
          </Row>
          <Row className="new-comics-row">
            <Col>
              <img
                className="d-block w-100"
                src={images.yearone}
                alt="photograph"
              />
              <p>BATMAN: Year One</p>
            </Col>
            <Col>
            <img
              className="d-block w-100"
              src={images.transmetro}
              alt="photograph"
            />
            <p>TRANSMETRO- POLITAN: Book One</p>
          </Col>
          <Col>
            <img
              className="d-block w-100"
              src={images.swamp}
              alt="photograph"
            />
            <p>SWAMP THING: The Saga Book One</p>
          </Col>
          <Col>
            <img
              className="d-block w-100"
              src={images.berlin}
              alt="photograph"
            />
            <p>BERLIN: Jason Lutes</p>
          </Col>
          <Col>
            <img
              className="d-block w-100"
              src={images.strangeamor}
              alt="photograph"
            />
            <p>STRANGE AMOR: Paul Chadwick</p>
          </Col>
          </Row>
          
        </Container>
        
        <Container className="new-releases-container">
        <h1 className="new-releases-header">NEW RELEASES</h1>
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