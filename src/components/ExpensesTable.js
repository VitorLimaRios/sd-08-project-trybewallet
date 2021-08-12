import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpenseAction, editExpenseAction } from '../actions/index';

class ExpensesTable extends React.Component {
  renderExpenses() {
    const { expenses, deleteExpense, editExpense } = this.props;
    return (
      expenses.map((item) => (
        <tr key={ item.id }>
          <td>{item.description}</td>
          <td>{item.tag}</td>
          <td>{item.method}</td>
          <td>{item.value}</td>
          <td>{item.exchangeRates[item.currency].name}</td>
          <td>{Math.round(item.exchangeRates[item.currency].ask * 100) / 100}</td>
          <td>
            {Math.round(
              (item.value * item.exchangeRates[item.currency].ask) * 100,
            ) / 100}
          </td>
          <td>Real</td>
          <td>
            <button
              type="button"
              onClick={ () => deleteExpense(item.id) }
              data-testid="delete-btn"
            >
              Deletar
            </button>
            <button
              type="button"
              onClick={ () => editExpense(item.id) }
              data-testid="edit-btn"
            >
              Editar
            </button>
          </td>
        </tr>
      ))
    );
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Descrição</td>
              <td>Tag</td>
              <td>Método de pagamento</td>
              <td>Valor</td>
              <td>Moeda</td>
              <td>Câmbio utilizado</td>
              <td>Valor convertido</td>
              <td>Moeda de conversão</td>
              <td>Editar/Excluir</td>
            </tr>
          </thead>
          <tbody>
            {this.renderExpenses()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (expenseID) => dispatch(deleteExpenseAction(expenseID)),
  editExpense: (expenseID) => dispatch(editExpenseAction(expenseID)),
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
