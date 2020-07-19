import { createStore, combineReducers } from "redux"
import { MakeStore, createWrapper } from "next-redux-wrapper"
import { comments, CommentsState } from "./comments"
import { post, PostState } from "./post"

export interface State {
  post: PostState
  comments: CommentsState
}

const combinedReducer = combineReducers({ post, comments })
const makeStore: MakeStore<State> = () => createStore(combinedReducer)

export const store = createWrapper<State>(makeStore, {
  debug: true
})
