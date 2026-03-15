import Handlebars from "handlebars";
import { registerHelpers } from "../helpers/register.js";

export function createEngine() {
  const instance = Handlebars.create();

  registerHelpers(instance);

  return instance;
}
