import React from "react";
import PostCard from "./index";

export default {
  title: "molecules/PostCard",
  component: PostCard,
};

const PostCard_A_Story = (props) => <PostCard {...props} />;
export const PostCard_A_Control = PostCard_A_Story.bind({});
PostCard_A_Control.storyName = "PostCard";
PostCard_A_Control.args = {
  post: {
    slug: "#",
    categories: ["#"],
    title: "PostCard",
  },
};
