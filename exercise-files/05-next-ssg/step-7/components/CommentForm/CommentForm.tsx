import React, { useState, FormEvent } from "react"
import { EntityId } from "../../shared/types"
import { Form } from "./style"
import { submitComment } from "../../api/comments"

interface CommentFormProps {
  post: EntityId
}

export const CommentForm: React.FC<CommentFormProps> = ({ post }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [value, setValue] = useState<string>("")
  const [name, setName] = useState<string>("")

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const { status } = await submitComment(post, name, value)
    setLoading(false)

    if (status === 201) {
      location.hash = "comments"
      location.reload()
    }
  }

  return (
    <Form onSubmit={submit}>
      <h3>Your comment</h3>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Your name"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        name="comment"
        value={value}
        placeholder="What do you think?"
        onChange={(e) => setValue(e.target.value)}
        required
      />
      {loading ? <span>Submitting...</span> : <button>Submit</button>}
    </Form>
  )
}
