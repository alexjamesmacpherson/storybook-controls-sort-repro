import { create } from '@storybook/theming';
import { version } from '../package.json';

export default create({
  base: 'light',
  brandTitle: `Controls Sort Repro (v${version})`,
  brandUrl: 'https://bitbucket.org/imanagedev/search-ui',
});
