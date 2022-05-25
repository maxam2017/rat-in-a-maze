import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Maze from "./maze";

export default {
  title: "components/maze",
  component: Maze,
  argTypes: {},
} as ComponentMeta<typeof Maze>;

const Template: ComponentStory<typeof Maze> = (args) => <Maze {...args} />;

export const simple = Template.bind({});

simple.args = {
  size: 8,
  coordinates: {
    wall: [
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [2, 5],
      [2, 7],
      [3, 5],
      [3, 7],
      [4, 0],
      [4, 1],
      [4, 2],
      [4, 3],
      [4, 7],
      [5, 2],
      [6, 0],
      [6, 2],
      [6, 4],
      [6, 5],
      [6, 6],
      [7, 0],
    ],
    rat: [2, 4],
    cheese: [5, 1],
  },
};
