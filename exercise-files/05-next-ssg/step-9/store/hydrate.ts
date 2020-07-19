import { AnyAction } from "redux"
import { HYDRATE } from "next-redux-wrapper"

export interface HydrateAction extends AnyAction {
  type: typeof HYDRATE
}
