import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { Icon } from "./icon"

declare let module

storiesOf("Icon", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Names", () => (
    <Story>
      <UseCase text="back" usage="The icon for going back">
        <Icon icon="back" />
      </UseCase>
      <UseCase text="bullet" usage="The icon for a bullet point">
        <Icon icon="bullet" />
      </UseCase>
      <UseCase text="bookmarkBlue" usage="The icon for a reminder unactive tab">
        <Icon icon="bookmarkBlue" />
      </UseCase>
      <UseCase text="bookmarkOrange" usage="The icon for a reminder active tab">
        <Icon icon="bookmarkOrange" />
      </UseCase>
      <UseCase text="tasksBlue" usage="The icon for a tasks unactive tab">
        <Icon icon="tasksBlue" />
      </UseCase>
      <UseCase text="tasksOrange" usage="The icon for a tasks active tab">
        <Icon icon="tasksOrange" />
      </UseCase>
    </Story>
  ))
