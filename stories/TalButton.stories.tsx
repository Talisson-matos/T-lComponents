import React from "react";
import {TalButton, TalButtonProps} from "../src"
import {ComponentMeta, ComponentStory} from "@storybook/react"

export default {
   title: "components/TalButton",
   component: TalButton
} as ComponentMeta<typeof TalButton>

const Template: ComponentStory< typeof TalButton > = (props) => <TalButton {...props}/>

export const Primario = Template.bind({});

Primario.args = {
   texto: "Talbutton",
   tipo: "primario"
} as TalButtonProps

export const Secundario = Template.bind({});

Secundario.args = {
   texto: "talbutton",
   tipo: "secundario"
} as TalButtonProps