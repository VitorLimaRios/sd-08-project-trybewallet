import {
  EXPENSES,
  REQUEST_CURRENCIES,
  REQUEST_SUCCESS,
  REQUEST_FAIL,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  FINISH_EDIT,
} from '../actions/index';

const INIT_STATE = {
  currencies: [],
  expenses: [],
  error: '',
  isEditing: false,
  expenseID: '',
  currentID: 0,
};

function walletReducer(state = INIT_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state };
  case REQUEST_SUCCESS:
    return { ...state, currencies: action.currencies };
  case REQUEST_FAIL:
    return { ...state, error: action.error };
  case EXPENSES:
    return { ...state,
      expenses: [...state.expenses, action.expenses],
      currentID: (state.currentID + 1) };
  case DELETE_EXPENSE:
    return { ...state,
      expenses: state.expenses.filter((item) => item.id !== action.expenseID) };
  case EDIT_EXPENSE:
    return { ...state, isEditing: true, expenseID: action.expenseID };
  case FINISH_EDIT:
    return { ...state,
      isEditing: false,
      expenses: state.expenses.map((item) => {
        if (item.id === action.expenses.id) return { ...item, ...action.expenses };
        return item;
      }) };
  default:
    return state;
  }
}

export default walletReducer;
