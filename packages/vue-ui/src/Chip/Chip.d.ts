import * as Vue from 'vue';
import { StandardProps } from '..';

export interface ChipProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, ChipClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type ChipClasskey = [<classKey>];

declare const Chip: Vue.ComponentType<ChipProps>;

export default Chip;