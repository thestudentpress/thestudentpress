import { Component } from '@angular/core';
import { AppMenu } from "./app.menu"
import { AppHome } from "./app.home"


@Component({
    selector: "app",
    templateUrl: "templates/app.html",
    directives: [AppMenu, AppHome]
})

export class AppComponent {

}
