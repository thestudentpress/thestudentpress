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
    new External("2",
        "I Can't Speak",
        "Zoe Ortiz",
        "Harvard University",
        "culture",
        "August 31, 2016",
        "I’m sitting in a classroom, surrounded by my peers, but I can’t speak. There’s a pit of uncertainty pooling deep within my stomach, growing larger with every expectant glance from my Teaching Fellow, and I can’t help but feel inferior.",
        "The Harvard Crimson",
        "http://www.thecrimson.com/article/2016/9/1/i-cant-speak/"),
    new External("1",
        "Orlando, In Solidarity",
        "Nathan Chan",
        "University of Toronto",
        "world",
        "June 20, 2016",
        "A photo essay of University of Toronto student vigils held in support of the victims of the Orlando shooting",
        "The Varsity",
        "http://thevarsity.ca/2016/06/20/orlando-in-solidarity-a-photo-essay/"),
];