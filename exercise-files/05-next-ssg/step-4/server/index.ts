import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

const categories = require("./categories.json")
const posts = require("./posts.json")
const app = express()

app.use(cors())
app.use(bodyParser.json())

const port = 4000

app.get("/posts", (_, res) => {
  return res.json(posts)
})

app.get("/categories", (_, res) => {
  return res.json(categories)
})

app.listen(port, () =>
  console.log(`DB is running on http://localhost:${port}!`)
)
