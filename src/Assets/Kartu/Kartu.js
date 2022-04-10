import React, { useState }  from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import mobil from '../img/image 1.png'
import user from '../img/fi_users.png'
import setting from '../img/fi_settings.png'
import calendar from '../img/fi_calendar.png'
import './Kartu.css'
import DetailPaket from '../../DetailPaket/DetailPaket'

function Kartu (props){
  const GoToCar =()=>{
    window.location.href="Display_DetailPaket"
}

  return (props.trigger)? (
    <Row >
    <Col>
    <Card id ='kartu' style={{ width: '18rem' }}>
      <img src={mobil}></img>
      <Card.Body>
      Nama/Tipe Mobil
        <Card.Title>Rp 430.000 / hari</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Card.Text>
        <img src={user}></img> &ensp;4 Orang <p></p>
        <img src={setting}></img> &ensp;Manual <p></p>
        <img src={calendar}></img> &ensp;Tahun 2022 <p></p>
      </Card.Body>
      <Button id='btn-cari' onClick={()=>{GoToCar()}}>Cari Mobil</Button>
    </Card>
    </Col>
    <Col>
    <Card  id ='kartu' style={{ width: '18rem' }}>
      <img src={mobil}></img>
      <Card.Body>
      Nama/Tipe Mobil
        <Card.Title>Rp 430.000 / hari</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Card.Text>
        <img src={user}></img> &ensp;4 Orang <p></p>
        <img src={setting}></img> &ensp;Manual <p></p>
        <img src={calendar}></img> &ensp;Tahun 2022 <p></p>
      </Card.Body>
      <Button id='btn-cari' onClick={()=>{GoToCar()}}>Cari Mobil</Button>
    </Card>
    </Col>
    <Col>
    <Card  id ='kartu' style={{ width: '18rem' }}>
      <img src={mobil}></img>
      <Card.Body>
      Nama/Tipe Mobil
        <Card.Title>Rp 430.000 / hari</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Card.Text>
        <img src={user}></img> &ensp;4 Orang <p></p>
        <img src={setting}></img> &ensp;Manual <p></p>
        <img src={calendar}></img> &ensp;Tahun 2022 <p></p>
      </Card.Body>
      <Button id='btn-cari' onClick={()=>{GoToCar()}}>Cari Mobil</Button>
    </Card>
    </Col>
    </Row>
  ):"";
}
export default Kartu