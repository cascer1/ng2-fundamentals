import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {EventsAppComponent} from "./events-app.component";
import {EventService} from "./events/shared/event.service";
import {EventsListComponent} from "./events/events-list.component";
import {EventThumbnailComponent} from "./events/event-thumbnail.component";
import {EventDetailsComponent} from "./events/event-details/event-details.component";
import {NavBarComponent} from "./nav/navbar.component";
import {ToastrService} from "./common/toastr.service";
import {appRoutes} from "./routes";
import {RouterModule} from "@angular/router";
import {CreateEventComponent} from "./events/create-event.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        NavBarComponent
    ],
    providers: [
        EventService,
        ToastrService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}