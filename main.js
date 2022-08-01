// The constructor
function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.isRead = read;

    this.info = function() {
        if (this.isRead) {
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
    while (isNaN(pages)) {
        pages = parseInt(prompt("Enter the correct book pages: "));
    }

    let choice = prompt("Yes if read / No if not. Choose Y/N"); 
    while (choice !== "Y" && choice !== "N") {
        choice = prompt("Please choose again! Choose Y/N"); 
    }
    const isRead = (choice === "Y") ? true : false; 
    const newBook = new Book(title, author, pages, isRead); 
    //Testing console purpose
    console.log(newBook.info());
    //3. Add to the 1D array as an objects 
    myLibrary.push(newBook); 
}

let myLibrary = [];
// addBookToLibrary();
// addBookToLibrary();
// addBookToLibrary();
const sherLock = new Book('Sherlock Holmes', 'Authur Conan Doyle', 341, true);
const HxH = new Book('Hunter X Hunter', 'Togashi Yoshiro', 6000, false);
const thinkingFast = new Book('Thinking fast and slow', 'Daniel Kahneman', 781, false);
const thinkingSlow = new Book('Thinking fast and slow 2', 'Daniel Kahneman', 421, true);

myLibrary.push(sherLock);
myLibrary.push(HxH);
myLibrary.push(thinkingFast);
myLibrary.push(thinkingSlow);

console.log(myLibrary);

// for (let i = 0; i < myLibrary.length; i++) {
//     console.log(myLibrary[i]);
// }

const main = document.querySelector('main');
console.log(main);

// The card 
const card = document.createElement('div');
card.classList.add('card');

// The 1st side of card - book name 
const bookName = document.createElement('div');
bookName.classList.add('bookName');
bookName.textContent = myLibrary[0]['title']; 
card.appendChild(bookName); 

// The 2nd side of card - container including author / pages / read or not 
const container = document.createElement('div');
container.classList.add('container');

// Author
const author = document.createElement('div');
author.classList.add('author');
author.textContent = myLibrary[0]['author'];
container.appendChild(author);

// Pages 
const pages = document.createElement('div');
pages.classList.add('pages');
pages.textContent = myLibrary[0]['pages'];
container.appendChild(pages);

// Read or Not
const isRead = document.createElement('div');
isRead.classList.add('pages');
isRead.textContent = myLibrary[0]['isRead'];
container.appendChild(isRead);

//Append 2nd side to card 
card.appendChild(container);

//Append card to the main body. 
main.appendChild(card);


// console.log(main);


