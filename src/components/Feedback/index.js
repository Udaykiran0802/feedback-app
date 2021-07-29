import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {onClicked: false}

  setImageClicked = () => {
    this.setState({onClicked: true})
  }

  renderQuestionPage = () => {
    const {feedbackData} = this.props
    const {emojis} = feedbackData

    return (
      <div className="list-item-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="un-order-list">
          {emojis.map(each => (
            <li
              className="list-item"
              key={each.id}
              onClick={this.setImageClicked}
            >
              <img src={each.imageUrl} className="image-size" alt={each.name} />
              <p className="descrption">{each.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderFeedbackPage = () => {
    const {feedbackData} = this.props
    const {loveEmojiUrl} = feedbackData

    return (
      <div className="list-item-container">
        <img src={loveEmojiUrl} className="love-image" alt="loveEmoji" />
        <h1 className="thank-you-heading">Thank You</h1>
        <p className="thank-you-para">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {onClicked} = this.state

    return (
      <div className="Container">
        <div className="card-container">
          {onClicked ? this.renderFeedbackPage() : this.renderQuestionPage()}
        </div>
      </div>
    )
  }
}
export default Feedback
