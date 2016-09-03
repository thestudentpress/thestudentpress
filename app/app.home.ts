import {Component} from "@angular/core";
import {Piece, PIECES} from "./piece";

@Component({
    selector: 'home',
    templateUrl: 'templates/home.html',
})

export class AppHome {

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

    classNumber(n: number): string {
        return "piece-container _" + n % 3 + " __" + n % 2;
    }
}