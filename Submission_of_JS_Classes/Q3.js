// Q3 code placeholder
// Q3: Library Management System

class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`${this.title} issued successfully.`);
        } else {
            console.log(`${this.title} is already issued.`);
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(`${this.title} returned.`);
    }
}

const books = [
    new Book("Atomic Habits", "James Clear", "101"),
    new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "102", true),
    new Book("DSA Made Easy", "Narasimha Karumanchi", "103")
];

console.log("Available Books:");
books.filter(b => !b.isIssued).forEach(b => console.log(b.title));

function issueBookByISBN(isbn) {
    const book = books.find(b => b.isbn === isbn);
    if (book) book.issueBook();
    else console.log("Book not found!");
}

issueBookByISBN("103");
