import './index.css'

const FaqItem = props => {
  const {faqDetails, onShowAnswer} = props

  const {questionText, answerText, isAnsShowed, id} = faqDetails

  const plusImg =
    'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const minusImg =
    'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

  const btnImg = isAnsShowed ? minusImg : plusImg
  const altName = isAnsShowed ? 'minus' : 'plus'

  const showHideBtn = () => {
    onShowAnswer(id)
  }
  return (
    <li className="list_item">
      <div className="ques_btn">
        <h1 className="questions">{questionText}</h1>
        <img
          src={btnImg}
          alt={altName}
          className="show_hide"
          onClick={showHideBtn}
        />
      </div>
      {isAnsShowed && (
        <>
          {' '}
          <hr className="ruler" />
          <p className="answers">{answerText}</p>
        </>
      )}
    </li>
  )
}
export default FaqItem
