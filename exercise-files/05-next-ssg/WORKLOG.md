# Step 1

Create a new project.
https://nextjs.org/docs/getting-started

```shell
yarn create next-app
```

or manually:

```shell
mkdir 05-ssr-and-ssg && cd 05-ssr-and-ssg
mkdir pages
mkdir public
yarn init -y
yarn add next react react-dom
```

`pages` dir is required for Next to understand where are [pages](https://nextjs.org/docs/basic-features/pages) of our application are located.
`public` tells Next where [static resources](https://nextjs.org/docs/basic-features/static-file-serving) are located.

Add scripts:

```json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

Setup TS:

```shell
touch tsconfig.json
yarn add --dev typescript @types/react @types/node
```

Start:

```shell
yarn dev
```

`tsconfig.json` will be populated with default values automatically.
When started you will see 404—that's okay.

Tell about concept of pages in Next.

First page: `pages/index.tsx`.
Make a not about `next/head` and default exports.

# Step 2

Create a basic layout, styles and link tags:
https://nextjs.org/docs/advanced-features/custom-document
https://nextjs.org/docs/advanced-features/custom-app

`pages/_app.tsx` custom tags, add global styles.

Add `styled-components` for styling modules.
Add `ThemeProvider`.

Create `Header` and `Footer`, include them in `_app`.

`_document` to prevent className collision when using pre-render.

For this purpose we are extending the <Document /> and injecting the server side rendered styles into the <head>, and also adding the babel-plugin-styled-components (which is required for server side rendering). Additionally we set up a global theme for styled-components using NextJS custom <App> component.
https://github.com/zeit/next.js/tree/canary/examples/with-styled-components

Make a note about `Link` component.

`.babelrc`: (?)
https://github.com/zeit/next.js/issues/7322#issuecomment-582369214

# Step 3

Create Feed, Post and Section. Just for layout. Some styles.

Styled link and `passHref`.

Custom 404.

Post routing schema. How to get post id.
https://nextjs.org/docs/routing/introduction#dynamic-route-segments
https://nextjs.org/docs/api-reference/next/router#userouter

# Step 4

https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
Simple “remote” server (like DB or something).
Types for `Post` entity.
Simple API for querying DB server.

`getStaticProps()` for pre-fetching data.
Using it in `Front` page.

Bind `Feed`, `Section`, and `Post` components.
https://nextjs.org/learn/basics/data-fetching/getstaticprops-details

# Step 5

Each post separately.
Add a new endpoint to express app.

Context for `getStaticProps()`. `GetStaticProps` type.
`getStaticPaths()` for dynamic routing.
https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation

# Step 6

`Breadcrumbs` component.
Section/category.

Basically, the same thing. Nothing new.

# Step 7

Build and check.
(Deploy?)

```shell
> Build error occurred
Error: Build optimization failed: found pages without a React Component as default export in
pages/404/404
pages/category/staticPaths
pages/post/staticPaths
pages/404/style

See https://err.sh/zeit/next.js/page-without-valid-component for more info.
```

Update `404.tsx`.
Move `staticPaths` to `shared`.

Server in one terminal window and build in another.

`.next/server/static/[BUILD_ID]`.

```js
module.exports = {
  distDir: "build",
};
```
