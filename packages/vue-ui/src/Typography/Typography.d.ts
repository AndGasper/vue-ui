import * as Vue from 'vue';
import { StandardProps } from '..';

export interface TypographyProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, TypographyClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type TypographyClasskey = [<classKey>];

declare const Typography: Vue.ComponentType<TypographyProps>;

export default Typography;