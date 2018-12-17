import React, { Component } from 'react';
import './Rapiers.css';
import Futer from '../Futer/Futer'
// import Magnifier from 'react-magnifier';
import SimpleSlider from '../Slide'
import {
    Jumbotron, Button,Container, Row, Col, Card, CardText, CardBody,
    CardTitle, CardSubtitle, UncontrolledCollapse, Modal, ModalHeader, ModalBody, ModalFooter, CardImg
} from 'reactstrap';
import Plocice2 from '../assets/plocice2.jpg'
import Gddj2000222 from '../assets/rapiers/yzeto/2000222.jpg';
import Gddj200027 from '../assets/rapiers/yzeto/200027.jpg';
import Gddj2000223 from '../assets/rapiers/yzeto/2000223.jpg';
import Gddj2000214 from '../assets/rapiers/yzeto/2000214.jpg';
import Gddj200029 from '../assets/rapiers/yzeto/200029.jpg';
import Gddj2000215 from '../assets/rapiers/yzeto/2000215.jpg';
import Gddj2000218 from '../assets/rapiers/yzeto/2000218.jpg';
import Gddj2000213 from '../assets/rapiers/yzeto/2000213.jpg';
import Gddj2000223a1 from '../assets/rapiers/yzeto/2000223-1.jpg';
import Gddj2000221 from '../assets/rapiers/yzeto/2000221.jpg';
import Gddj200025 from '../assets/rapiers/yzeto/200025.jpg';
import Gddj2000211 from '../assets/rapiers/yzeto/2000211.jpg';
import Gddj200028 from '../assets/rapiers/yzeto/200028.jpg';

import Gddj2000222A from '../assets/rapiers/yzeto/2000222A.jpg';
import Gddj200027A from '../assets/rapiers/yzeto/200027A.jpg';
import Gddj2000223A from '../assets/rapiers/yzeto/2000223A.jpg';
import Gddj2000214A from '../assets/rapiers/yzeto/2000214A.jpg';
import Gddj200029A from '../assets/rapiers/yzeto/200029A.jpg';
import Gddj2000215A from '../assets/rapiers/yzeto/2000215A.jpg';
import Gddj2000218A from '../assets/rapiers/yzeto/2000218A.jpg';
import Gddj2000213A from '../assets/rapiers/yzeto/2000213A.jpg';
import Gddj2000223a1A from '../assets/rapiers/yzeto/2000223-1A.jpg';
import Gddj2000221A from '../assets/rapiers/yzeto/2000221A.jpg';
// import Gddj200025A from '../assets/rapiers/yzeto/200025A.jpg';
import Gddj2000211A from '../assets/rapiers/yzeto/2000211A.jpg';
import Gddj200028A from '../assets/rapiers/yzeto/200028A.jpg';

import Gddj2000222B from '../assets/rapiers/yzeto/2000222B.jpg';
import Gddj200027B from '../assets/rapiers/yzeto/200027B.jpg';
import Gddj2000223B from '../assets/rapiers/yzeto/2000223B.jpg';
import Gddj2000214B from '../assets/rapiers/yzeto/2000214B.jpg';
import Gddj200029B from '../assets/rapiers/yzeto/200029B.jpg';
// import Gddj2000215B from '../assets/rapiers/yzeto/2000215B.jpg';
// import Gddj2000218B from '../assets/rapiers/yzeto/2000218B.jpg';
import Gddj2000213B from '../assets/rapiers/yzeto/2000213B.jpg';
import Gddj2000223a1B from '../assets/rapiers/yzeto/2000223-1B.jpg';
import Gddj2000221B from '../assets/rapiers/yzeto/2000221B.jpg';
// import Gddj200025B from '../assets/rapiers/yzeto/200025B.jpg';
import Gddj2000211B from '../assets/rapiers/yzeto/2000211B.jpg';
// import Gddj200028B from '../assets/rapiers/yzeto/200028B.jpg';

import Gddj2000211V from '../assets/rapiers/yzeto/2000211V.jpg';
import Gddj2000211G from '../assets/rapiers/yzeto/2000211G.jpg';

import Gddj2000213V from '../assets/rapiers/yzeto/2000213V.jpg';

