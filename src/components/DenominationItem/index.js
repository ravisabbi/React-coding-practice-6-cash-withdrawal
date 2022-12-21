// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationDetails, deduction} = props
  const {value} = denominationDetails

  const onDeduction = () => {
    deduction(value)
  }

  return (
    <li>
      <button type="button" className="denomination-btn" onClick={onDeduction}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
