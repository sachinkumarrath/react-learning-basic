import React, {Component} from 'react'

export default class ClassPropComponent extends Component {
  state = {
    count: 0
  }

  incrementCounter = () => {
    // this.setState({count: this.state.count + 1});
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  Counter
  render () {
    return <div>
      <div>Counter with class props</div>
      <div><button onClick={this.incrementCounter}>Count {this.state.count}</button></div>
    </div>
  }
}
