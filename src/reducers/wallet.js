import { RECEIVE_COIN, INFO_WALLET, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
};

function CoinReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RECEIVE_COIN:
    return { ...state, currencies: action.payload };
  case INFO_WALLET:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DELETE_EXPENSE:
    return { ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload) };
  default:
    return state;
  }
}
export default CoinReducer;
