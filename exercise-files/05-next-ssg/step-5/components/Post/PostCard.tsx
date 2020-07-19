import React, { FunctionComponent } from "react";
import Link from "next/link";
import { Post as PostType } from "../../shared/types";
import { Card, Figure, Title, Lead } from "./PostCardStyle";

interface PostProps {
  post: PostType;
}

export const PostCard: FunctionComponent<PostProps> = ({ post }) => {
  return (
    <Link href="/post/[id]" as={`/post/${post.id}`} passHref>
      <Card>
        <Figure>
          <img alt={post.title} src={post.image} />
        </Figure>
        <Title>{post.title}</Title>
        <Lead>{post.lead}</Lead>
      </Card>
    </Link>
  );
};
