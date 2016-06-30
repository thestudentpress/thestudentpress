"use strict";
var Piece = (function () {
    function Piece(id, title, author, school, local, category, date, description, publication, link) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.school = school;
        this.local = local;
        this.category = category;
        this.date = date;
        this.description = description;
        this.publication = publication;
        this.link = link;
    }
    return Piece;
}());
exports.Piece = Piece;
//# sourceMappingURL=piece.js.map