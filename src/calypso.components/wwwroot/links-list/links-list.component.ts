import { CanActivate, Component } from "../core/component-decorators";
import { LinksListActionCreator } from "./links-list.actions";

@Component({
    templateUrl: "wwwroot/links-list/links-list.component.html",
    selector: "links-list",
    providers: ["linksListActionCreator"]
})
export class LinksListComponent {
    constructor(private linksListActionCreator: LinksListActionCreator) { }
  
}
