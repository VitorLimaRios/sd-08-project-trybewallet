import {
  REQUEST_CURRENCIES_VALUES,
  REQUEST_CURRENCIES_VALUES_SUCCESS,
  REQUEST_CURRENCIES_VALUES_ERROR,
  SAVE_EXPENSE_USER,
  DELETE_EXPENSE_USER,
  EDIT_EXPENSE_USER,
  UPDATE_EXPENSE_USER,
} from '../actions';

const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
  editExpense: [0, 0],
};

export default function wallet(state = INITIAL_WALLET_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES_VALUES:
    return {
      ...state, isFetching: false,
    };
  case REQUEST_CURRENCIES_VALUES_SUCCESS:
    return {
      ...state, currencies: Object.values(action.payload.currencies), isFetching: false,
    };
  case REQUEST_CURRENCIES_VALUES_ERROR:
    return { ...state, isFetching: false, error: action.error };
  case SAVE_EXPENSE_USER:
    return {
      ...state, expenses: [...state.expenses, action.payload],
    };
  case DELETE_EXPENSE_USER:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((expense) => expense.id !== action.payload)],
    };
  case EDIT_EXPENSE_USER:
    return {
      ...state, editExpense: action.payload,
    };
  case UPDATE_EXPENSE_USER:
    console.log(action.payload); // esse aqui
    return {
      ...state,
    };
  default:
    return state;
  }
}