class Rapiers extends Component {
    state = {
        productsRapp: [

            {
                nmbr: 1,
                catNum: 'Catalogue No. 200027',
                // imgSrc: Gddj200027,
                // imgSrcA: Gddj200027A,
                // imgSrcB: Gddj200027B,
                imgSrc:[Gddj200027,Gddj200027A,Gddj200027B],
                name: 'Rapier',
                histAndGeo: '17th century. Southern and Central Europe.',
                desc: <div><h5>Description:</h5>The grip handle is from <br />
                    wound steel wire.</div>,
                stat: <div> Total length: 1190mm <br />
                    Length of the blade: 1030mm <br />
                    Width of the blade: 29mm <br />
                    Weight : 1290g</div>,
                price: <h5>Price: 800&euro;</h5>,
                ordered: false,
                scab: <h5>Price: 990&euro;</h5>,
                scab6bk: <h5>Price: 1000&euro;</h5>
            },
            {
                nmbr: 2,
                catNum: 'Catalogue No. 2000224',
                // imgSrc: Gddj2000223,
                // imgSrcA: Gddj2000223A,
                // imgSrcB: Gddj2000223B,
                imgSrc:[Gddj2000223,Gddj2000223A,Gddj2000223B],

                name: 'Swiss saber',
                histAndGeo: '1550-1600 Switzerland.',
                desc: <div><h5>Description:</h5>The grip handle is from <br />
                    wound steel wire.</div>,
                stat: <div> Total length: 1020mm <br />
                    Length of the blade: 840mm <br />
                    Width of the blade: 40mm <br />
                    Weight : 1280g</div>,
                price: <h5>Price: 960&euro;</h5>,
                ordered: false,
                scab: <h5>Price: 1150&euro;</h5>,
                scab6bk: <h5>Price: 1160&euro;</h5>
            },
            {
                nmbr: 3,
                catNum: 'Catalogue No. 2000214',
                // imgSrc: Gddj2000214,
                // imgSrcA: Gddj2000214A,
                // imgSrcB: Gddj2000214B,
                imgSrc:[Gddj2000214,Gddj2000214A,Gddj2000214B],

                name: 'Rapier',
                histAndGeo: '1560-1635 Southern and Central Europe.',
                desc: <div><h5>Description:</h5>The tendrilled basket <br />
                    is of classical design.</div>,
                stat: <div> Total length: 1170mm <br />
                    Length of the blade: 1020mm <br />
                    Width of the blade: 26mm <br />
                    Weight : 1480g</div>,
                price: <h5>Price: 800&euro;</h5>,
                ordered: false,
                scab: <h5>Price: 990&euro;</h5>,
                scab6bk: <h5>Price: 1000&euro;</h5>
            },
            {
                nmbr: 4,
                catNum: 'Catalogue No. 200029',
                // imgSrc: Gddj200029,
                // imgSrcA: Gddj200029A,
                // imgSrcB: Gddj200029B,
                imgSrc:[Gddj200029,Gddj200029A,Gddj200029B],

                name: 'Rapier',
                histAndGeo: 'The end of the 16th century. Saxony.',
                desc: <div><h5>Description:</h5> The protective basket is formed<br />
                    by the shielding of the S-letter<br />
                    shape and by two rings.<br />
                    In addition there are three protective<br />
                    rods at the back side..</div>,
                stat: <div>Total length: 1150mm <br />
                    Length of the blade: 1000mm <br />
                    Width of the blade: 18mm <br />
                    Weight : 1150g</div>,
                price: <h5>Price: 700&euro;</h5>,
                ordered: false,
                scab: <h5>Price: 890&euro;</h5>,
                scab6bk: <h5>Price: 900&euro;</h5>
            },
            {
                nmbr: 5,
                catNum: 'Catalogue No. 2000215',
                // imgSrc: Gddj2000215,
                // imgSrcA: Gddj2000215A,
                // imgSrcB: Gddj2000215B,
                imgSrc:[Gddj2000215,Gddj2000215A],

                name: 'Pappenheimer',
                histAndGeo: '17th century. Central Europe.',
                desc: <div><h5>Description:</h5>The tendrilled basket <br />
                    is of classical design.</div>,
                stat: <div>Total length: 1200mm <br />
                    Length of the blade: 1020mm <br />
                    Width of the blade: 30mm <br />
                    Weight : 1350g</div>,
                price: <h5>Price: 1000&euro;</h5>,
                ordered: false,
                scab: <h5>Price: 1190&euro;</h5>,
                scab6bk: <h5>Price: 1200&euro;</h5>
            },
            {
                nmbr: 6,
                catNum: 'Catalogue No. 2000218',
                // imgSrc: Gddj2000218,
                // imgSrcA: Gddj2000218A,
                // imgSrcB: Gddj2000218B,
                imgSrc:[Gddj2000218,Gddj2000218A],

                name: 'Cavalry sword and dagger',
                histAndGeo: 'From about the year 1580. Central Europe.',
                desc: <div><h5>Description:</h5>The basket of the sword<br />
                    is decorated with<br />
                    engraved motifs</div>,
                stat: <div>Total length: 1120mm <br />
                    Length of the blade: 960mm <br />
                    Width of the blade: 40mm <br />
                    Weight : 1250g</div>,
                price: <h5>Price: 1000&euro;</h5>,
                ordered: false,
                scab: <h5>Price: 1190&euro;</h5>,
                scab6bk: <h5>Price: 1200&euro;</h5>
            },
            {
                nmbr: 7,
                catNum: 'Catalogue No. 2000213',
                // imgSrc: Gddj2000213,
                // imgSrcA: Gddj2000213A,
                // imgSrcB: Gddj2000213B,
                imgSrc:[Gddj2000213,Gddj2000213A,Gddj2000213B,Gddj2000213V],

                name: 'Bell-shaped rapier',
                histAndGeo: 'From about the year 1650. Southern Europe.',
                desc: <div><h5>Description:</h5>The bell and the pommel are decorated<br />
                    with engraved ornamentation.<br />
                    The edge of the bell is<br />
                    bent into a sleeve, the so called<br />
                    rompepuntas.</div>,
                stat: <div>Total length: 1140mm <br />
                    Length of the blade: 1000mm <br />
                    Width of the blade: 20mm <br />
                    Weight : 1080g </div>,
                price: <h5>Price: 730&euro;</h5>,
                ordered: false,
                scab: <h5>Price: 920&euro;</h5>,
                scab6bk: <h5>Price: 930&euro;</h5>
            },
            {
                nmbr: 8,
                catNum: 'Catalogue No. 2000223',
                // imgSrc: Gddj2000223a1,
                // imgSrcA: Gddj2000223a1A,
                // imgSrcB: Gddj2000223a1B,
                imgSrc:[Gddj2000223a1,Gddj2000223a1A,Gddj2000223a1B],

                name: 'Bell-shaped rapier',
                histAndGeo: 'From about the year 1650. Spain.',
                desc: <div><h5>Description:</h5>The bell and the pommel are decorated<br />
                    with engraved ornamentation.</div>,
                stat: <div>Total length: 1160mm <br />
                    Length of the blade: 1020mm <br />
                    Width of the blade: 20mm <br />
                    Weight : 1070g </div>,
                price: <h5>Price: 730&euro;</h5>,
                ordered: false,
                scab: <h5>Price: 920&euro;</h5>,
                scab6bk: <h5>Price: 930&euro;</h5>
            },
            {
                nmbr: 9,
                catNum: 'Catalogue No. 2000221',
                // imgSrc: Gddj2000221,
                // imgSrcA: Gddj2000221A,
                // imgSrcB: Gddj2000221B,
                imgSrc:[Gddj2000221,Gddj2000221A,Gddj2000221B],

                name: 'Sword',
                histAndGeo: '1590-1610. Europe.',
                desc: null,
                stat: <div>Total length: 1060mm <br />
                    Length of the blade: 920mm <br />
                    Width of the blade: 38mm <br />
                    Weight : 1190g </div>,
                price: <h5>Price: 1000&euro;</h5>,
                ordered: false,
                scab: <h5>Price: 1190&euro;</h5>,
                scab6bk: <h5>Price: 1200&euro;</h5>
            },
            {
                nmbr: 10,
                catNum: 'Catalogue No. 200025',
                // imgSrc: Gddj200025,
                // imgSrcA: Gddj200025A,
                // imgSrcB: Gddj200025B,
                imgSrc:[Gddj200025],

                name: 'Rapier',
                histAndGeo: '16-th century. Saxony.',
                desc: <div><h5>Description:</h5>The basket is of Saxon type.</div>,
                stat: <div>Total length: 1110mm <br />
                    Length of the blade: 960mm <br />
                    Width of the blade: 20mm <br />
                    Weight : 1110g</div>,
                price: <h5>Price: 700&euro;</h5>,
                ordered: false,
                scab: <h5>Price: 890&euro;</h5>,
                scab6bk: <h5>Price: 900&euro;</h5>
            },
            {
                nmbr: 11,
                catNum: 'Catalogue No. 2000211',
                // imgSrc: Gddj2000211,
                // imgSrcA: Gddj2000211A,
                // imgSrcB: Gddj2000211B,
                imgSrc:[Gddj2000211,Gddj2000211A,Gddj2000211B,Gddj2000211V,Gddj2000211G],

                name: 'Schiavona',
                histAndGeo: '17th century. Northern Italy.',
                desc: <div><h5>Description:</h5>The displayed weapon is <br />
                    manufactured<br />
                    for left-hand use.</div>,
                stat: <div>Total length: 1000mm <br />
                    Length of the blade: 830mm <br />
                    Width of the blade: 40mm <br />
                    Weight : 1250g </div>,
                price: <h5>Price: 1100&euro;</h5>,
                ordered: false,
                scab: <h5>Price: 1290&euro;</h5>,
                scab6bk: <h5>Price: 1300&euro;</h5>
            }, {
                nmbr: 12,
                catNum: 'Catalogue No. 2000222',
                // imgSrc: Gddj2000222,
                // imgSrcA: Gddj2000222A,
                // imgSrcB: Gddj2000222B,
                imgSrc:[Gddj2000222,Gddj2000222A,Gddj2000222B],

                name: 'Rapier',
                histAndGeo: '1590-1610. Europe.',
                desc: <div><h5>Description:</h5>The hilt of the rapier is decorated <br />
                    with engraved ornamentation </div>,
                stat: <div> Total length: 1130mm <br />
                    Length of the blade: 990mm <br />
                    Width of the blade: 26mm <br />
                    Weight : 1160g</div>,
                price: <h5>Price: 1000&euro;</h5>,
                ordered: false,
                scab: <h5>Price: 1190&euro;</h5>,
                scab6bk: <h5>Price: 1200&euro;</h5>
            },
            {
                nmbr: 13,
                catNum: 'Catalogue No. 200028',
                // imgSrc: Gddj200028,
                // imgSrcA: Gddj200028A,
                // imgSrcB: Gddj200028B,
                imgSrc:[Gddj200028,Gddj200028A],

                name: 'Rapier',
                histAndGeo: 'Early 17th century. Southern and Central Europe..',
                desc: <div><h5>Description:</h5>The basket is formed by<br />
                    the shield and an arrangement<br />
                    of protective rods combined with<br />
                    the shell.</div>,
                stat: <div>Total length: 1150mm <br />
                    Length of the blade: 1000mm <br />
                    Width of the blade: 28mm <br />
                    Weight : 1300g</div>,
                price: <h5>Price: 800&euro;</h5>,
                ordered: false,
                scab: <h5>Price: 990&euro;</h5>,
                scab6bk: <h5>Price: 1000&euro;</h5>
            }
        ],
        modalObjRaprs: {
            nmbr: null,
            catNum: null,
            imgSrc: [],
            name: null,
            histAndGeo: null,
            desc: null,
            stat: null,
            price: null,
            ordered: null,
            scab: null,
            scab6bk: null
        },
        modal: false,
        modal2: false,
        totalPrice: null,
        orderedPokazatelj4bk: false,
        orderedPokazatelj6bk: false,
        orderedPokazateljNone: false,
        d: new Date(),
        emailValue: '',
        emailValue2: ''
    }
    toggleHandler = () => {
        let modalTog = this.state.modal
        this.setState({
            modal: !modalTog,
            orderedPokazatelj4bk: false,
            orderedPokazatelj6bk: false,
            orderedPokazateljNone: false
        });
    }
    toggleHandler2 = () => {
        let modalTog = this.state.modal2
        this.setState({
            modal2: !modalTog
        });
    }
    koriceHandler = () => {
        let abv = "";
        if (this.state.orderedPokazatelj4bk && (!this.state.orderedPokazatelj6bk && !this.state.orderedPokazateljNone)) {
            abv = "With scabbard (4 buckles on hanger)."
        }
        else if (this.state.orderedPokazatelj6bk && (!this.state.orderedPokazatelj4bk && !this.state.orderedPokazateljNone)) {
            abv = "With scabbard (6 buckles on hanger)."
        }
        else if (!this.state.orderedPokazatelj6bk && (!this.state.orderedPokazatelj4bk && this.state.orderedPokazateljNone)) {
            abv = "No scabbard."
        }
        else{
            return
        }

        return abv
    }
      emailValHandler = (event) =>{
    this.setState({
      emailValue:event.target.value
    })
  }
    emailValHandler2 = (event) =>{
    this.setState({
      emailValue2:event.target.value
    })
  }
    render() {

        const prodOdd = this.state.productsRapp.map(x => {
            let modulator = x.nmbr % 2;
            let modRes = false;
            if (modulator > 0) {
                modRes = false
            }
            else {
                modRes = true
            }
            return (!modRes ? <div key={x.catNum}>

                <div className='cardac spaceBT'>
                    <CardTitle><h2 className="titlac">{x.name}</h2></CardTitle>
                    <SimpleSlider img={x.imgSrc} />                   
                    <CardBody>
                        <CardText>{x.stat}</CardText>
                        <CardText>{''}</CardText>
                        <Button color="secondary" id={'a' + x.nmbr} className='specBtn'>
                            Specification
                        </Button>
                        <UncontrolledCollapse toggler={"#a" + x.nmbr}>
                            <Card>
                                <CardBody>
                                    <CardText><h5>Period and place:</h5></CardText>
                                    <CardSubtitle>{x.histAndGeo}</CardSubtitle>
                                    <CardText>{''}</CardText>
                                    <CardSubtitle>{x.desc}</CardSubtitle>
                                    <CardText>{''}</CardText>
                                    <CardText><h6>{x.catNum}</h6></CardText>
                                    <CardText><h5>{x.price}</h5></CardText>
                                    <CardText>Lether scabbard with belt(4 buckles on hanger) +190&euro;<br />Lether scabbard with belt(6 buckles on hanger) +200&euro;</CardText>
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                        <CardText>{''}</CardText>
                        <CardText>{x.ordered}</CardText>
                        <Button color="info"className="orderac" onClick={() => {
                            this.state.productsRapp.map(y => {
                                if (y.nmbr === x.nmbr) {
                                    return this.setState({
                                        modalObjRaprs: { ...y }
                                    })
                                }
                                else {
                                    return
                                }
                            });
                            this.toggleHandler()
                        }}>Order</Button>
                    </CardBody>
                </div>

            </div> : null)

        })

        const prodEven = this.state.productsRapp.map(x => {
            let modulator = x.nmbr % 2;
            let modRes = true;
            if (modulator === 0) {
                modRes = true;
            }
            else if (x.nmbr > 16) {
                modRes = false;
            }
            else {
                modRes = false;
            }

            return (modRes ? <div key={x.catNum}>

                <div className='cardac spaceBT'>
                    <CardTitle><h2 className="titlac">{x.name}</h2></CardTitle>
                    <SimpleSlider img={x.imgSrc} />                   
                    <CardBody>
                        <CardText>{x.stat}</CardText>
                        <CardText>{''}</CardText>
                        <Button color="secondary" id={'a' + x.nmbr} className='specBtn'>
                            Specification
                        </Button>
                        <UncontrolledCollapse toggler={"#a" + x.nmbr}>
                            <Card>
                                <CardBody>
                                    <CardText><h5>Period and place:</h5></CardText>
                                    <CardSubtitle>{x.histAndGeo}</CardSubtitle>
                                    <CardText>{''}</CardText>
                                    <CardSubtitle>{x.desc}</CardSubtitle>
                                    <CardText>{''}</CardText>
                                    <CardText><h6>{x.catNum}</h6></CardText>
                                    <CardText><h5>{x.price}</h5></CardText>
                                    <CardText>Lether scabbard with belt(4 buckles on hanger) +190&euro;<br />Lether scabbard with belt(6 buckles on hanger) +200&euro;</CardText>
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                        <CardText>{''}</CardText>
                        <CardText>{x.ordered}</CardText>
                        <Button color="info"className="orderac" onClick={() => {
                            this.state.productsRapp.map(y => {
                                if (y.nmbr === x.nmbr) {
                                    return this.setState({
                                        modalObjRaprs: { ...y }
                                    })
                                }
                                else {
                                    return
                                }
                            });
                            this.toggleHandler()
                        }}>Order</Button>
                    </CardBody>
                </div>

            </div> : null)
        })
        return <div style={{backgroundImage:"url("+Plocice2+")"}}>
              <div>
                <Jumbotron style={{borderBottom:'10px solid #333333',color:'lightgray',background:'#333333',position: 'relative'}}>
                    <h1 className="display-3">Rapiers</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p className="lead">
                        <Button color="primary" onClick={this.toggleHandler2}>Ask me</Button>
                       
                    </p>
                </Jumbotron>
            </div>
            <Container> <Row>
            <Col md="6">{prodOdd} </Col>
            <Col md="6">{prodEven} </Col>
        </Row>
        </Container>

            <Modal isOpen={this.state.modal} toggle={this.toggleHandler} >
                <ModalHeader toggle={this.toggleHandler}>Order Summary</ModalHeader>
                <ModalBody>
                    <Container>
                        <Row>
                            <Col md="6"><CardImg src={this.state.modalObjRaprs.imgSrc[0]} alt="imgNotFound...O.o" /></Col>
                            <Col md="6">
                                <h4>{this.state.modalObjRaprs.name}</h4>
                                <h6>{this.state.modalObjRaprs.histAndGeo}</h6>
                                <p>{this.state.modalObjRaprs.catNum}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <br />
                                <p>{this.state.modalObjRaprs.desc}</p>
                                <h5>Specification:</h5>
                                <p>{this.state.modalObjRaprs.stat}</p>
                                <br />
                                <form id="contact-form" action={"https://formspree.io/"+this.state.emailValue}
                                    method="POST">
                                    <input type="hidden" name="_subject" value="New order for you!" />
                                                                        
                                     <input type="hidden" name="_next" value="https://smithorders-1e194.firebaseapp.com/OrderMade" />

                                    <p>* is required</p>
                                    <input className="inputUnos" type="text" name="Name" placeholder="Your Full Name*" required />
                                    <br />
                                    <input className="inputUnos" type="email" name="Email" placeholder="Your Email*" onChange={(event)=>this.emailValHandler(event)} required />
                                    <br />
                                    <select className="inputUnos" name='Country' required>
                                        <option value="None" selected disabled>--Select country--*</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Åland_Islands">Åland Islands</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="American_Samoa">American Samoa</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Anguilla">Anguilla</option>
                                        <option value="Antigua_and_Barbuda">Antigua and Barbuda</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Aruba">Aruba</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bermuda">Bermuda</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Bolivia">Bolivia, Plurinational State of</option>
                                        <option value="Bonaire">Bonaire, Sint Eustatius and Saba</option>
                                        <option value="Bosnia_and_Herzegovina">Bosnia and Herzegovina</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Bouvet_Island">Bouvet Island</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="British_Indian_Ocean_Territory">British Indian Ocean Territory</option>
                                        <option value="Brunei">Brunei Darussalam</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina_Faso">Burkina Faso</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Cape_Verde">Cape Verde</option>
                                        <option value="Cayman_Islands">Cayman Islands</option>
                                        <option value="Central_African_Republic">Central African Republic</option>
                                        <option value="Chad">Chad</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Christmas_Island">Christmas Island</option>
                                        <option value="Cocos_(Keeling)_Islands">Cocos (Keeling) Islands</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comoros">Comoros</option>
                                        <option value="Congo">Congo</option>
                                        <option value="Congo">Congo, the Democratic Republic of the</option>
                                        <option value="Cook_Islands">Cook Islands</option>
                                        <option value="Costa_Rica">Costa Rica</option>
                                        <option value="Côte_d'Ivoire">Côte d'Ivoire</option>
                                        <option value="Croatia">Croatia</option>
                                        <option value="Cuba">Cuba</option>
                                        <option value="Curaçao">Curaçao</option>
                                        <option value="Cyprus">Cyprus</option>
                                        <option value="Czech_Republic">Czech Republic</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Dominican_Republic">Dominican Republic</option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="El_Salvador">El Salvador</option>
                                        <option value="Equatorial_Guinea">Equatorial Guinea</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Falkland_Islands">Falkland Islands (Malvinas)</option>
                                        <option value="Faroe_Islands">Faroe Islands</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="French_Guiana">French Guiana</option>
                                        <option value="French_Polynesia">French Polynesia</option>
                                        <option value="French_Southern_Territories">French Southern Territories</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Gambia">Gambia</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Gibraltar">Gibraltar</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Greenland">Greenland</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guadeloupe">Guadeloupe</option>
                                        <option value="Guam">Guam</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guernsey">Guernsey</option>
                                        <option value="Guinea">Guinea</option>
                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                        <option value="Guyana">Guyana</option>
                                        <option value="Haiti">Haiti</option>
                                        <option value="Heard_Island_and_McDonald_Islands">Heard Island and McDonald Islands</option>
                                        <option value="Vatican">Holy See (Vatican City State)</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hong_Kong">Hong Kong</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Iran">Iran, Islamic Republic of</option>
                                        <option value="Iraq">Iraq</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Isle_of_Man">Isle of Man</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Jersey">Jersey</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Korea_Democratic_People's_Republic_of">Korea, Democratic People's Republic of</option>
                                        <option value="Korea_Republic_of">Korea, Republic of</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Lao">Lao People's Democratic Republic</option>
                                        <option value="Latvia">Latvia</option>
                                        <option value="Lebanon">Lebanon</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Libya">Libya</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lithuania">Lithuania</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Macao">Macao</option>
                                        <option value="Macedonia">Macedonia, the former Yugoslav Republic of</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Mali">Mali</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Marshall_Islands">Marshall Islands</option>
                                        <option value="Martinique">Martinique</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mauritius">Mauritius</option>
                                        <option value="Mayotte">Mayotte</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Micronesia">Micronesia, Federated States of</option>
                                        <option value="Moldova">Moldova, Republic of</option>
                                        <option value="Monaco">Monaco</option>
                                        <option value="Mongolia">Mongolia</option>
                                        <option value="Montenegro">Montenegro</option>
                                        <option value="Montserrat">Montserrat</option>
                                        <option value="Morocco">Morocco</option>
                                        <option value="Mozambique">Mozambique</option>
                                        <option value="Myanmar">Myanmar</option>
                                        <option value="Namibia">Namibia</option>
                                        <option value="Nauru">Nauru</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="New_Caledonia">New Caledonia</option>
                                        <option value="New_Zealand">New Zealand</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Niger">Niger</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="Niue">Niue</option>
                                        <option value="Norfolk_Island">Norfolk Island</option>
                                        <option value="Northern_Mariana_Islands">Northern Mariana Islands</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Palau">Palau</option>
                                        <option value="Palestina">Palestinian Territory, Occupied</option>
                                        <option value="Panama">Panama</option>
                                        <option value="Papua_New_Guinea">Papua New Guinea</option>
                                        <option value="Paraguay">Paraguay</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Pitcairn">Pitcairn</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Puerto_Rico">Puerto Rico</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Réunion">Réunion</option>
                                        <option value="Romania">Romania</option>
                                        <option value="Russia">Russian Federation</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="Saint_Barthélemy">Saint Barthélemy</option>
                                        <option value="Saint_Helena_Ascension_and_Tristan_da_Cunha">Saint Helena, Ascension and Tristan da Cunha</option>
                                        <option value="Saint_Kitts_and_Nevis">Saint Kitts and Nevis</option>
                                        <option value="Saint_Lucia">Saint Lucia</option>
                                        <option value="Saint_Martin_(French_part)">Saint Martin (French part)</option>
                                        <option value="Saint_Pierre_and_Miquelon">Saint Pierre and Miquelon</option>
                                        <option value="Saint_Vincent_and_the_Grenadines">Saint Vincent and the Grenadines</option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="San_Marino">San Marino</option>
                                        <option value="Sao_Tome_and_Principe">Sao Tome and Principe</option>
                                        <option value="Saudi_Arabia">Saudi Arabia</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Serbia">Serbia</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra_Leone">Sierra Leone</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Sint_Maarten_(Dutch_part)">Sint Maarten (Dutch part)</option>
                                        <option value="Slovakia">Slovakia</option>
                                        <option value="Slovenia">Slovenia</option>
                                        <option value="Solomon_Islands">Solomon Islands</option>
                                        <option value="Somalia">Somalia</option>
                                        <option value="South_Africa">South Africa</option>
                                        <option value="South_Georgia_and_the_South_Sandwich_Islands">South Georgia and the South Sandwich Islands</option>
                                        <option value="South_Sudan">South Sudan</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Sri_Lanka">Sri Lanka</option>
                                        <option value="Sudan">Sudan</option>
                                        <option value="Suriname">Suriname</option>
                                        <option value="Svalbard_and_Jan_Mayen">Svalbard and Jan Mayen</option>
                                        <option value="Swaziland">Swaziland</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Syria">Syrian Arab Republic</option>
                                        <option value="Taiwan">Taiwan, Province of China</option>
                                        <option value="Tajikistan">Tajikistan</option>
                                        <option value="Tanzania">Tanzania, United Republic of</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Timor-Leste">Timor-Leste</option>
                                        <option value="Togo">Togo</option>
                                        <option value="Tokelau">Tokelau</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Trinidad_and_Tobago">Trinidad and Tobago</option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Turks_and_Caicos_Islands">Turks and Caicos Islands</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United_Arab_Emirates">United Arab Emirates</option>
                                        <option value="United_Kingdom">United Kingdom</option>
                                        <option value="United_States">United States</option>
                                        <option value="United_States_Minor_Outlying_Islands">United States Minor Outlying Islands</option>
                                        <option value="Uruguay">Uruguay</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Venezuela">Venezuela, Bolivarian Republic of</option>
                                        <option value="Vietnam">Viet Nam</option>
                                        <option value="Virgin_Islands_British">Virgin Islands, British</option>
                                        <option value="Virgin_Islands_U.S">Virgin Islands, U.S.</option>
                                        <option value="Wallis_and_Futuna">Wallis and Futuna</option>
                                        <option value="Western_Sahara">Western Sahara</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                    <br />
                                    <input className="inputUnos" type="text" name="Address" placeholder="Your address 'City/Street/Number'*" required />
                                    <br />
                                    <input className="inputUnos" type="text" name="Zip_Code" placeholder="Zip Code*" required />
                                    <br />
                                    <textarea className="inputUnos" name="Comments" placeholder="Notes (optional)" style={{ resize: 'none' }}></textarea>
                                    <br />
                                    <input type="hidden" name="Order_Summary" value={this.state.modalObjRaprs.name + " " + this.state.modalObjRaprs.catNum + " " + this.koriceHandler()} />

                                    <input id="rad1" type="radio" name='_' value="_"
                                        onChange={() => {
                                            let checkBox = document.getElementById("rad1");

                                            if (checkBox.checked === true) {
                                                this.setState(() => {
                                                    return {
                                                        orderedPokazatelj4bk: true,
                                                        orderedPokazatelj6bk: false,
                                                        orderedPokazateljNone: false
                                                    };
                                                });
                                            }
                                            else {
                                                this.setState(() => {
                                                    return { orderedPokazatelj4bk: false };
                                                });
                                            }
                                        }}
                                    /> Leather scabbard included (4 buckles on hanger)<br />
                                    <input id="rad2" type="radio" name='_' value="_"
                                        onChange={() => {
                                            let checkBox = document.getElementById("rad2");

                                            if (checkBox.checked === true) {
                                                this.setState(() => {
                                                    return {
                                                        orderedPokazatelj4bk: false,
                                                        orderedPokazatelj6bk: true,
                                                        orderedPokazateljNone: false
                                                    };
                                                });
                                            }
                                            else {
                                                this.setState(() => {
                                                    return { orderedPokazatelj6bk: false };
                                                });
                                            }
                                        }} /> Leather scabbard included (6 buckles on hanger)<br />
                                    <input id="radNone" type="radio" name='_' value="_" defaultChecked onChange={() => {
                                        let checkBox = document.getElementById("radNone");

                                        if (checkBox.checked === true) {
                                            this.setState(() => {
                                                return {
                                                    orderedPokazatelj4bk: false,
                                                    orderedPokazatelj6bk: false,
                                                    orderedPokazateljNone: true
                                                };
                                            });
                                        }
                                        else {
                                            this.setState(() => {
                                                return { orderedPokazateljNone: false };
                                            });
                                        }
                                    }} /> Without scabbard
                                    <br />
                                    <br />
                                    <h5>{
                                        (this.state.orderedPokazatelj4bk === true && this.state.orderedPokazatelj6bk === false && this.state.orderedPokazateljNone === false) ? <div>{this.state.modalObjRaprs.scab}</div> : (this.state.orderedPokazatelj6bk === true && this.state.orderedPokazatelj4bk === false && this.state.orderedPokazateljNone === false) ? <div>{this.state.modalObjRaprs.scab6bk}</div> :
                                            (this.state.orderedPokazateljNone === true && this.state.orderedPokazatelj4bk === false &&
                                                this.state.orderedPokazatelj6bk === false) ? <div>{this.state.modalObjRaprs.price}</div> : <div>{this.state.modalObjRaprs.price}</div>
                                    }</h5>
                                    <ModalFooter>
                                        <Button color="info" type="submit" value="Send" className="orderac">Order</Button><br />
                                        <Button color="secondary"className="specBtn" onClick={this.toggleHandler}>Exit</Button>
                                    </ModalFooter>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </ModalBody>
            </Modal>

                        <div>
        <Modal isOpen={this.state.modal2} toggle={this.toggleHandler2}>

          <ModalBody style={{background:'lightgrey', borderRadius:'5px'}}>
          <form className="jumboForm" action={"https://formspree.io/"+this.state.emailValue2}
                                    method="POST">
                  <input type="hidden" name="_subject" value="New message for you!" />
                  <input type="hidden" name="_next" value="https://smithorders-1e194.firebaseapp.com/OrderMade" />
                  <input type="text" name="Name:" placeholder="Your name" required/>
                  <br />
                  <input type="email" name="Email:" placeholder="Your email" onChange={(event)=>this.emailValHandler2(event)} required/>
                  <br />
                  <textarea name="Message:" style={{ resize: 'none' }} rows="7" placeholder="Write me a message..."required></textarea>
                  <br />
                  <Button style={{width:'100%',opacity:'1'}} color="primary" type="submit" value="Send"><i style={{ fontSize: "24px" }} class="fa">&#xf1d9;</i> Send</Button>
                </form>
                <Button style={{width:'100%'}} color="secondary" onClick={this.toggleHandler2}>Cancel</Button>
          </ModalBody>
        </Modal>
      </div>
            <Futer />
        </div>
    }
}

export default Rapiers