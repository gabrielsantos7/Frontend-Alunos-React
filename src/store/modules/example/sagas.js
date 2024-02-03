import { call, put, all, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';

const request = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });
};

function* exampleRequest() {
  try {
    yield call(request);
    yield put(actions.clickedButtonSuccess());
  } catch {
    toast.error('Ocorreu um erro. Tente novamente mais tarde.');
    yield put(actions.clickedButtonFailure());
  }
}

export default all([takeLatest(types.CLICKED_BUTTON_REQUEST, exampleRequest)]);
