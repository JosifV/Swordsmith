import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DemoCarousel from './Daggers/CorouzelDagg'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import TopRoute from './TopRoute'

ReactDOM.render(<BrowserRouter><TopRoute><App/></TopRoute></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
