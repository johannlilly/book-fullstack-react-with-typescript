import React, { useState, FormEvent } from "react"
import { useDispatch } from "react-redux"
import { EntityId } from "../../shared/types"
import { submitComment } from "../../api/comments"
import { UPDATE_COMMENTS_ACTION } from "../../store/comments"
import { Form } from "./style"

interface CommentFormProps {
  post: EntityId
}

export const CommentForm: React.FC<CommentFormProps> = ({ post }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [value, setValue] = useState<string>("")
  const [name, setName] = useState<string>("")
  const dispatch = useDispatch()

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const response = await submitComment(post, name, value)
    const comments = await response.json()
    setLoading(false)
    setValue("")
    setName("")

    if (response.status === 200) {
      dispatch({ type: UPDATE_COMMENTS_ACTION, comments })
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
