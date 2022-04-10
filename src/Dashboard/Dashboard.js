import React from 'react'
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap'
import './Dashboard.css'
import Rectangle from '../Assets/img/Rectangle.png'
import car from '../Assets/img/car.png'
import facebook from '../Assets/img/icon_facebook.png'
import instagram from '../Assets/img/icon_instagram.png'
import twitter from '../Assets/img/icon_twitter.png'
import mail from '../Assets/img/icon_mail.png'
import twitch from '../Assets/img/icon_twitch.png'
import { CariMobil1 } from '../../src/cari_mobil/CariMobil1'

export const Dashboard = () => {
  return (
    <div>
    <div className='home'>
        <Navbar expand="lg" id='navbar'>
          <Container>
          <img src={Rectangle}></img>
          <div className='navigasi'>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Our Services</Nav.Link>
                <Nav.Link href="#link">Why Us</Nav.Link>
                <Nav.Link href="#link">Testimonial</Nav.Link>
                <Nav.Link href="#link">FAQ</Nav.Link>
                <Button id='btn-register'>Register</Button>
              </Nav>
            </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
        
        <div className="hal-2">
            <div className="tulisan">
                <h1>Sewa dan Rental Mobil Terbaik di Kawasan Tangerang Selatan</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                untuk sewa mobil 24 jam.</p>
            </div>
            <div className="gambar">
                <div className="background"><img className="img-fluid" src={car}></img></div>
            </div>
        </div> 
    </div>
    <CariMobil1/>
    <div className='Footer'>
      <Container>
      <Row>
        <Col>
          Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000<p></p>
          binarcarrental@gmail.com<p></p>
          081-233-334-808<p></p>
        </Col>
        <Col>
          Our Services<p></p>
          Why Us<p></p>
          Testimonial<p></p>
        </Col>
        <Col>
          Connect With Us <p></p>
          <img src={facebook}></img>
          <img src={instagram}></img>
          <img src={twitter}></img>
          <img src={mail}></img>
          <img src={twitch}></img>
        </Col>
        <Col>
        Copyright Binar 2022 <p></p>
        <img src={Rectangle}></img>
        </Col>
      </Row>
      </Container>
    </div>
    </div>
  )
}
