import { Component } from '@angular/core';
import {Piece} from "./piece";
import {PIECES} from "./pieces";
import {NgSwitch, NgSwitchDefault} from "@angular/common";

@Component({
    selector: 'app',
    templateUrl: 'templates/home.html',
    directives: []
})

export class AppComponent {

    currentPiece: Piece;

    one: String;

    menu: Boolean = false;

    sectionHeight: Number = 3;

    pieces: Piece[] = PIECES;

    menuSelect() {
        if (this.menu) {
            this.sectionHeight = 3;
            this.menu = false;
            this.one = null;
        }
        else {
            this.sectionHeight = 40;
            this.menu = true;
            this.one = "all"
        }
    }

    cardSelect(piece: Piece) {
        if (this.currentPiece == piece) {
            this.currentPiece = null;
        }
        else {
            this.currentPiece = piece;
        }
    }

    imageURL(piece: Piece): string {
        return "url(images/" + piece.id + ".jpg)"
    }
}
