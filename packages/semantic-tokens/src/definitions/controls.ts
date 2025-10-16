// Make control tokens for compound button that cover:
// iconSize
// scale padding
// gap
// minWidth
// minHeight

import { GroupPart, Groups } from './groups';

const compoundButtonGroup: GroupPart = {
  coreProperties: ['icon.size'],
  scales: ['small', 'medium', 'large'],
  scaleProperties: ['padding.horizontal', 'padding.top', 'padding.bottom', 'gap', 'minwidth', 'minheight'],
};

export const controls: Groups = {
  compoundButton: compoundButtonGroup,
};
