import {
  takeEvery, all, call, put,
} from 'redux-saga/effects';

import { userActions, Types } from 'pages/career/store/reducers/userReducer';
import { callApi } from 'util/fetch';
import { User } from 'pages/career/store/reducers/searchReducer';

function* fetchUser({ payload }:any) {
  const { isSuccess, data } = yield call(callApi, {
    url: 'user/search',
    params: { keyword: payload },
  });

  if (isSuccess && data) {
    const user = data.find((item:User) => item.name === payload);
    yield put(userActions.setUser(user));
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield all([
    takeEvery(Types.FetchUser, fetchUser),
  ]);
}
