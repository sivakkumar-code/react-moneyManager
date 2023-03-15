import './index.css'

const TransactionItem = props => {
  const {obj, onDeleteHistory} = props
  const {id, title, amount, type} = obj

  const deleteThisHistory = () => onDeleteHistory(id)

  return (
    <li className="list-container">
      <p className="list-style">{title}</p>
      <p className="list-style">{amount}</p>
      <p className="list-style">{type === 'INCOME' ? 'Income' : 'Expenses'}</p>
      <div className="del-btn-container">
        <button
          className="delete-btn"
          type="button"
          data-testid="delete"
          onClick={deleteThisHistory}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="del-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
