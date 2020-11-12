import { useState } from 'react';
import './Footer.css'
import logo from '../img/logo.png';
import {
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from 'reactstrap';
import btcIcon from '../img/bitcoin.svg';
import ethIcon from '../img/ethereum.svg';
import btcQrCode from '../img/qr_bitcoin.png';
import ethQrCode from '../img/qr_ethereum.png';

const Footer = () => {

  const [modal, setModal] = useState(false);
  const [qrImage, setQrImage] = useState(ethQrCode);
  const [modalTitle, setModalTitle] = useState('');
  const [modalPublicKey, setModalPublicKey] = useState('');

  const toggleModal = () => setModal(!modal);

  const toggleModalBtc = () => {
    setModalTitle('Bitcoin Donation');
    setModalPublicKey('bc1qh g0dw ydnm 7a5n ygnq r8e0 597q g8gz 8xh3 qyhdh');
    setQrImage(btcQrCode);
    toggleModal();
  }

  const toggleModalEth = () => {
    setModalTitle('Ethereum Donation');
    setModalPublicKey('0x323 d01b F3B5 ea3e 8235 6Dbb 0fB2 CF65 540A e1ce8');
    setQrImage(ethQrCode);
    toggleModal();
  }

  return (
    <footer>
      <Container>

        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal} className="Donate-modal"><h3>{modalTitle}</h3></ModalHeader>
          <ModalBody className="Donate-modal center-text">
            Thank you for donating to Jackfruit Games. Please use the QR
            code or the address below to initiate the payment.
            <img src={qrImage} alt="Donation QR code" className="Qr-image Small-margin-top" />
            <p className="Small-margin-top">{modalPublicKey}</p>
          </ModalBody>
          <ModalFooter className="Donate-modal">
            <Button color="primary" onClick={toggleModal}>Done</Button>
          </ModalFooter>
        </Modal>

        <Row>
          <Col xs={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }}>
            <img className="Footer-logo img-fluid" src={logo} alt="Jackfruit Games logo" />
          </Col>
        </Row>
        <Row>
          <Col>
            Like what we do? Please consider a donation:
          </Col>
        </Row>
        <Row>
          <Col className="center-text Small-margin-top">
            <img onClick={toggleModalBtc} src={btcIcon} alt="Bitcoin" className="Donate-icon" />
            <img onClick={toggleModalEth} src={ethIcon} alt="Ethereum" className="Donate-icon" />
          </Col>
        </Row>
        <Row className="Big-margin-top">
          <Col>
            ©{(new Date()).getFullYear()} JACKFRUIT GAMES. ALL RIGHTS RESERVED.
          </Col>
        </Row>
        <Row>
          <Col>
            All trademarks referenced herein are the properties of their respective owners.
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;