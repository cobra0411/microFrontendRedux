import { actionWrapper } from "../../utils/actionWrapper";
import { selector } from "../../utils/selector";
export const namespace = "App2";
export const select = selector(namespace);
export const actions = actionWrapper(namespace);
