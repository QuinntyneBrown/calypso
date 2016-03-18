require('./flip-card.component.css');

import { CanActivate, Component } from "../core/component-decorators";
import { FlipCardActionCreator } from "./flip-card.actions";

@Component({
    templateUrl: "wwwroot/flip-card/flip-card.component.html",
	styleUrls: ["wwwroot/flip-card/flip-card.component.css"],
    selector: "flip-card",
    providers: ["$element"]
})
export class FlipCardComponent {
    constructor(private $element: angular.IAugmentedJQuery) { }
  
    ngOnit = () => {
        this.$element[0].addEventListener("ontouchstart", () => {
            this.$element[0].classList.toggle('hover');
        })
    }
}
