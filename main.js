function Book(title, author, pages) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.isRead = Boolean(false);

    this.info = function() {
        if (!this.isRead) {
            return `${this.title} by ${this.author}, ${this.pages}, already read.`;
        }
        else {
            return `${this.title} by ${this.author}, ${this.pages}, not read yet.`;
        }
    }   
}

function addBookToLibrary() {
    let title = prompt("Enter your book name: ", "Sherlock Holmes");  
    let author = prompt("Enter the book author: ", "Arthur Conan Doyle");
    let pages = parseInt(prompt("Enter the book pages: ", "341"));
    while (typeof(pages) != 'numbers') {
        let pages = parseInt(prompt("Enter the correct book pages: "));
    }

    let isRead = prompt("Yes if read / No if not. Choose Y/N"); 
    if (isRead.toUpperCase() === "Y") {
        isRead = true; 
    } else { isRead = false; };
}

// const harryPotter = new Book('Harry Potter', 'J.K.Rowling', 324); 
// console.log(harryPotter.info());

let myLibrary = [];
let title = prompt("Enter your book name: ", "Sherlock Holmes");  
let author = prompt("Enter the book author: ", "Arthur Conan Doyle");
let pages = parseInt(prompt("Enter the book pages: ", "341"));
let isRead = prompt("Yes if read / No if not. Choose Y/N"); 
// addBookToLibrary();


