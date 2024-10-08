export { type Options, type SortableEvent } from 'sortablejs'

export type RefOrValue<T> = T
export type RefOrElement<T = HTMLElement> =
  | T
  | React.MutableRefObject<any>
export type Fn = (...args: any[]) => any
