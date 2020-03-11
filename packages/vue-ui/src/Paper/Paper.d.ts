import * as Vue from 'vue';
import { StandardProps } from '..';

export interface PaperProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, PaperClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type PaperClasskey = [<classKey>];

declare const Paper: Vue.ComponentType<PaperProps>;

export default Paper;