import {
  GET_STORY_IDS,
  GET_VIEW,
  SET_ITEMS,
  SET_STORY_IDS,
  SET_VIEW,
} from "redux/constants/Stories"
import { Items } from "redux/reducers/Stories"
import { Story, StoryType } from "services/APIService"

export const getStoryIdsAction = (type: StoryType) => {
  return {
    type: GET_STORY_IDS,
    payload: type,
  }
}

export const setStoryIdsAction = (type: StoryType, ids: string[]) => {
  return {
    type: SET_STORY_IDS,
    payload: {
      type: type,
      data: ids,
    },
  }
}

export const getViewAction = (type: StoryType, ids: string[]) => {
  return {
    type: GET_VIEW,
    payload: {
      type: type,
      data: ids,
    },
  }
}

export const SetViewAction = (type: StoryType, data: Story[]) => {
  return {
    type: SET_VIEW,
    payload: {
      type: type,
      data: data,
    },
  }
}

export const SetItemsAction = (data: Items) => {
  return {
    type: SET_ITEMS,
    payload: data,
  }
}
