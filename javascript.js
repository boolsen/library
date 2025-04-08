const myLibrary = [];
let container;
let modal;
let toggleDiv;

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
        return this.title + " by " + this.author + ", " + this.pageCount.toString() + ", " + this.alreadyRead;
    }
}

function addBookToLibrary(title, author, pageCount, read) {
    let book = new Book(title, author, pageCount, read);
    myLibrary.push(book);
}

function displayLibrary() {
    for (let i= 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let element = document.createElement("div");
        element.classList.toggle("card");
        element.textContent = book.info();
        container.appendChild(element);
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    container = document.querySelector(".library-container");
    modal = document.querySelector(".modal");
    toggleDiv = document.querySelector(".toggle");
})

function toggleHidden(element) {
    element.classList.toggle("hidden");
}

function newBookModal() {
    toggleHidden(toggleDiv);
}