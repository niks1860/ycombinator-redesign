import {
  GET_STORY_IDS,
  GET_VIEW,
  SET_ITEMS,
  SET_STORY_IDS,
  SET_VIEW,
} from "redux/constants/Stories"
import { Story, StoryType } from "services/APIService"

interface Action {
  type: string
  payload: any
}

interface StoryData<T> {
  loading: boolean
  data: T[]
}

export type Items = { [key: string]: Story }

export interface StoriesState {
  items: Items
  views: { [key in StoryType]: StoryData<Story> }
  ids: { [key in StoryType]: StoryData<string> }
}

export const initStoriesState: StoriesState = {
  items: {},
  views: {
    top: { loading: false, data: [] },
    new: { loading: false, data: [] },
    best: { loading: false, data: [] },
    ask: { loading: false, data: [] },
    job: { loading: false, data: [] },
    show: { loading: false, data: [] },
  },
  ids: {
    top: { loading: false, data: [] },
    new: { loading: false, data: [] },
    best: { loading: false, data: [] },
    ask: { loading: false, data: [] },
    job: { loading: false, data: [] },
    show: { loading: false, data: [] },
  },
}

const stories = (state = initStoriesState, action: Action): StoriesState => {
  switch (action.type) {
    case GET_STORY_IDS:
      return {
        ...state,
        ids: {
          ...state.ids,
          [action.payload]: {
            loading: true,
            data: state.ids[action.payload as StoryType].data,
          },
        },
      }
    case SET_STORY_IDS:
      return {
        ...state,
        ids: {
          ...state.ids,
          [action.payload.type]: {
            loading: false,
            data: action.payload.data,
          },
        },
      }
    case GET_VIEW:
      return {
        ...state,
        views: {
          ...state.views,
          [action.payload.type]: {
            loading: true,
            data: state.views[action.payload.type as StoryType].data,
          },
        },
      }
    case SET_VIEW:
      return {
        ...state,
        views: {
          ...state.views,
          [action.payload.type]: {
            loading: false,
            data: action.payload.data,
          },
        },
      }
    case SET_ITEMS:
      return {
        ...state,
        items: { ...state.items, ...action.payload },
      }
    default:
      return state
  }
}

export default stories
