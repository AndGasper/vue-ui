import * as Vue from 'vue';
import { StandardProps } from '..';

export interface SlideProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, SlideClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type SlideClasskey = [<classKey>];

declare const Slide: Vue.ComponentType<SlideProps>;

export default Slide;