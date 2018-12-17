import React, { Component } from "react";
import './Swords.css';
import Futer from '../Futer/Futer'
// import Magnifier from 'react-magnifier';
import SimpleSlider from '../Slide'

import {
    Jumbotron, Button, Container, Row, Col, Card, CardText, CardBody,
    CardTitle, CardSubtitle, UncontrolledCollapse, Modal, ModalHeader, ModalBody, ModalFooter, CardImg
} from 'reactstrap';
import Plocice2 from '../assets/plocice2.jpg'
import Abv200011 from '../assets/swords/yzeti/200011.jpg';
import Abv200017 from '../assets/swords/yzeti/Sword200017.jpg';
import Abv2000127 from '../assets/swords/yzeti/2000127.jpg';
import Abv2000119 from '../assets/swords/yzeti/2000119.jpg';
import Abv200117 from '../assets/swords/yzeti/sword2000117.jpg';
import Abv200012 from '../assets/swords/yzeti/sword200012.jpg';
import Abv2000116 from '../assets/swords/yzeti/2000116.jpg';
import Abv2000111 from '../assets/swords/yzeti/2000111.jpg';
import Abv2000110 from '../assets/swords/yzeti/2000110.jpg';
import Abv2000125 from '../assets/swords/yzeti/2000125.jpg';
import Abv2000132 from '../assets/swords/yzeti/2000132.jpg';
import Abv2000128 from '../assets/swords/yzeti/2000128.jpg';
import Abv2000130 from '../assets/swords/yzeti/2000130.jpg';
import Abv200015 from '../assets/swords/yzeti/200015.jpg';
import Abv200014 from '../assets/swords/yzeti/200014.jpg';
import Abv200010 from '../assets/swords/yzeti/200010.jpg';
import Abv2000123 from '../assets/swords/yzeti/2000123.jpg';
import Abv2000126 from '../assets/swords/yzeti/2000126.jpg';
import Abv2000131 from '../assets/swords/yzeti/2000131.jpg';
import Abv2000134 from '../assets/swords/yzeti/2000134.jpg';
import Abv2000133 from '../assets/swords/yzeti/2000133.jpg';
import Abv200018 from '../assets/swords/yzeti/200018.jpg';
import Abv2000129 from '../assets/swords/yzeti/2000129.jpg';
import Abv2000120 from '../assets/swords/yzeti/2000120.jpg';
import Abv2000114 from '../assets/swords/yzeti/2000114.jpg';
import Abv2000115 from '../assets/swords/yzeti/2000115.jpg';
import Abv2000122 from '../assets/swords/yzeti/2000122.jpg';
import Abv2000124 from '../assets/swords/yzeti/2000124.jpg';
import Abv2000112 from '../assets/swords/yzeti/2000112.jpg';

// import Abv200011A from '../assets/swords/yzeti/200011A.jpg';
// import Abv200017A from '../assets/swords/yzeti/Sword200017A.jpg';
import Abv2000127A from '../assets/swords/yzeti/2000127A.jpg';
import Abv2000119A from '../assets/swords/yzeti/2000119A.jpg';
import Abv200117A from '../assets/swords/yzeti/sword2000117A.jpg';
import Abv200012A from '../assets/swords/yzeti/sword200012A.jpg';
// import Abv2000116A from '../assets/swords/yzeti/2000116A.jpg';
import Abv2000111A from '../assets/swords/yzeti/2000111A.jpg';
import Abv2000110A from '../assets/swords/yzeti/2000110A.jpg';
// import Abv2000125A from '../assets/swords/yzeti/2000125A.jpg';
import Abv2000132A from '../assets/swords/yzeti/2000132A.jpg';
import Abv2000128A from '../assets/swords/yzeti/2000128A.jpg';
import Abv2000130A from '../assets/swords/yzeti/2000130A.jpg';
// import Abv200015A from '../assets/swords/yzeti/200015A.jpg';
// import Abv200014A from '../assets/swords/yzeti/200014A.jpg';
import Abv200010A from '../assets/swords/yzeti/200010A.jpg';
// import Abv2000123A from '../assets/swords/yzeti/2000123A.jpg';
// import Abv2000126A from '../assets/swords/yzeti/2000126A.jpg';
import Abv2000131A from '../assets/swords/yzeti/2000131A.jpg';
import Abv2000134A from '../assets/swords/yzeti/2000134A.jpg';
import Abv2000133A from '../assets/swords/yzeti/2000133A.jpg';
import Abv200018A from '../assets/swords/yzeti/200018A.jpg';
import Abv2000129A from '../assets/swords/yzeti/2000129A.jpg';
import Abv2000120A from '../assets/swords/yzeti/2000120A.jpg';
import Abv2000114A from '../assets/swords/yzeti/2000114A.jpg';
import Abv2000115A from '../assets/swords/yzeti/2000115A.jpg';
import Abv2000122A from '../assets/swords/yzeti/2000122A.jpg';
import Abv2000124A from '../assets/swords/yzeti/2000124A.jpg';
// import Abv2000112A from '../assets/swords/yzeti/2000112A.jpg';

