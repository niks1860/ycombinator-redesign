import fetch from "./generic/fetch"

export interface Story {
  id: string
}

export type StoryType = "top" | "new" | "best" | "show" | "ask" | "job"

export const getItem = (id: string) => {
  return fetch({
    url: `/item/${id}.json`,
    method: "get",
  }).then((res) => res.data as Story)
}

export const getItems = async (ids: string[]) => {
  return Promise.all(ids.map((id) => getItem(id)))
}

export const getStoryIds = (type: StoryType) => {
  return fetch({
    url: `/${type}stories.json`,
    method: "get",
  }).then((res) => res.data as string[])
}

export const getUser = (id: string) => {
  return fetch({
    url: `/user/${id}.json`,
    method: "get",
  }).then((res) => res.data as string[])
}
