import React, { FunctionComponent } from "react"
import { useRouter } from "next/router"

const Post: FunctionComponent = () => {
  const { pathname, query } = useRouter()

  return (
    <div>
      Pathname: {pathname};<br />
      Post Id: {query.id}.
    </div>
  )
}

export default Post
