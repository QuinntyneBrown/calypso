import { CanActivate, Component } from "../core/component-decorators";
import { LogoActionCreator } from "./logo.actions";

@Component({
    templateUrl: "wwwroot/logo/logo.component.html",
    selector: "logo",
    providers: ["logoActionCreator"]
})
export class LogoComponent {
    constructor(private logoActionCreator: LogoActionCreator) { }
  
}
