import { CanActivate, Component } from "../core/component-decorators";
import { LegalActionCreator } from "./legal.actions";

@Component({
    templateUrl: "wwwroot/legal/legal.component.html",
    selector: "legal",
    providers: ["legalActionCreator"]
})
export class LegalComponent {
    constructor(private legalActionCreator: LegalActionCreator) { }
  
}
