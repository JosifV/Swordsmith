import React, { Component } from 'react';
import './Daggers.css';
import '../SparkExp.css'
import Futer from '../Futer/Futer'
// import Magnifier from 'react-magnifier';
// import DemoCarousel from './CorouzelDagg'
import SimpleSlider from '../Slide'
import {
    Jumbotron, Button,Container, Row, Col, Card, CardText, CardBody,
    CardTitle, CardSubtitle, UncontrolledCollapse, Modal, ModalHeader, ModalBody, ModalFooter, CardImg
} from 'reactstrap';
import Plocice2 from '../assets/plocice2.jpg'
import Ezhz200034 from '../assets/daggers/yzeto/200034.jpg';
import Ezhz200034A from '../assets/daggers/yzeto/200034A.jpg';
import Ezhz200034B from '../assets/daggers/yzeto/200034B.jpg';

import Ezhz2000313 from '../assets/daggers/yzeto/2000313.jpg';
import Ezhz2000313A from '../assets/daggers/yzeto/2000313A.jpg';
import Ezhz2000313B from '../assets/daggers/yzeto/2000313B.jpg';

import Ezhz200038 from '../assets/daggers/yzeto/200038.jpg';
import Ezhz200038A from '../assets/daggers/yzeto/200038A.jpg';
import Ezhz200038B from '../assets/daggers/yzeto/200038B.jpg';
import Ezhz200038V from '../assets/daggers/yzeto/200038V.jpg';


class Daggers extends Component {

    state = {
        productsDagg: [
            {
                nmbr: 1,
                catNum: 'Catalogue No. 200034',
   /*              imgSrc: Ezhz200034,
                imgSrcA: Ezhz200034A,
                imgSrcB: Ezhz200034B, */
                imgSrc:[Ezhz200034, Ezhz200034A, Ezhz200034B],
                name: 'Dagger "kursachsen"',
                histAndGeo: '1550-1600. Saxony.',
                desc: <div><h5>Description:</h5> The handle is
                bound with wire. <br />The pommel is
                decorated by engraving.</div>,
                stat: <div> Total length: 470mm <br />
                    Length of the blade: 325mm <br />
                    Width of the blade: 24mm <br />
                    Weight : 440g</div>,
                price: '240',
                ordered: false,
                scab: '310'
            },
            {
                nmbr: 2,
                catNum: 'Catalogue No. 2000313',
          /*       imgSrc: Ezhz2000313,
                imgSrcA: Ezhz2000313A,
                imgSrcB: Ezhz2000313B, */
                imgSrc:[Ezhz2000313, Ezhz2000313A, Ezhz2000313B],
                name: 'Cavalry dagger',
                histAndGeo: 'From about the year 1580. Central Europe.',
                desc: <div><h5>Description:</h5> The hilt of the dagger <br />
                    is decorated with engraved motifs.</div>,
                stat: <div> Total length: 470mm <br />
                    Length of the blade: 340mm <br />
                    Width of the blade: 30mm <br />
                    Weight : 490g</div>,
                price: '280',
                ordered: false,
                scab: '350'
            },
            {
                nmbr: 3,
                catNum: 'Catalogue No. 200038',
                /* imgSrc: Ezhz200038,
                imgSrcA: Ezhz200038A,
                imgSrcB: Ezhz200038B, */
                imgSrc:[Ezhz200038, Ezhz200038A, Ezhz200038B,Ezhz200038V],
                name: 'Spanish dagger',
                histAndGeo: 'Beginning of the 17th century. Southern Europe.',
                desc: <div><h5>Description:</h5>The typical left-hand dagger with <br />
                    the a long quillon. <br />
                    The quillon is formed with <br />
                    a triangular shield with the collar <br />
                    - known as a "rompepuntas".</div>,
                stat: <div>  Total length: 590mm <br />
                    Length of the blade: 450mm <br />
                    Width of the blade: 45mm <br />
                    Weight : 680g</div>,
                price: '500',
                ordered: false,
                scab: '570'
            }
        ],
        modalObjDagg: {
            nmbr: null,
            catNum: null,
            imgSrc: [],
            name: null,
            histAndGeo: null,
            desc: null,
            stat: null,
            price: null,
            ordered: null,
            scab: null
        },
        modal: false,
        modal2: false,
        totalPrice: null,
        orderedPokazatelj: false,
        emailValue: '',
        emailValue2: ''
    }

