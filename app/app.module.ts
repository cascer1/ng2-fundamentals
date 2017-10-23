import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {EventsAppComponent} from "./events-app.component";
import {NavBarComponent} from "./nav/navbar.component";
import {ToastrService} from "./common/toastr.service";
import {appRoutes} from "./routes";
import {RouterModule} from "@angular/router";
import {Error404Component} from "./errors/404.component";

import {
    CreateEventComponent,
    EventDetailsComponent,
    EventListResolver,
    EventRouteActivator,
    EventService,
    EventsListComponent,
    EventThumbnailComponent
} from './events/index'
import {AuthService} from "./user/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateSessionComponent} from "./events/event-details/create-session.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        CreateSessionComponent,
        NavBarComponent,
        Error404Component
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        EventListResolver,
        AuthService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?');

    return true;
}