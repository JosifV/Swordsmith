import React, { Component } from 'react';
import './All.css';
import Home from '../Home/Home';
import Swords from '../Swords/Swords';
import Daggers from '../Daggers/Daggers';
import Rapiers from '../Rapiers/Rapiers';
import OrderMade from '../OrderMade/OrderMade'
import Aux from '../hoc/Aux';
import DualWield from '../DualWield/DualWield';
import {Route, Link} from 'react-router-dom';


class All extends Component {

  state={
    dropdownOpen: false
} 

    render() {

      return <Aux> <ul className="topnav">
      <li><Link to="/" exact>Home</Link></li>
      <li><Link to="/Swords" exact>Swords</Link></li>
      <li><Link to="/Rapiers" exact>Rapiers</Link></li>
      <li><Link to={"/Daggers"} exact>Daggers</Link></li>
      <li><Link to='/DualWield' exact>Dual Wield</Link></li>
    </ul>


<div className="raz"></div>
<Route path='/' exact component={Home} />
<Route path='/Swords' component={Swords} />
 <Route path='/Rapiers' component={Rapiers} />
<Route path='/Daggers' component={Daggers} />
<Route path='/DualWield' component={DualWield} />
 <Route path="/OrderMade" component={OrderMade} /> 
    </Aux>

    }
  }
export default All