import * as Vue from 'vue';
import { StandardProps } from '..';

export interface SliderProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, SliderClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type SliderClasskey = [<classKey>];

declare const Slider: Vue.ComponentType<SliderProps>;

export default Slider;