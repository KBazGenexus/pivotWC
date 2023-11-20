import type { Components, JSX } from "../types/components";

interface MyPivot extends Components.MyPivot, HTMLElement {}
export const MyPivot: {
  prototype: MyPivot;
  new (): MyPivot;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
