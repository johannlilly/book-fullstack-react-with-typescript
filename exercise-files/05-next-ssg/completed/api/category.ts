import fetch from "node-fetch"
import { Post, EntityId } from "../shared/types"
import { config } from "./config"

export async function fetchPosts(
  categoryId: EntityId
): Promise<Post[]> {
  const res = await fetch(
    `${config.baseUrl}/categories/${categoryId}`
  )
  return await res.json()
}
