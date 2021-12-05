import { all } from "redux-saga/effects"
import storiesRootSaga from "./Stories"

export default function* rootSaga() {
  yield all([storiesRootSaga()])
}
