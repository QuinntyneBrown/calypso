import { CanActivate, Component } from "../core/component-decorators";
import { PhotoGalleryActionCreator } from "./photo-gallery.actions";

@Component({
    templateUrl: "wwwroot/photo-gallery/photo-gallery.component.html",
    selector: "photo-gallery",
    providers: ["photoGalleryActionCreator"]
})
export class PhotoGalleryComponent {
    constructor(private photoGalleryActionCreator: PhotoGalleryActionCreator) { }
  
}