// import Abv200011B from '../assets/swords/yzeti/200011B.jpg';
// import Abv200017B from '../assets/swords/yzeti/Sword200017B.jpg';
// import Abv2000127B from '../assets/swords/yzeti/2000127B.jpg';
import Abv2000119B from '../assets/swords/yzeti/2000119B.jpg';
import Abv200117B from '../assets/swords/yzeti/sword2000117B.jpg';
// import Abv200012B from '../assets/swords/yzeti/sword200012B.jpg';
// import Abv2000116B from '../assets/swords/yzeti/2000116B.jpg';
// import Abv2000111B from '../assets/swords/yzeti/2000111B.jpg';
// import Abv2000110B from '../assets/swords/yzeti/2000110B.jpg';
// import Abv2000125B from '../assets/swords/yzeti/2000125B.jpg';
import Abv2000132B from '../assets/swords/yzeti/2000132B.jpg';
import Abv2000128B from '../assets/swords/yzeti/2000128B.jpg';
// import Abv2000130B from '../assets/swords/yzeti/2000130B.jpg';
// import Abv200015B from '../assets/swords/yzeti/200015B.jpg';
// import Abv200014B from '../assets/swords/yzeti/200014B.jpg';
import Abv200010B from '../assets/swords/yzeti/200010B.jpg';
// import Abv2000123B from '../assets/swords/yzeti/2000123B.jpg';
// import Abv2000126B from '../assets/swords/yzeti/2000126B.jpg';
import Abv2000131B from '../assets/swords/yzeti/2000131B.jpg';
// import Abv2000134B from '../assets/swords/yzeti/2000134B.jpg';
import Abv2000133B from '../assets/swords/yzeti/2000133B.jpg';
import Abv200018B from '../assets/swords/yzeti/200018B.jpg';
import Abv2000129B from '../assets/swords/yzeti/2000129B.jpg';
// import Abv2000120B from '../assets/swords/yzeti/2000120B.jpg';
import Abv2000114B from '../assets/swords/yzeti/2000114B.jpg';
import Abv2000115B from '../assets/swords/yzeti/2000115B.jpg';
// import Abv2000122B from '../assets/swords/yzeti/2000122B.jpg';
import Abv2000124B from '../assets/swords/yzeti/2000124B.jpg';
// import Abv2000112B from '../assets/swords/yzeti/2000112B.jpg';

import Abv2000132V from '../assets/swords/yzeti/2000132V.jpg';

class Swords extends Component {

