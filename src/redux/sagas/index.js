import { takeLatest, put, call, select } from "@redux-saga/core/effects";
import { LOCATION_CHANGE } from "connected-react-router";
import {
  setLatestNews,
  setPopularNews,
  setLatestNewsError,
  setPopularNewsError,
  setLoadingData,
} from "../counterSlice";
import { getLatestNewsFn, getPopularNewsFn } from "../../api";

export function* handleLatestNews() {
  try {
    const { hits } = yield call(getLatestNewsFn, "react");
    yield put(setLatestNews(hits));
  } catch (error) {
    yield put(setLatestNewsError(error.message));
  }
}
export function* handlePopularNews() {
  try {
    const { hits } = yield call(getPopularNewsFn);
    yield put(setPopularNews(hits));
  } catch (error) {
    yield put(setPopularNewsError(error.message));
  }
}

export function* watchNewsSaga() {
  yield put(setLoadingData(true));
  const path = yield select(({ router }) => router.location.pathname);
  if (path === "/popular-news") {
    yield call(handlePopularNews);
  }
  if (path === "/latest-news") {
    yield call(handleLatestNews);
  }
  yield put(setLoadingData(false));
}

export default function* rootSaga() {
  yield takeLatest(LOCATION_CHANGE, watchNewsSaga);
}
