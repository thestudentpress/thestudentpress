export abstract class Piece {
    id: string;
    title: string;
    author: string;
    school: string;
    category: string;
    date: string;
    description: string;

    constructor(id: string, title: string, author: string, school: string, category: string, date: string, description: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.school = school;
        this.category = category;
        this.date = date;
        this.description = description;
    }

    abstract isInternal(): boolean
}

export class Internal extends Piece {

    constructor(id: string, title: string, author: string, school: string, category: string, date: string, description: string) {
        super(id, title, author, school, category, date, description);
    }

    isInternal(): boolean {
        return true;
    }
}

export class External extends Piece {

    publication: string;
    link: string;

    constructor(id: string, title: string, author: string, school: string, category: string, date: string, description: string, publication: string, link: string) {
        super(id, title, author, school, category, date, description);
        this.publication = publication;
        this.link = link;
    }

    isInternal(): boolean {
        return false;
    }
}

export var PIECES: Piece[] = [
    new External("3",
        "The Assignment Sheet",
        "Nancy Snow",
        "OCAD University",
        "art",
        "August 27, 2016",
        "Over the years I have had more than a few students claim that they don't read the assignment sheets provided in their classes. I have begun to wonder if some say this because they don't want to admit they don't understand what is being asked of them.",
        "OCAD U Student Press",
        "http://www.ocadustudentpress.com/shift/posts/the-assignment-sheet"),
    new External("4",
        "Cage The Elephant",
        "Julia Day",
        "University at Albany",
        "art",
        "May 3, 2016",
        "In an interview with the Albany Student Press, Cage the Elephant vocalist Matt Shultz described the band’s early years and formation of their members.",
        "Albany Student Press",
        "http://www.albanystudentpress.net/cage-the-elephant-on-the-loose-in-albany/"),
    new External("1",
        "Orlando, In Solidarity",
        "Nathan Chan",
        "University of Toronto",
        "world",
        "June 20, 2016",
        "A photo essay of University of Toronto student vigils held in support of the victims of the Orlando shooting",
        "The Varsity",
        "http://thevarsity.ca/2016/06/20/orlando-in-solidarity-a-photo-essay/"),
    new External("3",
        "The Assignment Sheet",
        "Nancy Snow",
        "OCAD University",
        "art",
        "August 27, 2016",
        "Over the years I have had more than a few students claim that they don't read the assignment sheets provided in their classes. I have begun to wonder if some say this because they don't want to admit they don't understand what is being asked of them.",
        "OCAD U Student Press",
        "http://www.ocadustudentpress.com/shift/posts/the-assignment-sheet"),
    new External("4",
        "Cage The Elephant",
        "Julia Day",
        "University at Albany",
        "art",
        "May 3, 2016",
        "In an interview with the Albany Student Press, Cage the Elephant vocalist Matt Shultz described the band’s early years and formation of their members.",
        "Albany Student Press",
        "http://www.albanystudentpress.net/cage-the-elephant-on-the-loose-in-albany/"),
    new External("1",
        "Orlando, In Solidarity",
        "Nathan Chan",
        "University of Toronto",
        "world",
        "June 20, 2016",
        "A photo essay of University of Toronto student vigils held in support of the victims of the Orlando shooting",
        "The Varsity",
        "http://thevarsity.ca/2016/06/20/orlando-in-solidarity-a-photo-essay/"),
    new External("3",
        "The Assignment Sheet",
        "Nancy Snow",
        "OCAD University",
        "art",
        "August 27, 2016",
        "Over the years I have had more than a few students claim that they don't read the assignment sheets provided in their classes. I have begun to wonder if some say this because they don't want to admit they don't understand what is being asked of them.",
        "OCAD U Student Press",
        "http://www.ocadustudentpress.com/shift/posts/the-assignment-sheet"),
    new External("4",
        "Cage The Elephant",
        "Julia Day",
        "University at Albany",
        "art",
        "May 3, 2016",
        "In an interview with the Albany Student Press, Cage the Elephant vocalist Matt Shultz described the band’s early years and formation of their members.",
        "Albany Student Press",
        "http://www.albanystudentpress.net/cage-the-elephant-on-the-loose-in-albany/"),
    new External("1",
        "Orlando, In Solidarity",
        "Nathan Chan",
        "University of Toronto",
        "world",
        "June 20, 2016",
        "A photo essay of University of Toronto student vigils held in support of the victims of the Orlando shooting",
        "The Varsity",
        "http://thevarsity.ca/2016/06/20/orlando-in-solidarity-a-photo-essay/"),
    new External("3",
        "The Assignment Sheet",
        "Nancy Snow",
        "OCAD University",
        "art",
        "August 27, 2016",
        "Over the years I have had more than a few students claim that they don't read the assignment sheets provided in their classes. I have begun to wonder if some say this because they don't want to admit they don't understand what is being asked of them.",
        "OCAD U Student Press",
        "http://www.ocadustudentpress.com/shift/posts/the-assignment-sheet"),
    new External("4",
        "Cage The Elephant",
        "Julia Day",
        "University at Albany",
        "art",
        "May 3, 2016",
        "In an interview with the Albany Student Press, Cage the Elephant vocalist Matt Shultz described the band’s early years and formation of their members.",
        "Albany Student Press",
        "http://www.albanystudentpress.net/cage-the-elephant-on-the-loose-in-albany/"),
    new External("1",
        "Orlando, In Solidarity",
        "Nathan Chan",
        "University of Toronto",
        "world",
        "June 20, 2016",
        "A photo essay of University of Toronto student vigils held in support of the victims of the Orlando shooting",
        "The Varsity",
        "http://thevarsity.ca/2016/06/20/orlando-in-solidarity-a-photo-essay/"),
    new External("3",
        "The Assignment Sheet",
        "Nancy Snow",
        "OCAD University",
        "art",
        "August 27, 2016",
        "Over the years I have had more than a few students claim that they don't read the assignment sheets provided in their classes. I have begun to wonder if some say this because they don't want to admit they don't understand what is being asked of them.",
        "OCAD U Student Press",
        "http://www.ocadustudentpress.com/shift/posts/the-assignment-sheet"),
    new External("4",
        "Cage The Elephant",
        "Julia Day",
        "University at Albany",
        "art",
        "May 3, 2016",
        "In an interview with the Albany Student Press, Cage the Elephant vocalist Matt Shultz described the band’s early years and formation of their members.",
        "Albany Student Press",
        "http://www.albanystudentpress.net/cage-the-elephant-on-the-loose-in-albany/"),
    new External("1",
        "Orlando, In Solidarity",
        "Nathan Chan",
        "University of Toronto",
        "world",
        "June 20, 2016",
        "A photo essay of University of Toronto student vigils held in support of the victims of the Orlando shooting",
        "The Varsity",
        "http://thevarsity.ca/2016/06/20/orlando-in-solidarity-a-photo-essay/")
];