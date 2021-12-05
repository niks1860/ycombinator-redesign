import { all, call, fork, put, select, takeEvery } from "@redux-saga/core/effects"
import {
  getStoryIdsAction,
  getViewAction,
  SetItemsAction,
  setStoryIdsAction,
  SetViewAction,
} from "redux/actions/Stories"
import { GET_STORY_IDS, GET_VIEW } from "redux/constants/Stories"
import { StoreState } from "redux/reducers"
import { Items } from "redux/reducers/Stories"
import { getItems, getStoryIds, Story } from "services/APIService"

export function* fetchStoryIds() {
  yield takeEvery(GET_STORY_IDS, function* (action: ReturnType<typeof getStoryIdsAction>) {
    const preData: string[] = yield select((store: StoreState) => {
      return store.stories.ids[action.payload].data
    })

    if (preData.length > 0) {
      yield put(setStoryIdsAction(action.payload, preData))
    } else {
      const ids: string[] = yield call(getStoryIds, action.payload)
      yield put(setStoryIdsAction(action.payload, ids))
    }
  })
}

function* fetchItems(ids: string[]) {
  const items: Items = {}
  const data: Story[] = yield call(getItems, ids)
  data.forEach((story) => (items[story.id] = story))
  yield items
}

export function* fetchStoriesView() {
  yield takeEvery(GET_VIEW, function* (action: ReturnType<typeof getViewAction>) {
    const ids = action.payload.data
    const type = action.payload.type

    const existingItems: Items = yield select((state: StoreState) => state.stories.items)
    const notAvailableIds = ids.filter((id) => !(id in existingItems))
    const newItems: Items = yield call(fetchItems, notAvailableIds)

    const view: Story[] = ids.map((id) => {
      if (id in newItems) {
        return newItems[id]
      } else {
        return existingItems[id]
      }
    })

    yield put(SetViewAction(type, view))
    yield put(SetItemsAction(newItems))
  })
}

export default function* storiesRootSaga() {
  yield all([fork(fetchStoryIds), fork(fetchStoriesView)])
}
