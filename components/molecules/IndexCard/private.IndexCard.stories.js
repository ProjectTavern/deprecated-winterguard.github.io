import React from "react";
import IndexCard from "./index";

export default {
  title: "molecules/IndexCard",
  component: IndexCard,
};

const IndexCard_A_Story = (props) => <IndexCard {...props} />;
export const IndexCard_A_Control = IndexCard_A_Story.bind({});
IndexCard_A_Control.storyName = "IndexCard";
IndexCard_A_Control.args = {
  title: "StoryCard",
  description: "StoryCard Description",
  href: "https://github.com/",
  target: "_blank",
};
