// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  deduction = val => {
    this.setState(prevState => ({amount: prevState.amount - val}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="app-container">
        <div className="account-container">
          <div className="profile-container">
            <h1 className="profile-icon">S</h1>
            <p className="user-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div className="rupees-container">
              <p className="rupees-count">{amount}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="choose-plan-heading">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationDetails={eachItem}
                deduction={this.deduction}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
