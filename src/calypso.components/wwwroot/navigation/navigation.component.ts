import { CanActivate, Component } from "../core/component-decorators";
import { NavigationActionCreator } from "./navigation.actions";

@Component({
    templateUrl: "wwwroot/navigation/navigation.component.html",
    selector: "navigation",
    providers: ["navigationActionCreator"]
})
export class NavigationComponent {
    constructor(private navigationActionCreator: NavigationActionCreator) { }
  
}
