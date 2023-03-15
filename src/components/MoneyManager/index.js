import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    historyList: [],
    balance: 0,
    income: 0,
    expense: 0,
    title: '',
    amount: '',
    type: 'INCOME',
  }

  addOrRemoveMoney = e => {
    e.preventDefault()
    console.log('working...')
    const {balance, income, expense, title, amount, type} = this.state
    console.log(type)
    if (title.length !== 0 && amount.length !== 0 && type.length !== 0) {
      const newObj = {
        id: uuidv4(),
        title,
        amount,
        type,
      }
      console.log(type)
      this.setState(prevState => {
        let obj
        if (prevState.type === 'INCOME') {
          obj = {
            balance: balance + parseInt(amount),
            income: income + parseInt(amount),
            historyList: [...prevState.historyList, newObj],
            title: '',
            amount: '',
            type: 'INCOME',
          }
        } else {
          obj = {
            balance: balance - parseInt(amount),
            expense: expense + parseInt(amount),
            historyList: [...prevState.historyList, newObj],
            title: '',
            amount: '',
            type: 'INCOME',
          }
        }
        return obj
      })
    }
  }

  onDeleteHistory = id => {
    this.setState(prevState => {
      const [removeObj] = prevState.historyList.filter(item => item.id === id)
      let newIncome
      let newBalance
      let newExpense
      if (removeObj.type === 'EXPENSES') {
        newExpense = parseInt(prevState.expense) - parseInt(removeObj.amount)
        newIncome = prevState.income
        newBalance = parseInt(prevState.balance) + parseInt(removeObj.amount)
      } else {
        newExpense = prevState.expense
        newIncome = parseInt(prevState.income) - parseInt(removeObj.amount)
        newBalance = parseInt(prevState.balance) - parseInt(removeObj.amount)
      }
      return {
        ...prevState,
        historyList: prevState.historyList.filter(item => item.id !== id),
        income: newIncome,
        balance: newBalance,
        expense: newExpense,
      }
    })
  }

  readTitle = e => this.setState({title: e.target.value})

  readAmount = e => this.setState({amount: e.target.value})

  readOption = e => this.setState({type: e.target.value})

  render() {
    const {
      historyList,
      balance,
      income,
      expense,
      title,
      amount,
      type,
    } = this.state

    return (
      <div className="bg-container">
        <div className="responsive-container">
          <div className="main-container">
            <div className="banner-container">
              <h1 className="user-name">Hi, Richard</h1>
              <p className="welcome-msg">
                Welcome back to your{' '}
                <span className="highlight">Money Manager</span>
              </p>
            </div>
            <MoneyDetails balance={balance} income={income} expense={expense} />
            <div className="input-output-container">
              <div className="input-container">
                <h1 className="add-transaction">Add Transaction</h1>
                <form
                  className="form-container"
                  onSubmit={this.addOrRemoveMoney}
                >
                  <div className="title-container">
                    <label className="title" htmlFor="title">
                      TITLE
                    </label>
                    <input
                      placeholder="TITLE"
                      type="text"
                      name="title"
                      id="title"
                      onChange={this.readTitle}
                      value={title}
                      className="input-ele"
                    />
                  </div>
                  <div className="amount-container">
                    <label
                      className="title amount-details"
                      htmlFor="amount-details"
                    >
                      AMOUNT
                    </label>
                    <input
                      placeholder="AMOUNT"
                      type="text"
                      name="amount-details"
                      id="amount-details"
                      onChange={this.readAmount}
                      value={amount}
                      className="input-ele"
                    />
                  </div>
                  <div className="type-container">
                    <label className="title" htmlFor="select">
                      TYPE
                    </label>
                    <select
                      className="select-container"
                      onChange={this.readOption}
                      value={type}
                    >
                      {transactionTypeOptions.map(item => (
                        <option
                          value={item.optionId}
                          key={item.optionId}
                          className="option"
                        >
                          {item.displayText}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="btn-container">
                    <button className="button" type="submit">
                      Add
                    </button>
                  </div>
                </form>
              </div>
              <div className="output-container">
                <h1 className="history">History</h1>
                <div className="holder">
                  <div className="output-title-style">
                    <p>Title</p>
                    <p>Amount</p>
                    <p>Type</p>
                    <p>...</p>
                  </div>
                  <ul className="ul-container">
                    {historyList.map(item => (
                      <TransactionItem
                        key={item.id}
                        obj={item}
                        onDeleteHistory={this.onDeleteHistory}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
