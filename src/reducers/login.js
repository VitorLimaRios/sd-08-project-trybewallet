import { LOGIN_USER } from '../actions/ActionTypes';

const INITIAL_STATE = {
  email: '',
};

const loginUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_USER:
    return {
      ...state,
      email: action.payload.email,
    };
  default: return state;
  }
};

export default loginUserReducer;
