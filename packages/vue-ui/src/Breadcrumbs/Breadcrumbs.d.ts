import * as Vue from 'vue';
import { StandardProps } from '..';

export interface BreadcrumbsProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, BreadcrumbsClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type BreadcrumbsClasskey = [<classKey>];

declare const Breadcrumbs: Vue.ComponentType<BreadcrumbsProps>;

export default Breadcrumbs;