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
    new External("3", "The Assignment Sheet", "Nancy Snow", "OCAD University", "art", "August 27, 2016", "Over the years I have had more than a few students claim that they don't read the assignment sheets provided in their classes. I have begun to wonder if some say this because they don't want to admit they don't understand what is being asked of them.", "OCAD U Student Press", "http://www.ocadustudentpress.com/shift/posts/the-assignment-sheet"),
    new External("4", "Cage The Elephant", "Julia Day", "University at Albany", "art", "May 3, 2016", "In an interview with the Albany Student Press, Cage the Elephant vocalist Matt Shultz described the band’s early years and formation of their members.", "Albany Student Press", "http://www.albanystudentpress.net/cage-the-elephant-on-the-loose-in-albany/"),
    new External("1", "Orlando, In Solidarity", "Nathan Chan", "University of Toronto", "world", "June 20, 2016", "A photo essay of University of Toronto student vigils held in support of the victims of the Orlando shooting", "The Varsity", "http://thevarsity.ca/2016/06/20/orlando-in-solidarity-a-photo-essay/"),
    new External("3", "The Assignment Sheet", "Nancy Snow", "OCAD University", "art", "August 27, 2016", "Over the years I have had more than a few students claim that they don't read the assignment sheets provided in their classes. I have begun to wonder if some say this because they don't want to admit they don't understand what is being asked of them.", "OCAD U Student Press", "http://www.ocadustudentpress.com/shift/posts/the-assignment-sheet"),
    new External("4", "Cage The Elephant", "Julia Day", "University at Albany", "art", "May 3, 2016", "In an interview with the Albany Student Press, Cage the Elephant vocalist Matt Shultz described the band’s early years and formation of their members.", "Albany Student Press", "http://www.albanystudentpress.net/cage-the-elephant-on-the-loose-in-albany/"),
    new External("1", "Orlando, In Solidarity", "Nathan Chan", "University of Toronto", "world", "June 20, 2016", "A photo essay of University of Toronto student vigils held in support of the victims of the Orlando shooting", "The Varsity", "http://thevarsity.ca/2016/06/20/orlando-in-solidarity-a-photo-essay/"),
    new External("3", "The Assignment Sheet", "Nancy Snow", "OCAD University", "art", "August 27, 2016", "Over the years I have had more than a few students claim that they don't read the assignment sheets provided in their classes. I have begun to wonder if some say this because they don't want to admit they don't understand what is being asked of them.", "OCAD U Student Press", "http://www.ocadustudentpress.com/shift/posts/the-assignment-sheet"),
    new External("4", "Cage The Elephant", "Julia Day", "University at Albany", "art", "May 3, 2016", "In an interview with the Albany Student Press, Cage the Elephant vocalist Matt Shultz described the band’s early years and formation of their members.", "Albany Student Press", "http://www.albanystudentpress.net/cage-the-elephant-on-the-loose-in-albany/"),
    new External("1", "Orlando, In Solidarity", "Nathan Chan", "University of Toronto", "world", "June 20, 2016", "A photo essay of University of Toronto student vigils held in support of the victims of the Orlando shooting", "The Varsity", "http://thevarsity.ca/2016/06/20/orlando-in-solidarity-a-photo-essay/"),
    new External("3", "The Assignment Sheet", "Nancy Snow", "OCAD University", "art", "August 27, 2016", "Over the years I have had more than a few students claim that they don't read the assignment sheets provided in their classes. I have begun to wonder if some say this because they don't want to admit they don't understand what is being asked of them.", "OCAD U Student Press", "http://www.ocadustudentpress.com/shift/posts/the-assignment-sheet"),
    new External("4", "Cage The Elephant", "Julia Day", "University at Albany", "art", "May 3, 2016", "In an interview with the Albany Student Press, Cage the Elephant vocalist Matt Shultz described the band’s early years and formation of their members.", "Albany Student Press", "http://www.albanystudentpress.net/cage-the-elephant-on-the-loose-in-albany/"),
    new External("1", "Orlando, In Solidarity", "Nathan Chan", "University of Toronto", "world", "June 20, 2016", "A photo essay of University of Toronto student vigils held in support of the victims of the Orlando shooting", "The Varsity", "http://thevarsity.ca/2016/06/20/orlando-in-solidarity-a-photo-essay/"),
    new External("3", "The Assignment Sheet", "Nancy Snow", "OCAD University", "art", "August 27, 2016", "Over the years I have had more than a few students claim that they don't read the assignment sheets provided in their classes. I have begun to wonder if some say this because they don't want to admit they don't understand what is being asked of them.", "OCAD U Student Press", "http://www.ocadustudentpress.com/shift/posts/the-assignment-sheet"),
    new External("4", "Cage The Elephant", "Julia Day", "University at Albany", "art", "May 3, 2016", "In an interview with the Albany Student Press, Cage the Elephant vocalist Matt Shultz described the band’s early years and formation of their members.", "Albany Student Press", "http://www.albanystudentpress.net/cage-the-elephant-on-the-loose-in-albany/"),
    new External("1", "Orlando, In Solidarity", "Nathan Chan", "University of Toronto", "world", "June 20, 2016", "A photo essay of University of Toronto student vigils held in support of the victims of the Orlando shooting", "The Varsity", "http://thevarsity.ca/2016/06/20/orlando-in-solidarity-a-photo-essay/")
];
//# sourceMappingURL=piece.js.map