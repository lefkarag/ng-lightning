/// <reference path="../typings/main.d.ts"/>

import {NglAvatar} from './images/avatar';
import {NglBadge} from './badges/badge';
import {NglButton} from './buttons/button';
import {NglButtonState} from './buttons/button-state';
import {NglButtonIcon} from './buttons/button-icon';
import {NglIconButton} from './buttons/icon';
import {NglIcon} from './icons/icon';
import {NglModal} from './modals/modal';
import {NglPagination} from './paginations/pagination';
import {NglRating} from './ratings/rating';
import {NglSpinner} from './spinners/spinner';
import {NglTabs} from './tabs/tabs';
import {NglTab} from './tabs/tab';
import {NglTruncate} from './truncates/truncate';

export {NglAvatar} from './images/avatar';
export {NglBadge} from './badges/badge';
export {NglButton} from './buttons/button';
export {NglButtonState} from './buttons/button-state';
export {NglButtonIcon} from './buttons/button-icon';
export {NglIconButton} from './buttons/icon';
export {NglIcon} from './icons/icon';
export {NglModal} from './modals/modal';
export {NglPagination} from './paginations/pagination';
export {NglRating} from './ratings/rating';
export {NglSpinner} from './spinners/spinner';
export {NglTabs} from './tabs/tabs';
export {NglTab} from './tabs/tab';
export {NglTruncate} from './truncates/truncate';

export const NGL_DIRECTIVES = [
  NglAvatar,
  NglBadge,
  NglButton, NglButtonState, NglButtonIcon, NglIconButton,
  NglIcon,
  NglModal,
  NglPagination,
  NglRating,
  NglSpinner,
  NglTabs, NglTab,
  NglTruncate,
];

export {provideNglConfig} from './config/config';
