require("../core/core.module");

import { PhotoGalleryEditorComponent } from "./photo-gallery-editor.component";
import { PhotoGalleryListComponent } from "./photo-gallery-list.component";
import { PhotoGalleryComponent } from "./photo-gallery.component";
import { PhotoGalleryActionCreator } from "./photo-gallery.actions";
import { PhotoGalleryService } from "./photo-gallery.service";
import *  as reducers from "./photo-gallery.reducers";

var app = (<any>angular.module("app.photoGallery", [
    "app.core"    
]));

app.service("photoGalleryActionCreator",["$location","dispatcher","photoGalleryService","guid",PhotoGalleryActionCreator]);
app.service("photoGalleryService",["$q","apiEndpoint","fetch",PhotoGalleryService]);
app.component((PhotoGalleryEditorComponent as any).config);
app.component((PhotoGalleryListComponent as any).config);
app.component((PhotoGalleryComponent as any).config);

app.config(["reducersProvider", reducersProvider => {	
	reducersProvider.configure(reducers.addPhotoGalleryReducer);
    reducersProvider.configure(reducers.allPhotoGallerysReducer);
    reducersProvider.configure(reducers.removePhotoGalleryReducer);
}]);
