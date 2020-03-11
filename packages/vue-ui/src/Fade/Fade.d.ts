import * as Vue from 'vue';
import { StandardProps } from '..';

export interface FadeProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, FadeClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type FadeClasskey = [<classKey>];

declare const Fade: Vue.ComponentType<FadeProps>;

export default Fade;