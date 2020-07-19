import React, { FunctionComponent } from "react";
import { Post as PostType } from "../../shared/types";
import { PostCard } from "../Post";
import { Grid, Title } from "./style";

interface SectionProps {
  title: string;
  posts: PostType[];
}

export const Section: FunctionComponent<SectionProps> = ({ title, posts }) => {
  return (
    <section>
      <Title>{title}</Title>
      <Grid>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Grid>
    </section>
  );
};
