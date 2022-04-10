import React from 'react'
import { Container, Accordion, Button, Card, Row, Col } from 'react-bootstrap'
import './DetailPaket.css'
import mobil from '../Assets/img/image 1.png'
import user from '../Assets/img/fi_users.png'
import setting from '../Assets/img/fi_settings.png'
import calendar from '../Assets/img/fi_calendar.png'

function DetailPaket (props) {
  return (props.trigger)?(
    <Row id='detail'>
    <Col>
    <Card style={{ width: '40rem' }}>
        <Container>
        <h5>Tentang Paket</h5>
        <h6>Include</h6>
        <ul>
          <li>Apa saja yang termasuk paket misal durasi max 12 jam</li>
          <li>Sudah termasuk bensin selama 12 jam</li>
          <li>Sudah termasuk Tiket Wisata</li>
          <li>Sudah termasuk pajak</li>
        </ul>
        <h6>Exclude</h6>
        <ul>
          <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
          <li>
            Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
            20.000/jam
          </li>
          <li>Tidak termasuk akomodasi penginapan</li>
        </ul>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
        <Accordion.Header><b>Refund, Reschedule, Overtime</b></Accordion.Header>
        <Accordion.Body>
        <ul>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>TIdak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
        </ul>
        </Accordion.Body>
    </Accordion.Item>
    </Accordion>
    <Button className="btn-pembayaran" variant="success">Lanjutkan Pembayaran</Button>{' '}
    </Container>
    </Card>
    </Col>
    <Col>
    <Card  id ='card-payment' style={{ width: '25rem' }}>
      <img src={mobil}></img>
      <Card.Body>
      <b>Nama/Tipe Mobil</b><br></br>
        <img src={user}></img> 4 Orang &ensp;
        <img src={setting}></img> Manual &ensp;
        <img src={calendar}></img> Tahun 2022 <br></br><br></br><br></br>
        Total <b id='harga'>Rp 430.000 / hari</b>
      </Card.Body>
      <Button className='payment'>Lanjutkan Pembayaran</Button>
    </Card>
    <Container>
    </Container>
    </Col>
    </Row>
  ): "" ;
}
export default DetailPaket