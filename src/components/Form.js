import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenses } from '../actions';
import { fetchCurrency } from '../services/getCurrencyList';
import SelectCurrency from './form/SelectCurrency';
import SelectMethod from './form/SelectMethod';
import SelectTag from './form/SelectTag';

const INITIAL_STATE = {
  value: '0',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  id: 0,
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE,
    };
  }

  handleChange({ name, value }) {
    // console.log();
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { addEx } = this.props;
    const { value, description, currency, method, tag, id } = this.state;
    const exchangeRates = await fetchCurrency();
    console.log();
    const expenses = {
      value, description, currency, method, tag, exchangeRates,
    };
    addEx(expenses);
  }

  render() {
    const { value, description } = this.state;
    const { exp } = this.props;
    console.log(exp.length, exp);
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            data-testid="value-input"
            type="number"
            value={ value }
            name="value"
            onChange={ (e) => this.handleChange(e.target) }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            name="description"
            value={ description }
            onChange={ (e) => this.handleChange(e.target) }
          />
        </label>
        <SelectCurrency handleChange={ (e) => this.handleChange(e) } />
        <SelectMethod handleChange={ (e) => this.handleChange(e) } />
        <SelectTag handleChange={ (e) => this.handleChange(e) } />
        <button
          type="button"
          onClick={ () => this.handleClick() }
        >
          Adicionar despesa

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  exp: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  exp: state.currency.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addEx: (expenses) => dispatch(addExpenses(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
