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
    new External("4", "Sexual assault is a problem at Stanford, but the details are missing", "Chloe Hart", "Stanford University", "opinion", "June 12, 2016", "The Brock Turner sexual assault case has left many of us at Stanford reeling. The details of the case are disturbing.", "The Stanford Daily", "http://www.stanforddaily.com/2016/06/12/sexual-assault-is-a-problem-at-stanford-but-the-details-are-missing/"),
    new External("5", "Yale, and why campus P.C. culture hurts its own cause", "Harry Meadows	", "Bates College", "culture", "November 18, 2015", "An important distinction needs to be made between what’s happening at Yale and what’s happening at the University of Missouri. While there may also be difficult issues about speech and freedom of the press at play at Mizzou, ultimately what’s at stake is the actual physical safety of students of color.", "The Bates Student", "http://www.thebatesstudent.com/2015/11/yale-campus-p-c-culture-hurts-cause/"),
    new External("6", "Positively sex: Cosmo and the rise of female sexuality", "Katya Downey", "University of British Columbia", "culture", "August 18, 2016", "Confession — when I'm down, I gravitate towards a certain magazine that's famous for sex tips that could make you a danger to yourself and others. My personal investigation shows that it’s impossible to stress while reading Cosmopolitan Magazine.", "The Ubyssey", "http://ubyssey.ca/opinion/positively-sex-cosmo-and-the-rise-of-female-sexuality/"),
    new External("3", "Frank Ocean \"Blond\" review", "Waiss David Aramesh", "Penn State University", "art", "September 6, 2016", "After four years since Frank Ocean’s debut album \"Channel Orange\" and just mere days after Ocean dropped a visual album on Apple Music, the two-time Grammy award winner finally dropped his second studio album titled \"Blond\".", "Daily Collegian", "http://www.collegian.psu.edu/arts_and_entertainment/article_1b90f3b4-73cd-11e6-9f85-a70ef1b9bc15.html"),
    new External("2", "I Can't Speak", "Zoe Ortiz", "Harvard University", "culture", "August 31, 2016", "I’m sitting in a classroom, surrounded by my peers, but I can’t speak. There’s a pit of uncertainty pooling deep within my stomach, growing larger with every expectant glance from my Teaching Fellow, and I can’t help but feel inferior.", "The Harvard Crimson", "http://www.thecrimson.com/article/2016/9/1/i-cant-speak/"),
    new External("1", "Orlando, In Solidarity", "Nathan Chan", "University of Toronto", "world", "June 20, 2016", "A photo essay of University of Toronto student vigils held in support of the victims of the Orlando shooting", "The Varsity", "http://thevarsity.ca/2016/06/20/orlando-in-solidarity-a-photo-essay/"),
];
//# sourceMappingURL=piece.js.map