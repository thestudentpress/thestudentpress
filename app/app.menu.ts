import {Component, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'menu',
    templateUrl: 'templates/menu.html'
})

export class AppMenu {

    @Output() categorySelected = new EventEmitter();

    menuActive: Boolean = false;

    onMenuClick() {
        this.menuActive = !this.menuActive;
    }

    onMenuSelect(option) {
        this.categorySelected.emit(option);
        this.menuActive = false;
    }
}