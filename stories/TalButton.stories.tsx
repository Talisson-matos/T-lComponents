import React from "react";
import {TalButton} from "../src"
import {ComponentMeta, ComponentStory} from "@storybook/react"

export default {
   title: "components/TalButton",
   component: TalButton
} as ComponentMeta<typeof TalButton>

const Template: ComponentStory< typeof TalButton > = () => <TalButton/>

export const Primaria = Template.bind({})