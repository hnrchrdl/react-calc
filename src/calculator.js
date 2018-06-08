// Actions
const EXPR_ADD = 'EXPR_ADD';
const UNDO = 'UNDO';
const RESET = 'RESET';
const OK = 'OK';

export const actions = {
  EXPR_ADD,
  UNDO,
  RESET,
  OK
};

// Reducer
const defaultState = { steps: [], result: null };
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case EXPR_ADD:
      return {
        ...state,
        steps: [...state.steps, action.payload],
        result: null
      };
    case UNDO:
      return {
        ...state,
        steps: (state.steps || []).filter(
          // filter last element
          (item, idx, arr) => {
            console.log(item, idx, arr);
            return idx < arr.length - 1;
          }
        )
      };
    case RESET:
      return defaultState;
    case OK:
      const result = eval(state.steps.join(''));
      return { steps: [result], result };
    default:
      return state;
  }
}

// Action Creators
function addExpression(val) {
  return { type: EXPR_ADD, payload: val };
}
function undo(val) {
  return { type: UNDO };
}
function reset(val) {
  return { type: RESET };
}
function ok(val) {
  return { type: OK };
}

export const actionCreators = {
  addExpression,
  undo,
  reset,
  ok
};
