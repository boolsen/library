const myLibrary = [];
let container;
let modal;
let toggleDiv;
let titleInput;
let authorInput;
let pageCountInput;
let readInput;

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
    removeLibraryDisplay();
    for (let i= 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let element = document.createElement("div");
        element.classList.toggle("card");
        element.textContent = book.info();
        container.appendChild(element);
    }
}

function removeLibraryDisplay() {
    container.innerHTML = null;
}

document.addEventListener("DOMContentLoaded", (event) => {
    container = document.querySelector(".library-container");
    modal = document.querySelector(".modal");
    toggleDiv = document.querySelector(".toggle");
    titleInput = document.querySelector("#title");
    authorInput = document.querySelector("#author");
    pageCountInput = document.querySelector("#page-count");
    readInput = document.querySelector("#read");
})

function toggleHidden(element) {
    element.classList.toggle("hidden");
}

function closeModal() {
    toggleHidden(toggleDiv);
}

function newBookModal() {
    titleInput.value = null;
    authorInput.value = null;
    pageCountInput.value = null;
    readInput.value = null;
    toggleHidden(toggleDiv);
}

function addBookFromModal() {
    let title;
    let author;
    let pageCount;
    let read;

    if (verifyInput(titleInput)) {
        title = titleInput.value;
    }
    if (verifyInput(authorInput)) {
        author = authorInput.value;
    }
    if (verifyInput(pageCountInput)) {
        pageCount = pageCountInput.value;
    }
    if (verifyInput(readInput)) {
        read = readInput.value;
    }

    addBookToLibrary(title, author, pageCount, read);

    closeModal();

}

function verifyInput(element) {
    if (!element.value) {
        return false;
    }
    return true;
}