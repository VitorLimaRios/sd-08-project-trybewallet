// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_CURRENCIES, ADD_EXPENSE } from '../actions/wallet';
// estado inicial dos carros que vai junto com o outro estado no objeto do estado global
const initialState = {
  currencies: [],
  expenses: [],
};
// reducer que executa a action e alter de fato o estado inicial dos carros
export default function wallet(state = initialState, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, currencies: action.currencies }; // need fix
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense] };
  default:
    return state;
  }
}
