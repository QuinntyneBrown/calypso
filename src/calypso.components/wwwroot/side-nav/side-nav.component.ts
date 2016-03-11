import { CanActivate, Component } from "../core/component-decorators";
import { SideNavActionCreator } from "./side-nav.actions";

@Component({
    templateUrl: "wwwroot/side-nav/side-nav.component.html",
    selector: "side-nav",
    providers: ["sideNavActionCreator"]
})
export class SideNavComponent {
    constructor(private sideNavActionCreator: SideNavActionCreator) { }
  
}
