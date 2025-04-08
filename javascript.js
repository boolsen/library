const myLibrary = [];

function Book(title, author, pageCount, read) {

    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.alreadyRead = read;
    this.id = crypto.randomUUID();

    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + ", " + this.alreadyRead;
    }
}

function addBookToLibrary(title, author, pageCount, read) {
    let book = new Book(title, author, pageCount, read);
    myLibrary.push(book);
}

function displayLibrary() {
    for (book in myLibrary) {
        console.log(book.info());
    }
}