import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import { Post } from "../shared/types"

const categories = require("./categories.json")
const posts = require("./posts.json")
const app = express()

app.use(cors())
app.use(bodyParser.json())

const port = 4000

app.get("/posts", (_, res) => {
  return res.json(posts)
})

app.get("/posts/:id", (req, res) => {
  const wantedId = String(req.params.id)
  const post = posts.find(({ id }: Post) => String(id) === wantedId)
  return res.json(post)
})

app.get("/categories", (_, res) => {
  return res.json(categories)
})

app.get("/categories/:id", (req, res) => {
  const { id } = req.params
  const found = posts.filter(({ category }: Post) => category === id)
  const categoryPosts = [...found, ...found, ...found]
  return res.json(categoryPosts)
})

app.listen(port, () =>
  console.log(`DB is running on http://localhost:${port}!`)
)
