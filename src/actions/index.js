export const LOGIN = 'LOGIN';
export const EXPENSES = 'EXPENSES';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const FINISH_EDIT = 'FINISH_EDIT';

export const loginAction = (email) => ({ type: LOGIN, email });
export const expensesAction = (expenses) => ({ type: EXPENSES, expenses });

const requestCurrencies = () => ({ type: REQUEST_CURRENCIES });
const requestSuccess = (currencies) => ({
  type: REQUEST_SUCCESS,
  currencies: Object.keys(currencies).filter((currency) => currency !== 'USDT'),
});
const requestFail = (error) => (
  { type: REQUEST_FAIL, error }
);

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(requestCurrencies());
  try {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await request.json();
    dispatch(requestSuccess(json));
  } catch (error) {
    dispatch(requestFail(error));
  }
};

export const deleteExpenseAction = (expenseID) => ({
  type: DELETE_EXPENSE,
  expenseID,
});

export const editExpenseAction = (expenseID) => ({
  type: EDIT_EXPENSE,
  expenseID,
});

export const finishEditAction = (expenses) => ({
  type: FINISH_EDIT,
  expenses,
});
