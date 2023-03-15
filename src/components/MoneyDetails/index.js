import './index.css'

const MoneyDetails = props => {
  const {balance, income, expense} = props

  return (
    <div className="money-details-container">
      <div className="md-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="icon"
        />
        <div className="md-typo-container">
          <p className="your-para">Your Balance</p>
          <p className="balance-amount" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="md-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="icon"
        />
        <div className="md-typo-container">
          <p className="your-para">Your Income</p>
          <p className="balance-amount" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="md-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="icon"
        />
        <div className="md-typo-container">
          <p className="your-para">Your Expenses</p>
          <p className="balance-amount" data-testid="expensesAmount">
            Rs {expense}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
