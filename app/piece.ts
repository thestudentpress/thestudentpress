export class Piece {

    id: string;
    title: string;
    author: string;
    school: string;
    local: boolean;
    category: string;
    date: string;
    description: string;
    publication: string;
    link: string;

    constructor(id: string, title: string, author: string, school: string, local: boolean, category: string, date: string, description: string, publication: string, link: string) {
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
}