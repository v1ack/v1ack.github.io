import type { Writable } from "svelte/store"

export const ctxName = "accordion"

export interface ICtx {
  store: Writable<number>
  getId: () => number
}
