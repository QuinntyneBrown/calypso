import { CanActivate, Component } from "../core/component-decorators";
import { PhotoGalleryActionCreator } from "./photo-gallery.actions";

@Component({
    route: "/photo-gallery/edit/:id",
    templateUrl: "wwwroot/photo-gallery/photo-gallery-editor.component.html",
    selector: "photo-gallery-editor",
    providers: ["$location","photoGalleryActionCreator","invokeAsync"]
})
@CanActivate(["$route", "invokeAsync", "photoGalleryActionCreator", ($route, invokeAsync, photoGalleryActionCreator: PhotoGalleryActionCreator) => {
    var id = $route.current.params.id;
    return invokeAsync({
        action: photoGalleryActionCreator.getById,
        params: { id: id }
    });
}])
export class PhotoGalleryEditorComponent {
    constructor(private $location: angular.ILocationService, private photoGalleryActionCreator: PhotoGalleryActionCreator, private invokeAsync) { }

    storeOnChange = state => { }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.photoGalleryActionCreator.addOrUpdate,
            params: {
                data: {
                    id: this.id,
                }
            }
        }).then(() => {
            if (!this.id && this.entities.filter(entity => entity.name === this.name).length > 0) {

            }
            else {

            }
        });
    } 
    
    create = () => {
        this.photoGalleryActionCreator.create();
    }

    remove = () => this.photoGalleryActionCreator.remove({ id: this.id });
         
    id;
	name;
	entities;
    baseUrl;
}
