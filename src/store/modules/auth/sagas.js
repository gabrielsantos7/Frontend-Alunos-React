import { call, put, all, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';

import { toast } from 'react-toastify';
import axios from '../../../services/axios';
import * as actions from './actions';
import * as types from '../types';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Login realizado com sucesso!');
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
  } catch (error) {
    toast.error('Usuário ou senha inválidos!');
    yield put(actions.loginFailure());
  }
}

function* registerRequest({ payload }) {
  const { id, nome, email, password } = payload;

  try {
    if (id) {
      yield call(axios.put, '/users', {
        nome,
        email,
        password: password || undefined,
      });

      toast.success('Os dados da conta foram atualizados com sucesso!');
      yield put(actions.registerUpdatedSuccess({ nome, email, password }));
    } else {
      yield call(axios.post, '/users', { nome, email, password });

      toast.success('Conta criada com sucesso!');
      yield put(actions.registerCreatedSuccess({ nome, email, password }));
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.info('Faça login novamente para continuar.');
      yield put(actions.loginFailure());
      return;
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Ocorreu um erro desconhecido.');
    }

    yield put(actions.registerFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');

  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
