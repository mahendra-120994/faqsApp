import {Component} from 'react'
import FaqItem from '../FaqItem/index'
import './index.css'

class Faqs extends Component {
  //   Or
  //   constructor(props) {
  //     super(props)
  //     const {faqsList} = this.props
  //     this.state = {updatedFaqsList: []}

  //     this.setState({
  //       updatedFaqsList: faqsList.map(eachFaq => ({
  //         ...eachFaq,
  //         isAnsShowed: false,
  //       })),
  //     })
  //   }
  state = {updatedFaqsList: []}

  componentDidMount() {
    const {faqsList} = this.props
    this.setState({
      updatedFaqsList: faqsList.map(eachFaq => ({
        ...eachFaq,
        isAnsShowed: false,
      })),
    })
  }

  onShowAnswer = id => {
    this.setState(prev => ({
      updatedFaqsList: prev.updatedFaqsList.map(eachFaq => {
        if (eachFaq.id === id) {
          return {...eachFaq, isAnsShowed: !eachFaq.isAnsShowed}
        }
        return eachFaq
      }),
    }))
  }

  render() {
    const {updatedFaqsList} = this.state
    return (
      <div className="bg_container">
        <div className="faqs_Container">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs_list">
            {updatedFaqsList.map(faqDetails => (
              <FaqItem
                key={faqDetails.id}
                faqDetails={faqDetails}
                onShowAnswer={this.onShowAnswer}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
