import { CanActivate, Component } from "../core/component-decorators";
import { ProductPageActionCreator } from "./product-page.actions";

@Component({
    templateUrl: "wwwroot/product-page/product-page.component.html",
    selector: "product-page",
    providers: ["productPageActionCreator"]
})
export class ProductPageComponent {
    constructor(private productPageActionCreator: ProductPageActionCreator) { }
  
}
