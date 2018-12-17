import React, { Component } from 'react';
import Aux from './hoc/Aux';
import All from './All/All';
import Spinner from './Spinner'
class App extends Component {
  state = { 
    isLoading: true 
  }
  componentDidMount() {
    this.setState({isLoading: false})
}

  render() {
    return <div>{this.state.isLoading ? <Spinner/> : <All/>}</div>
  }
}

export default App;
