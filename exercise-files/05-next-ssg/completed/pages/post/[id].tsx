import React from "react"
import { NextPage } from "next"
import { useSelector } from "react-redux"
import { Loader } from "../../components/Loader"
import { PostBody } from "../../components/Post/PostBody"
import { Comments } from "../../components/Comments"

import { fetchPost } from "../../api/post"
import { fetchComments } from "../../api/comments"
import { State, store } from "../../store"
import { UPDATE_POST_ACTION } from "../../store/post"
import { UPDATE_COMMENTS_ACTION } from "../../store/comments"

export const getServerSideProps = store.getServerSideProps(
  async ({ store, params }) => {
    if (typeof params.id !== "string")
      throw new Error("Unexpected id")

    const comments = await fetchComments(params.id)
    const post = await fetchPost(params.id)

    store.dispatch({ type: UPDATE_POST_ACTION, post })
    store.dispatch({ type: UPDATE_COMMENTS_ACTION, comments })
  }
)

const Post: NextPage = () => {
  const { post, comments } = useSelector<State, State>(
    (state) => state
  )

  if (!post) return <Loader />
  return (
    <>
      <PostBody post={post} />
      <Comments comments={comments} post={post.id} />
    </>
  )
}

export default Post
