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
    new External("4",
        "Sexual assault is a problem at Stanford, but the details are missing",
        "Chloe Hart",
        "Stanford University",
        "opinion",
        "June 12, 2016",
        "The Brock Turner sexual assault case has left many of us at Stanford reeling. The details of the case are disturbing.",
        "The Stanford Daily",
        "http://www.stanforddaily.com/2016/06/12/sexual-assault-is-a-problem-at-stanford-but-the-details-are-missing/"),
    new External("5",
        "Yale, and why campus P.C. culture hurts its own cause",
        "Harry Meadows	",
        "Bates College",
        "culture",
        "November 18, 2015",
        "An important distinction needs to be made between what’s happening at Yale and what’s happening at the University of Missouri. While there may also be difficult issues about speech and freedom of the press at play at Mizzou, ultimately what’s at stake is the actual physical safety of students of color.",
        "The Bates Student",
        "http://www.thebatesstudent.com/2015/11/yale-campus-p-c-culture-hurts-cause/"),
    new External("6",
        "Positively sex: Cosmo and the rise of female sexuality",
        "Katya Downey",
        "University of British Columbia",
        "culture",
        "August 18, 2016",
        "Confession — when I'm down, I gravitate towards a certain magazine that's famous for sex tips that could make you a danger to yourself and others. My personal investigation shows that it’s impossible to stress while reading Cosmopolitan Magazine.",
        "The Ubyssey",
        "http://ubyssey.ca/opinion/positively-sex-cosmo-and-the-rise-of-female-sexuality/"),
    new External("3",
        "Frank Ocean \"Blond\" review",
        "Waiss David Aramesh",
        "Penn State University",
        "art",
        "September 6, 2016",
        "After four years since Frank Ocean’s debut album \"Channel Orange\" and just mere days after Ocean dropped a visual album on Apple Music, the two-time Grammy award winner finally dropped his second studio album titled \"Blond\".",
        "Daily Collegian",
        "http://www.collegian.psu.edu/arts_and_entertainment/article_1b90f3b4-73cd-11e6-9f85-a70ef1b9bc15.html"),
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