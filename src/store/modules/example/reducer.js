import * as types from '../types';

const initialState = {
  hasClicked: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CLICKED_BUTTON_SUCCESS: {
      console.log('SUCCESS! :)');
      const newState = { ...state };
      newState.hasClicked = !newState.hasClicked;
      return newState;
    }

    case types.CLICKED_BUTTON_FAILURE: {
      console.log('ERROR :(');
      return state;
    }

    case types.CLICKED_BUTTON_REQUEST: {
      console.log('Requesting...');
      return state;
    }

    default:
      return state;
  }
};
export default reducer;
