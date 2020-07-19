import { EntityId, Category } from "./types"

interface PostStaticParams {
  id: EntityId
}

interface PostStaticPath {
  params: PostStaticParams
}

const staticPostsIdList: EntityId[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const postPaths: PostStaticPath[] = staticPostsIdList.map((id) => ({
  params: { id: String(id) }
}))

interface CategoryStaticParams {
  id: Category
}

interface CategoryStaticPath {
  params: CategoryStaticParams
}

const categoriesToPreRender: Category[] = ["Science", "Technology", "Arts"]

export const categoryPaths: CategoryStaticPath[] = categoriesToPreRender.map(
  (category) => ({ params: { id: category } })
)
