// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackGiven: false}

  OnFeedback = () => this.setState({isFeedbackGiven: true})

  renderCustomerSupport = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="content-bg">
        <h1 className="question">
          How satisfied are you with our customer support performance ?
        </h1>
        <ul>
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button type="button" onClick={this.OnFeedback}>
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emojis"
                />
                <br />
                <span>{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="content-bg">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1>Thank You</h1>
        <p>
          we will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackGiven} = this.state
    return (
      <div className="bg-container">
        {isFeedbackGiven ? this.renderThankYou() : this.renderCustomerSupport()}
      </div>
    )
  }
}
export default Feedback
