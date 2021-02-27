import { GET_CURRENCIES, REQUEST_CURRENCIES, FAILED_REQUEST } from '../actions/index';

const initialState = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: '',
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, isFetching: true };
  case GET_CURRENCIES:
    return {...state, currencies: [action.payload], sFetching: false};
  case FAILED_REQUEST:
    return {...state, error: action.payload, sFetching: false};
  case 'ADD_REGISTER':
    return {...state, expenses: [...state.expenses, action.data]};
  case 'DELETE_REGISTER':
    return state.filter((register) => register !== action.value);
  default:
    return state;
  }
}

export default wallet;
