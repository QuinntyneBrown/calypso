import { CanActivate, Component } from "../core/component-decorators";
import { PhotoGalleryActionCreator } from "./photo-gallery.actions";

@Component({
    route: "/photoGallery/list",
    templateUrl: "wwwroot/photo-gallery/photo-gallery-list.component.html",
    selector: "photo-gallery-list",
    providers: ["$location","photoGalleryActionCreator"]
})
@CanActivate([
    "photoGalleryActionCreator", "invokeAsync",
    (photoGalleryActionCreator: PhotoGalleryActionCreator, invokeAsync) => invokeAsync(photoGalleryActionCreator.all)
])
export class PhotoGalleryListComponent {
    constructor(private $location: angular.ILocationService,private photoGalleryActionCreator: PhotoGalleryActionCreator) { }
    storeOnChange = state =>  this.entities = state.photoGallerys;   
    entities;
    remove = photoGallery => this.photoGalleryActionCreator.remove({ entity: photoGallery });
    edit = photoGallery => this.photoGalleryActionCreator.edit({ entity: photoGallery });    
}
