import fetch from "node-fetch"
import { Post, EntityId } from "../shared/types"
import { config } from "./config"

export async function fetchPost(id: EntityId): Promise<Post> {
  const res = await fetch(`${config.baseUrl}/posts/${id}`)
  return await res.json()
}
