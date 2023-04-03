import { VirtualizerScrollViewDynamic } from '../../src/VirtualizerScrollViewDynamic';
import descriptionMd from './VirtualizerScrollViewDynamicDescription.md';

export { Default } from './Default.stories';
export { ScrollTo } from './ScrollTo.stories';

export default {
  title: 'Preview Components/VirtualizerScrollViewDynamic',
  component: VirtualizerScrollViewDynamic,
  parameters: {
    docs: {
      description: {
        component: [descriptionMd].join('\n'),
      },
    },
  },
};
