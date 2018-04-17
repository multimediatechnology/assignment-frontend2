import Handlebars from "handlebars/runtime";
import constructorPartial from "../views/partials/constructor.hbs";
import constructorsPartial from "../views/partials/constructors.hbs";

Handlebars.registerPartial("constructor", constructorPartial);
Handlebars.registerPartial("constructors", constructorsPartial);

export function index() {
    this.render("constructors")
}

export function show() {
    this.render("constructor")
}
