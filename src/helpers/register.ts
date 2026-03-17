import Handlebars from "handlebars";

export function registerHelpers(hbs: typeof Handlebars) {
  hbs.registerHelper("sayHello", (name: string) => `Hello ${name}`);
  hbs.registerHelper("sayGoodbye", (name: string) => `Goodbye ${name}`);
}
