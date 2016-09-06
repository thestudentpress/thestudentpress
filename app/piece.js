"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Piece = (function () {
    function Piece(id, title, author, school, category, date, description) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.school = school;
        this.category = category;
        this.date = date;
        this.description = description;
    }
    return Piece;
}());
exports.Piece = Piece;
var Internal = (function (_super) {
    __extends(Internal, _super);
    function Internal(id, title, author, school, category, date, description) {
        _super.call(this, id, title, author, school, category, date, description);
    }
    Internal.prototype.isInternal = function () {
        return true;
    };
    return Internal;
}(Piece));
exports.Internal = Internal;
var External = (function (_super) {
    __extends(External, _super);
    function External(id, title, author, school, category, date, description, publication, link) {
        _super.call(this, id, title, author, school, category, date, description);
        this.publication = publication;
        this.link = link;
    }
    External.prototype.isInternal = function () {
        return false;
    };
    return External;
}(Piece));
exports.External = External;
exports.PIECES = [
    new External("2", "I Can't Speak", "Zoe Ortiz", "Harvard University", "culture", "August 31, 2016", "I’m sitting in a classroom, surrounded by my peers, but I can’t speak. There’s a pit of uncertainty pooling deep within my stomach, growing larger with every expectant glance from my Teaching Fellow, and I can’t help but feel inferior.", "The Harvard Crimson", "http://www.thecrimson.com/article/2016/9/1/i-cant-speak/"),
    new External("1", "Orlando, In Solidarity", "Nathan Chan", "University of Toronto", "world", "June 20, 2016", "A photo essay of University of Toronto student vigils held in support of the victims of the Orlando shooting", "The Varsity", "http://thevarsity.ca/2016/06/20/orlando-in-solidarity-a-photo-essay/"),
];
//# sourceMappingURL=piece.js.map