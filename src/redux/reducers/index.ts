import { combineReducers } from "redux"
import stories, { initStoriesState, StoriesState } from "./Stories"

export interface StoreState {
  stories: StoriesState
}

const reducers = combineReducers<StoreState>({
  stories: stories,
})

export const preloadedState: StoreState = {
  stories: initStoriesState,
}

export default reducers