    toggleHandler = () => {
        let modalTog = this.state.modal
        this.setState({
            modal: !modalTog,
            orderedPokazatelj: false
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
        if (this.state.orderedPokazatelj) {
            abv = "With scabbard."
        }
        else {
            abv = "No scabbard."
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
        
        const prodOdd = this.state.productsDagg.map(x => {
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
                                    <CardText><h5>Price: {x.price}&euro;</h5></CardText>
                                    <CardText>Lether scabbard +70&euro;</CardText>
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                        <CardText>{''}</CardText>
                        <CardText>{x.ordered}</CardText>
                        <Button color="info"className="orderac" onClick={() => {
                            this.state.productsDagg.map(y => {
                                if (y.catNum === x.catNum) {
                                    return this.setState({
                                        modalObjDagg: { ...y }
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

        const prodEven = this.state.productsDagg.map(x => {
            let modulator = x.nmbr % 2;
            let modRes = true;
            if (modulator === 0) {
                modRes = true;
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
                                    <CardText><h5>Price: {x.price}&euro;</h5></CardText>
                                    <CardText>Lether scabbard +70&euro;</CardText>
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                        <CardText>{''}</CardText>
                        <CardText>{x.ordered}</CardText>
                        <Button color="info"className="orderac" onClick={() => {
                            this.state.productsDagg.map(y => {
                                if (y.catNum === x.catNum) {
                                    return this.setState({
                                        modalObjDagg: { ...y }
                                    });
                                }
                                else {
                                    return
                                }
                            });
                            this.toggleHandler();
                        }}>Order</Button>
                    </CardBody>
                </div>

            </div> : null)
        })
        return <div style={{backgroundImage:"url("+Plocice2+")"}}>
                          <div>
                <Jumbotron style={{borderBottom:'10px solid #333333',color:'lightgray',background:'#333333',position: 'relative'}}>
                    <h1 className="display-3">Daggers</h1>
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
                            <Col md="6"><CardImg src={this.state.modalObjDagg.imgSrc[0]} alt="imgNotFound...O.o" /></Col>
                            <Col md="6">
                                <h4>{this.state.modalObjDagg.name}</h4>
                                <h6>{this.state.modalObjDagg.histAndGeo}</h6>
                                <p>{this.state.modalObjDagg.catNum}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <br />
                                <p>{this.state.modalObjDagg.desc}</p>
                                <h5>Specification:</h5>
                                <p>{this.state.modalObjDagg.stat}</p>
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
                                    <input type="hidden" name="Order_Summary" value={ this.state.modalObjDagg.name +" "+ this.state.modalObjDagg.catNum + " "+this.koriceHandler()} />

                                    <input id="checkBox" type="checkbox" value="Scabbard" onChange={() => {

                                        let checkBox = document.getElementById("checkBox");

                                        if (checkBox.checked === true) {
                                            this.setState(() => {
                                                return { orderedPokazatelj: true };
                                            });
                                        }
                                        else {
                                            this.setState(() => {
                                                return { orderedPokazatelj: false };
                                            });
                                        }
                                    }
                                    } /> With leather scabbard
                                    <br />
                                    <br />
                                    <h5>Total price: {this.state.orderedPokazatelj ? <div>{this.state.modalObjDagg.scab}&euro;</div> : <div>{this.state.modalObjDagg.price}&euro;</div>}</h5>
                                    <ModalFooter>
                                        <Button color="info"type="submit" value="Send" className="orderac">Order</Button><br />
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
<Futer/>
        </div>
    }
}

export default Daggers