    state = {
        products: [
            {
                nmbr: 1,
                catNum: 'Catalogue No. 200011',
                // imgSrc: Abv200011,
                // imgSrcA: Abv200011A,
                // imgSrcB: Abv200011B,
                imgSrc:[Abv200011],

                name: 'Spanish Sword',
                histAndGeo: '1450-1500. Spain.',
                desc: <div><h5>Description:</h5>A-double edged sword with protective bows under the quillon.</div>,
                stat: <div>Total length: 1010 mm <br /> Length of the blade: 850 mm <br /> Width of the blade: 38 mm <br /> Weight : 1100 g</div>,
                price: '700',
                ordered: false,
                scab: '870'
            },
            {
                nmbr: 2,
                catNum: 'Catalogue No. 200017',
                // imgSrc: Abv200017,
                // imgSrcA: Abv200017A,
                // imgSrcB: Abv200017B,
                imgSrc:[Abv200017],

                name: 'Sword',
                histAndGeo: '1450-1500. Southern and Central Europe.',
                desc: <div><h5>Description:</h5>A-double edged sword with protective bows <br /> under the S-shaped crossguard.</div>,
                stat: <div>Total length: 1060 mm <br /> Length of the blade: 880 mm <br /> Width of the blade: 40 mm <br /> Weight : 1150 g</div>,
                price: '700',
                ordered: false,
                scab: '870'
            },
            {
                nmbr: 3,
                catNum: 'Catalogue No. 2000127',
                // imgSrc: Abv2000127,
                // imgSrcA: Abv2000127A,
                // imgSrcB: Abv2000127B,
                imgSrc:[Abv2000127,Abv2000127A],

                name: 'Messer',
                histAndGeo: '14-15th centuries. Germany.',
                desc: null,
                stat: <div>Total length: 835 mm <br /> Length of the blade: 645 mm <br /> Width of the blade: 40 mm <br /> Weight : 870 g</div>,
                price: '600',
                ordered: false,
                scab: '770'
            },
            {
                nmbr: 4,
                catNum: 'Catalogue No. 2000119',
                // imgSrc: Abv2000119,
                // imgSrcA: Abv2000119A,
                // imgSrcB: Abv2000119B,
                imgSrc:[Abv2000119,Abv2000119A,Abv2000119B],

                name: 'Katzbalger',
                histAndGeo: '1520. Germany.',
                desc: null,
                stat: <div>Total length: 845 mm <br /> Length of the blade: 700 mm <br /> Width of the blade: 47 mm <br /> Weight : 1200 g</div>,
                price: "640",
                ordered: false,
                scab: '820'
            },
            {
                nmbr: 5,
                catNum: 'Catalogue No. 200117',
                // imgSrc: Abv200117,
                // imgSrcA: Abv200117A,
                // imgSrcB: Abv200117B,
                imgSrc:[Abv200117,Abv200117A,Abv200117B],

                name: 'Hand-and-a-half sword',
                histAndGeo: 'Late 16th century. Western and middle Europe.',
                desc: null,
                stat: <div>Total length: 1160 mm <br /> Length of the blade: 900 mm <br /> Width of the blade: 50 mm <br /> Weight : 1730 g</div>,
                price: '900',
                ordered: false,
                scab: '1070'
            },
            {
                nmbr: 6,
                catNum: 'Catalogue No. 200012',
                // imgSrc: Abv200012,
                // imgSrcA: Abv200012A,
                // imgSrcB: Abv200012B,
                imgSrc:[Abv200012,Abv200012A],

                name: 'Hand-and-a-half sword',
                histAndGeo: 'Late 16th century. Western and middle Europe.',
                desc: null,
                stat: <div>Total length: 1160 mm <br /> Length of the blade: 900 mm <br /> Width of the blade: 50 mm <br /> Weight : 1730 g</div>,
                price: '660',
                ordered: false,
                scab: '830'
            },
            {
                nmbr: 7,
                catNum: 'Catalogue No. 2000116',
                // imgSrc: Abv2000116,
                // imgSrcA: Abv2000116A,
                // imgSrcB: Abv2000116B,
                imgSrc:[Abv2000116],

                name: 'Hand-and-a-half sword',
                histAndGeo: '14-15th centuries. Western and middle Europe.',
                desc: <div><h5>Description:</h5>The blade has a shallow fuller.</div>,
                stat: <div>Total length: 1230 mm <br /> Length of the blade: 990 mm <br /> Width of the blade: 52 mm <br /> Weight : 1530 g</div>,
                price: '600',
                ordered: false,
                scab: '770'
            },
            {
                nmbr: 8,
                catNum: 'Catalogue No. 2000111',
                // imgSrc: Abv2000111,
                // imgSrcA: Abv2000111A,
                // imgSrcB: Abv2000111B,
                imgSrc:[Abv2000111,Abv2000111A],

                name: 'Hand-and-a-half sword',
                histAndGeo: 'Late 16th century. Western and middle Europe.',
                desc: <div><h5>Description:</h5>The blade has a shallow fuller.</div>,
                stat: <div>Total length: 1190 mm <br /> Length of the blade: 950 mm <br /> Width of the blade: 52 mm <br /> Weight : 1460 g</div>,
                price: '600',
                ordered: false,
                scab: '770'
            },
            {
                nmbr: 9,
                catNum: 'Catalogue No. 2000110',
                // imgSrc: Abv2000110,
                // imgSrcA: Abv2000110A,
                // imgSrcB: Abv2000110B,
                imgSrc:[Abv2000110,Abv2000110A],

                name: 'Hand-and-a-half sword',
                histAndGeo: '14-15th centuries. Western and middle Europe.',
                desc: <div><h5>Description:</h5>The blade has a low hexagonal profile.</div>,
                stat: <div>Total length: 1190 mm <br /> Length of the blade: 950 mm <br /> Width of the blade: 50 mm <br /> Weight : 1520 g</div>,
                price: '650',
                ordered: false,
                scab: '820'
            },
            {
                nmbr: 10,
                catNum: 'Catalogue No. 2000125',
                // imgSrc: Abv2000125,
                // imgSrcA: Abv2000125A,
                // imgSrcB: Abv2000125B,
                imgSrc:[Abv2000125],

                name: 'Hand-and-a-half sword',
                histAndGeo: 'Late 16th century. Western and middle Europe.',
                desc: <div><h5>Description:</h5>Sword with a stab blade.</div>,
                stat: <div>Total length: 1070 mm <br /> Length of the blade: 900 mm <br /> Width of the blade: 50 mm <br /> Weight : 1230 g</div>,
                price: '600',
                ordered: false,
                scab: '770'
            },
            {
                nmbr: 11,
                catNum: 'Catalogue No. 2000132',
                // imgSrc: Abv2000132,
                // imgSrcA: Abv2000132A,
                // imgSrcB: Abv2000132B,
                imgSrc:[Abv2000132,Abv2000132A,Abv2000132B,Abv2000132V],

                name: 'Hand-and-a-half sword XXa',
                histAndGeo: '1450-1480. Europe.',
                desc: null,
                stat: <div>Total length: 1188 mm <br /> Length of the blade: 910 mm <br /> Width of the blade: 54 mm <br /> Weight : 1620 g</div>,
                price: '1000',
                ordered: false,
                scab: '1170'
            },
            {
                nmbr: 12,
                catNum: 'Catalogue No. 2000128',
                // imgSrc: Abv2000128,
                // imgSrcA: Abv2000128A,
                // imgSrcB: Abv2000128B,
                imgSrc:[Abv2000128,Abv2000128A,Abv2000128B],

                name: 'Hand-and-a-half sword XVIIIb',
                histAndGeo: '1450-1480. Bayerisches Nationalmuseum, Munich.',
                desc: null,
                stat: <div>Total length: 1257 mm <br /> Length of the blade: 946 mm <br /> Width of the blade: 39 mm <br /> Weight : 1530 g</div>,
                price: '1000',
                ordered: false,
                scab: '1170'
            },
            {
                nmbr: 13,
                catNum: 'Catalogue No. 2000130',
                // imgSrc: Abv2000130,
                // imgSrcA: Abv2000130A,
                // imgSrcB: Abv2000130B,
                imgSrc:[Abv2000130,Abv2000130A],

                name: 'Hand-and-a-half sword',
                histAndGeo: '1400-1450. National Museum of Slovenia, Ljubljana.',
                desc: null,
                stat: <div>Total length: 1215 mm <br /> Length of the blade: 909 mm <br /> Width of the blade: 49 mm <br /> Weight : 1690 g</div>,
                price: '1000',
                ordered: false,
                scab: '1170'
            },
            {
                nmbr: 14,
                catNum: 'Catalogue No. 200015',
                // imgSrc: Abv200015,
                // imgSrcA: Abv200015A,
                // imgSrcB: Abv200015B,
                imgSrc:[Abv200015],

                name: 'Gothic sword',
                histAndGeo: '14-15th centuries. Europe.',
                desc: <div><h5>Description:</h5>A sword with a target-like pommel <br /> and with the crossguard angled towards the blade. <br /> There is an etched inscription on the blade.</div>,
                stat: <div>Total length: 990 mm <br /> Length of the blade: 830 mm <br /> Width of the blade: 52 mm <br /> Weight : 1260 g</div>,
                price: '640',
                ordered: false,
                scab: '810'
            },
            {
                nmbr: 15,
                catNum: 'Catalogue No. 200014',
                // imgSrc: Abv200014,
                // imgSrcA: Abv200014A,
                // imgSrcB: Abv200014B,
                imgSrc:[Abv200014],

                name: 'Gothic sword',
                histAndGeo: '13-14th centuries. Europe.',
                desc: null,
                stat: <div>Total length: 960 mm <br /> Length of the blade: 820 mm <br /> Width of the blade: 45 mm <br /> Weight : 1150 g</div>,
                price: '600',
                ordered: false,
                scab: '770'
            },
            {
                nmbr: 16,
                catNum: 'Catalogue No. 200010',
                // imgSrc: Abv200010,
                // imgSrcA: Abv200010A,
                // imgSrcB: Abv200010B,
                imgSrc:[Abv200010,Abv200010A,Abv200010B],

                name: 'Early Gothic sword',
                histAndGeo: '12th century. Europe.',
                desc: null,
                stat: <div>Total length: 950 mm <br /> Length of the blade: 800 mm <br /> Width of the blade: 50 mm <br /> Weight : 1160 g</div>,
                price: '640',
                ordered: false,
                scab: '810'
            },
            {
                nmbr: 17,
                catNum: 'Catalogue No. 2000123',
                // imgSrc: Abv2000123,
                // imgSrcA: Abv2000123A,
                // imgSrcB: Abv2000123B,
                imgSrc:[Abv2000123],

                name: 'Gothic sword',
                histAndGeo: '13-14th centuries. Europe.',
                desc: null,
                stat: <div>Total length: 1010 mm <br /> Length of the blade: 850 mm <br /> Width of the blade: 56 mm <br /> Weight : 1280 g</div>,
                price: '600',
                ordered: false,
                scab: '770'
            },
            {
                nmbr: 18,
                catNum: 'Catalogue No. 2000126',
                // imgSrc: Abv2000126,
                // imgSrcA: Abv2000126A,
                // imgSrcB: Abv2000126B,
                imgSrc:[Abv2000126],

                name: 'Gothic sword',
                histAndGeo: '12-13th centuries. Europe.',
                desc: null,
                stat: <div>Total length: 950 mm <br /> Length of the blade: 770 mm <br /> Width of the blade: 60 mm <br /> Weight : 1550 g</div>,
                price: '640',
                ordered: false,
                scab: '810'
            },
            {
                nmbr: 19,
                catNum: 'Catalogue No. 2000131',
                // imgSrc: Abv2000131,
                // imgSrcA: Abv2000131A,
                // imgSrcB: Abv2000131B,
                imgSrc:[Abv2000131,Abv2000131A,Abv2000131B],

                name: 'Sword XVIII',
                histAndGeo: 'The 15th century. Europe.',
                desc: null,
                stat: <div>Total length: 875 mm <br /> Length of the blade: 700 mm <br /> Width of the blade: 61 mm <br /> Weight : 1550 g</div>,
                price: '1000',
                ordered: false,
                scab: '1170'
            },
            {
                nmbr: 20,
                catNum: 'Catalogue No. 2000134',
                // imgSrc: Abv2000134,
                // imgSrcA: Abv2000134A,
                // imgSrcB: Abv2000134B,
                imgSrc:[Abv2000134,Abv2000134A],

                name: 'Sword',
                histAndGeo: '14-16th century. Europe.',
                desc: null,
                stat: <div>Total length: 950 mm <br /> Length of the blade: 780 mm <br /> Width of the blade: 56 mm <br /> Weight : 1150 g</div>,
                price: '1000',
                ordered: false,
                scab: '1170'
            },
            {
                nmbr: 21,
                catNum: 'Catalogue No. 2000133',
                // imgSrc: Abv2000133,
                // imgSrcA: Abv2000133A,
                // imgSrcB: Abv2000133B,
                imgSrc:[Abv2000133,Abv2000133A,Abv2000133B],

                name: 'Sword XV',
                histAndGeo: 'The 15th century. Europe.',
                desc: null,
                stat: <div>Total length: 935 mm <br /> Length of the blade: 765 mm <br /> Width of the blade: 70 mm <br /> Weight : 1680 g</div>,
                price: '640',
                ordered: false,
                scab: '810'
            },
            {
                nmbr: 22,
                catNum: 'Catalogue No. 200018',
                // imgSrc: Abv200018,
                // imgSrcA: Abv200018A,
                // imgSrcB: Abv200018B,
                imgSrc:[Abv200018,Abv200018A,Abv200018B],

                name: 'Viking sword',
                histAndGeo: '9-10th centuries. Northern, western and middle Europe.',
                desc: <div><h5>Description:</h5>The cross and the pommel <br /> of the sword are decorated with <br /> engraved motifs. <br /> The grip is covered with leather</div>,
                stat: <div>Total length: 920 mm <br /> Length of the blade: 760 mm <br /> Width of the blade: 55 mm <br /> Weight : 1170 g</div>,
                price: '720',
                ordered: false,
                scab: '890'
            },
            {
                nmbr: 23,
                catNum: 'Catalogue No. 2000129',
                // imgSrc: Abv2000129,
                // imgSrcA: Abv2000129A,
                // imgSrcB: Abv2000129B,
                imgSrc:[Abv2000129,Abv2000129A,Abv2000129B],

                name: 'Viking sword',
                histAndGeo: '9-10th centuries. Western Europe.',
                desc: <div><h5>Description:</h5>The cross and the pommel <br /> of the sword are decorated with <br /> engraved motifs.</div>,
                stat: <div>Total length: 910 mm <br /> Length of the blade: 755 mm <br /> Width of the blade: 53 mm <br /> Weight : 1150 g</div>,
                price: '800',
                ordered: false,
                scab: '970'
            },
            {
                nmbr: 24,
                catNum: 'Catalogue No. 2000120',
                // imgSrc: Abv2000120,
                // imgSrcA: Abv2000120A,
                // imgSrcB: Abv2000120B,
                imgSrc:[Abv2000120,Abv2000120A],

                name: 'Viking sword',
                histAndGeo: '9-10th centuries. Europe.',
                desc: <div><h5>Description:</h5>The cross and the pommel <br /> of the sword are decorated with <br /> engraved motifs.</div>,
                stat: <div>Total length: 960 mm <br /> Length of the blade: 770 mm <br /> Width of the blade: 62 mm <br /> Weight : 1320 g</div>,
                price: '720',
                ordered: false,
                scab: '890'
            },
            {
                nmbr: 25,
                catNum: 'Catalogue No. 2000114',
                // imgSrc: Abv2000114,
                // imgSrcA: Abv2000114A,
                // imgSrcB: Abv2000114B,
                imgSrc:[Abv2000114,Abv2000114A,Abv2000114B],

                name: 'Viking sword',
                histAndGeo: '9-10th centuries. Europe.',
                desc: <div><h5>Description:</h5>The cross and the pommel <br /> of the sword are decorated with <br /> engraved motifs.</div>,
                stat: <div>Total length: 965 mm <br /> Length of the blade: 775 mm <br /> Width of the blade: 60 mm <br /> Weight : 1280 g</div>,
                price: '800',
                ordered: false,
                scab: '970'
            },
            {
                nmbr: 26,
                catNum: 'Catalogue No. 2000115',
                // imgSrc: Abv2000115,
                // imgSrcA: Abv2000115A,
                // imgSrcB: Abv2000115B,
                imgSrc:[Abv2000115,Abv2000115A,Abv2000115B],

                name: 'Viking sword',
                histAndGeo: '9-10th centuries. Northern, western and middle Europe.',
                desc: <div><h5>Description:</h5>The grip is covered with leather.</div>,
                stat: <div>Total length: 935 mm <br /> Length of the blade: 765 mm <br /> Width of the blade: 55 mm <br /> Weight : 1180 g</div>,
                price: '720',
                ordered: false,
                scab: '890'
            },
            {
                nmbr: 27,
                catNum: 'Catalogue No. 2000122',
                // imgSrc: Abv2000122,
                // imgSrcA: Abv2000122A,
                // imgSrcB: Abv2000122B,
                imgSrc:[Abv2000122,Abv2000122A],

                name: 'Viking sword',
                histAndGeo: '9-10th centuries. Europe.',
                desc: <div><h5>Description:</h5>The cross and the pommel <br /> of the sword are decorated with <br /> engraved motifs.</div>,
                stat: <div>Total length: 930 mm <br /> Length of the blade: 760 mm <br /> Width of the blade: 50 mm <br /> Weight : 1140 g</div>,
                price: '640',
                ordered: false,
                scab: '810'
            },
            {
                nmbr: 28,
                catNum: 'Catalogue No. 2000124',
                // imgSrc: Abv2000124,
                // imgSrcA: Abv2000124A,
                // imgSrcB: Abv2000124B,
                imgSrc:[Abv2000124,Abv2000124A,Abv2000124B],

                name: 'Viking sword',
                histAndGeo: '9-10th centuries. Europe.',
                desc: <div><h5>Description:</h5>The cross and the pommel <br /> of the sword are decorated with <br /> engraved motifs.</div>,
                stat: <div>Total length: 930 mm <br /> Length of the blade: 760 mm <br /> Width of the blade: 50 mm <br /> Weight : 1150 g</div>,
                price: '800',
                ordered: false,
                scab: '970'
            },
            {
                nmbr: 29,
                catNum: 'Catalogue No. 2000112',
                // imgSrc: Abv2000112,
                // imgSrcA: Abv2000112A,
                // imgSrcB: Abv2000112B,
                imgSrc:[Abv2000112],

                name: 'Single-Edged Viking sword',
                histAndGeo: '9-10th centuries. Europe.',
                desc: <div><h5>Description:</h5>The grip is covered with leather.</div>,
                stat: <div>Total length: 900 mm <br /> Length of the blade: 735 mm <br /> Width of the blade: 50 mm <br /> Weight : 1140 g</div>,
                price: '520',
                ordered: false,
                scab: '690'
            }
        ],
        modalObjSwd: {
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
        d: new Date(),
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

        const prodOdd = this.state.products.map(x => {
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
                                    <CardText>{(x.name === 'Katzbalger') ? <p>Lether scabbard with belt +180&euro;</p> : <p>Lether scabbard with belt +170&euro;</p>}</CardText>
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                        <CardText>{''}</CardText>
                        <CardText>{x.ordered}</CardText>
                        <Button color="info" className="orderac" onClick={() => {
                            this.state.products.map(y => {
                                if (y.catNum === x.catNum) {
                                    return this.setState({
                                        modalObjSwd: { ...y }
                                    })
                                }
                                else {
                                    return;
                                }
                            });
                            this.toggleHandler()
                        }}>Order</Button>
                    </CardBody>
                </div>

            </div> : null)

        })

        const prodEven = this.state.products.map(x => {
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
                                    <CardText>{(x.name === 'Katzbalger') ? <p>Lether scabbard with belt +180&euro;</p> : <p>Lether scabbard with belt +170&euro;</p>}</CardText>
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                        <CardText>{''}</CardText>
                        <CardText>{x.ordered}</CardText>
                        <Button color="info" className="orderac" onClick={() => {
                            this.state.products.map(y => {
                                if (y.catNum === x.catNum) {
                                    return this.setState({
                                        modalObjSwd: { ...y }
                                    })
                                }
                                else {
                                    return;
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
                    <h1 className="display-3">Swords</h1>
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
                            <Col md="6"><CardImg src={this.state.modalObjSwd.imgSrc[0]} alt="imgNotFound...O.o" /></Col>
                            <Col md="6">
                                <h4>{this.state.modalObjSwd.name}</h4>
                                <h6>{this.state.modalObjSwd.histAndGeo}</h6>
                                <p>{this.state.modalObjSwd.catNum}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <br />
                                <p>{this.state.modalObjSwd.desc}</p>
                                <h5>Specification:</h5>
                                <p>{this.state.modalObjSwd.stat}</p>
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
                                    <input type="hidden" name="Order_Summary" value={this.state.modalObjSwd.name + " " + this.state.modalObjSwd.catNum + " " + this.koriceHandler()} />

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
                                    } /> With leather scabbard & belt
                                    <br />
                                    <br />
                                    <h5>Total price: {this.state.orderedPokazatelj ? <div>{this.state.modalObjSwd.scab}&euro;</div> : <div>{this.state.modalObjSwd.price}&euro;</div>}</h5>
                                    <ModalFooter>
                                        <Button color="info" type="submit" value="Send" className="orderac">Order</Button><br />
                                        <Button color="secondary" className="specBtn" onClick={this.toggleHandler}>Exit</Button>
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

export default Swords