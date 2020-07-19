import React, { FunctionComponent } from "react"
import { Post } from "../Post"
import { Grid, Title } from "./style"

interface SectionProps {
  title: string
}

export const Section: FunctionComponent<SectionProps> = ({ title }) => {
  return (
    <section>
      <Title>{title}</Title>
      <Grid>
        <Post />
        <Post />
        <Post />
      </Grid>
    </section>
  )
}
