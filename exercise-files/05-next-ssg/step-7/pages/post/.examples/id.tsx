import React, { FunctionComponent } from "react"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { fetchPost } from "../../api/post"
import { fetchComments } from "../../api/comments"
import { Post as PostType, Comment } from "../../shared/types"
import { Loader } from "../../components/Loader"
import { PostBody } from "../../components/Post/PostBody"
import { Comments } from "../../components/Comments"

interface PostProps {
  post: PostType
  comments: Comment[]
}

export const getServerSideProps: GetServerSideProps<PostProps> = async ({
  params
}) => {
  if (typeof params.id !== "string") throw new Error("Unexpected id")
  const post = await fetchPost(params.id)
  const comments = await fetchComments(params.id)
  return { props: { post, comments } }
}

const Post: FunctionComponent<PostProps> = ({ post, comments }) => {
  const router = useRouter()

  if (router.isFallback) return <Loader />
  return (
    <>
      <PostBody post={post} />
      <Comments comments={comments} post={post.id} />
    </>
  )
}

export default Post
