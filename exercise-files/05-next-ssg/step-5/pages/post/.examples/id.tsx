import React, { FunctionComponent } from "react"
import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { fetchPost } from "../../api/post"
import { Post as PostType } from "../../shared/types"
import { Loader } from "../../components/Loader"
import { postPaths as paths } from "../../shared/staticPaths"
import { PostBody } from "../../components/Post/PostBody"

interface PostProps {
  post: PostType
}

export const getStaticProps: GetStaticProps<PostProps> = async ({
  params
}) => {
  if (typeof params.id !== "string") throw new Error("Unexpected id")
  const post = await fetchPost(params.id)
  return { props: { post } }
}

export async function getStaticPaths() {
  return { paths, fallback: true }
}

const Post: FunctionComponent<PostProps> = ({ post }) => {
  const router = useRouter()

  if (router.isFallback) return <Loader />
  return <PostBody post={post} />
}

export default Post
