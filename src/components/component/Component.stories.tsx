import React from 'react';
import { Story } from '@storybook/react';
import { ExportedType } from '../../@types/__storybook__';
import Component, { Props } from './Component';

export default {
  title: 'Component',
  component: Component,
  subcomponents: {
    ExportedType,
  },
  parameters: {
    componentSubtitle: "import { Component } from 'library';",
    docs: {
      description: {
        component: `Observe that, on the "Canvas" tab, args are sorted using the \`requiredFirst\`
          sort mode specified in \`.storybook/preview.js\` (<b>correct</b>).
          <br/><br/>
          Also observe that, on the "Docs" tab, args are not sorted using this sort mode, and are
          instead sorted as they are defined/processed by args rendering (<b>incorrect</b>). This is true for both the
          component's own args, as well as those from subcomponents/exported types which are visible
          on the "Docs" tab props table.`,
      },
    },
  },
};

const Template: Story<Props> = (args: Props) => <Component {...args} />;

export const Example = Template.bind({});
Example.args = {
  aaa_req: '',
  aaa_opt: 1,
  ccc_req: '',
};
