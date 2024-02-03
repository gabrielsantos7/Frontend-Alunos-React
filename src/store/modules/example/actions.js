import * as types from '../types';

export const clickedButtonSuccess = () => {
  return {
    type: types.CLICKED_BUTTON_SUCCESS,
  };
};

export const clickedButtonFailure = () => {
  return {
    type: types.CLICKED_BUTTON_FAILURE,
  };
};

export const clickedButtonRequest = () => {
  return {
    type: types.CLICKED_BUTTON_REQUEST,
  };
};
