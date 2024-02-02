import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }
  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <div className="button-container">
            <button className="button" type="button" onClick={this.onIncrement}>
              Generate
            </button>
            <br />
            <spin className="counter-el">{count}</spin>
          </div>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
