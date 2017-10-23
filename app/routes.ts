import {Routes} from "@angular/router";
import {Error404Component} from "./errors/404.component";

import {
    CreateEventComponent,
    EventDetailsComponent,
    EventListResolver,
    EventRouteActivator,
    EventsListComponent
} from './events/index'
import {CreateSessionComponent} from "./events/event-details/create-session.component";

export const appRoutes: Routes = [
    {path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
];