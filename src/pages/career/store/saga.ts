import {
  takeEvery, all, call, put,
} from 'redux-saga/effects';

import { actions, Types } from 'pages/career/store/reducer';
import { callApi } from 'util/fetch';

function* fetchAutoComplete({ payload }:any) {
  const { isSuccess, data } = yield call(callApi, {
    url: 'user/search',
    params: { keyword: payload },
  });

  if (isSuccess && data) {
    yield put(actions.setAutoComplete(data));
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield all([
    takeEvery(Types.FetchAutoComplete, fetchAutoComplete),
  ]);
}
