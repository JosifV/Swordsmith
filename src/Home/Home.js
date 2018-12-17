import React, { Component } from 'react';
import Aux from '../hoc/Aux'
import './Home.css'
import Spinner from '../Spinner'
import {
  Jumbotron, Container, Row, Col, Modal, ModalBody, Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

import jumboImg from '../assets/jumboImg3.jpg';

import vc1 from '../assets/contact/vc1.jpg'
import vc2 from '../assets/contact/vc2.jpg'
import vc3 from '../assets/contact/vc3.jpg'
import vc4 from '../assets/contact/vc4.jpg'
import vc5 from '../assets/contact/vc5.jpg'
import vc6 from '../assets/contact/vc6.jpg'
import vc7 from '../assets/contact/vc7.jpg'
import vc8 from '../assets/contact/vc8.jpg'
import logo from '../assets/Untitled2.png'

class Home extends Component {
  state = {
    modal: false,
    imageSrcDynamic: null,
    d: new Date(),
    dropdownOpen: false,
    spinner: true,
    stil: {
      background: 'orangered',
      color: 'white',
      border: '2px solid white'
    },
    emailValue: ''
  }

  componentDidMount() {
    this.setState({
      spinner: false
    })
  }
  toggleHandler = () => {
    let modalTog = this.state.modal
    this.setState({
      modal: !modalTog
    });
  }
  toggleDropDown = () => {
    let dropDownHandler = this.state.dropdownOpen
    this.setState({
      dropdownOpen: !dropDownHandler
    });
  }
  hovrHandler = () => {
    this.setState({
      stil: {
        background: '#333',
        color: 'white',
        border: '2px solid white'
      }
    })
  }
  mouseLeaveHandler = () => {
    this.setState({
      stil: {
        background: 'orangered',
        color: 'white',
        border: '2px solid white'
      }
    })
  }
  emailValHandler = (event) =>{
    this.setState({
      emailValue:event.target.value
    })
  }
  render() {

    return <Aux>
      {this.state.spinner ? <Spinner /> : <Aux><Jumbotron style={{ background: 'url(' + jumboImg + ')' + 'no-repeat center center', backgroundSize: 'cover', marginBottom: '0' }}>
        <div className="jumboShadow">
          <Container>
            <Row>
              <Col sm="8">
                <div className="shortAboutMeJubmo">
                  <h1 className="jumboTitle">Someone Someoneson <br></br><small> Swordsmith</small></h1>
                  <p><span className="firstLetter">A</span>t vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. </p>
                </div>
              </Col>
              <Col sm="4">
                <form className="jumboForm" action={"https://formspree.io/"+this.state.emailValue}
                  method="POST">
                  <h3 className="jumboTitle">Conect with me fast</h3>
                  <input type="hidden" name="_subject" value="New message for you!" />

                  <input type="hidden" name="_next" value="https://smithorders-1e194.firebaseapp.com/OrderMade" />
                  
                  <input type="text" name="Name:" placeholder="Your name" required />
                  <br />
                  <input type="email" name="Email:" placeholder="Your email" onChange={(event)=>this.emailValHandler(event)} required />
                  <br />
                  <textarea name="Message:" style={{ resize: 'none' }} rows="7" placeholder="Write me a message..." required></textarea>
                  <br />
                  <button type="submit" value="Send"><i style={{ fontSize: "24px" }} class="fa">&#xf1d9;</i> Send</button>
                </form>
              </Col>
            </Row>
          </Container>
        </div>
      </Jumbotron>
        <div className="secondAboutMe">
          <Container fluid>
            <Row>
              <Col sm="8">
                <h2 className='jumboTitle'>My Work</h2>
                <p>Enam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
              </Col>
              <Col sm="4">
                <h2 className='jumboTitle'>References</h2>
                <ul>
                  <li><a href="/">Sword type XXII</a></li>
                  <li><a href="/">Single-Edged Sword type XII</a></li>
                  <li><a href="/">Sword type XXVa</a></li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="glifsss">
          <Container fluid>
            <Row>
              <Col sm="4"><span className="glifTitle"><i class="fa fa-check-square" id="glifs"><h4>Proven</h4></i></span>
              </Col>
              <Col sm="4"><span className="glifTitle"><i class="fa fa-hand-rock-o" id="glifs"><h4>Hand made</h4></i></span>
              </Col>
              <Col sm="4"><span className="glifTitle"><i class="fa fa-trophy" id="glifs"><h4>Quality blades</h4></i></span>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="galery">
          <Container fluid>
            <h2 className="galTitle">Gallery</h2><br />
            <p>Enam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
            <div className="row">
              <div className="column">
                <img alt="imgNotFound...O.o" src={vc1} style={{ width: "100%" }} onClick={() => {
                  this.setState({
                    imageSrcDynamic: vc1
                  });
                  this.toggleHandler()
                }} />
                <img alt="imgNotFound...O.o" src={vc2} style={{ width: "100%" }} onClick={() => {
                  this.setState({
                    imageSrcDynamic: vc2
                  });
                  this.toggleHandler()
                }} />
              </div>
              <div className="column">
                <img alt="imgNotFound...O.o" src={vc3} style={{ width: "100%" }} onClick={() => {
                  this.setState({
                    imageSrcDynamic: vc3
                  });
                  this.toggleHandler()
                }} />
                <img alt="imgNotFound...O.o" src={vc4} style={{ width: "100%" }} onClick={() => {
                  this.setState({
                    imageSrcDynamic: vc4
                  });
                  this.toggleHandler()
                }} />
              </div>
              <div className="column">
                <img alt="imgNotFound...O.o" src={vc5} style={{ width: "100%" }} onClick={() => {
                  this.setState({
                    imageSrcDynamic: vc5
                  });
                  this.toggleHandler()
                }} />
                <img alt="imgNotFound...O.o" src={vc6} style={{ width: "100%" }} onClick={() => {
                  this.setState({
                    imageSrcDynamic: vc6
                  });
                  this.toggleHandler()
                }} />
              </div>
              <div className="column">
                <img alt="imgNotFound...O.o" src={vc7} style={{ width: "100%" }} onClick={() => {
                  this.setState({
                    imageSrcDynamic: vc7
                  });
                  this.toggleHandler()
                }} />
                <img alt="imgNotFound...O.o" src={vc8} style={{ width: "100%" }} onClick={() => {
                  this.setState({
                    imageSrcDynamic: vc8
                  });
                  this.toggleHandler()
                }} />
              </div>
            </div>
          </Container>
        </div>

        <div className="thirdAboutMe">
          <Container fluid>
                <h2 className='jumboTitle'>Terms of sale</h2>
                <p>Enam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Enam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
          </Container>
        </div>

        <Modal isOpen={this.state.modal} toggle={this.toggleHandler} size="lg">
          <ModalBody style={{ background: '#333333' }}>
            <img src={this.state.imageSrcDynamic} alt="imgNotFound...O.o" style={{ width: '100%' }} />
          </ModalBody>
        </Modal>

        <div className="footerInfo">
          <Container fluid>
            <Row>
              <Col sm="4">
                <div class="ramForImg">
                  <img src={logo} alt="imgNotFound...O.o" />
                  <p>&trade; Swordsmith</p>
                </div>
              </Col>
              <Col sm="8">
                <Row>
                  <Col sm='4'>
                    <h3>Find me:</h3>
                    <ul>
                      <li><a href="/">Facebook</a></li>
                      <li><a href="/">Instagram</a></li>
                    </ul>
                  </Col>
                  <Col sm='4'>
                    <h3>Blog:</h3>
                    <ul>
                      <li><a href="/">My Armory</a></li>
                      <li><a href="/">SBG</a></li>
                      <li><a href="/" >Schola Gladiatoria</a></li>
                      <li><a href="/">Reddit</a></li>
                      <li><a href="/">Youtube</a></li>
                    </ul>
                  </Col>
                  <Col sm='4'>
                    <h3>Email:</h3>
                    <ul>
                      <li>test@gmail.com</li>
                      <li>test@gmail.com</li>
                      <li>test@gmail.com</li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="podFuterac" style={{ paddingTop: '10px', marginTop: '0' }}>
          <a href="https://cv-josifv.firebaseapp.com/indexEn.html" target="_blank" style={{ fontSize: '80%' }}>Made by Josif Vacić &copy; <span>{this.state.d.getFullYear()}</span></a>
          <ul style={{ marginBottom: '0', width: '95%' }}>
            <li><a href="https://www.linkedin.com/in/josif-vacic-657660165/" target="_blank"><i style={{ fontSize: '30px', padding: '10px' }} class="fa">&#xf08c;</i></a></li>
            <li><a href="https://stackoverflow.com/users/9685324/jozev" target="_blank"><i style={{ fontSize: '30px', padding: '10px' }} class="fa">&#xf16c;</i></a></li>
            <li><a href="https://github.com/JosifV" target="_blank"><i style={{ fontSize: '30px', padding: '10px' }} class="fa">&#xf092;</i></a></li>
            <li><a href="https://www.facebook.com/iosif.vacic" target="_blank"><i style={{ fontSize: '30px', padding: '10px' }} class="fa">&#xf082;</i></a></li>
            <li style={{ float: 'right' }}><Dropdown direction="up" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
              <DropdownToggle caret style={this.state.stil} onMouseOver={this.hovrHandler} onMouseLeave={this.mouseLeaveHandler}>
                Language
            </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Lang1</DropdownItem>
                <DropdownItem>Lang2</DropdownItem>
              </DropdownMenu>
            </Dropdown></li>
          </ul>
          <p style={{margin:'0'}}>*images used are not mine - page made for non commercial use</p>
        </div>
      </Aux>}
    </Aux>

  }
};

export default Home;
