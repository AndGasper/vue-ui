export type StandardProps<C, ClassKey extends string, Removals extends keyof C = never> = Omit<C, 'classes' | Removals> &
    StyledComponentProps<ClassKey> & {
        className?: string;
        ref?: C extends { ref?: infer RefType} ? RefType : Vue.Ref<unknown>;
        style: Vue.CSSProperties;
    };