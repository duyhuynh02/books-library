//All elements and buttons 
const addBookFormNodeList = document.getElementsByClassName('extra-form');
const addBtn = document.getElementsByClassName('btn-add')[0];
const btnSection = document.getElementsByClassName('btn-section')[0];
const btnAddSection = btnSection.querySelector('.btn-add-book');
const btnExitSection = btnSection.querySelector('.btn-exit-book');
const main = document.querySelector('main');
let myLibrary = [];
 
//Test method 
const HxH = new Book('Hunter X Hunter', 'Togashi', 312, true);
myLibrary.push(HxH);
showBooks(HxH);
let mainNode = document.querySelector('main');
console.log(mainNode);



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

function showBookForm() {
    addBookFormNodeList[0].style.display = 'flex';
}

function exitBookForm() {
    addBookFormNodeList[0].style.display = 'none';
}

function showBooks(book) {
    const card = document.createElement('div');
    card.classList.add('card');

    //The rest is normal html - firgue out yourself... 
    const bookName = document.createElement('div');
    bookName.classList.add('bookName');
    bookName.textContent = book['title']; 
    card.appendChild(bookName); 

    const container = document.createElement('div');
    container.classList.add('container');

    const author = document.createElement('div');
    author.classList.add('author');
    author.textContent = book['author'];
    container.appendChild(author);

    const pages = document.createElement('div');
    pages.classList.add('pages');
    pages.textContent = book['pages'];
    container.appendChild(pages);

    const isRead = document.createElement('div');
    isRead.classList.add('isRead');
    if (book['isRead'] === true) {
        isRead.textContent = 'Read'
    } else {
        isRead.textContent = 'Not read'
    }
    container.appendChild(isRead);
    card.appendChild(container);

    const removeCard = document.createElement('button');
    removeCard.classList.add('remove');
    removeCard.dataset.bookIndex = myLibrary.length - 1; //Add book index for remove funct 
    removeCard.textContent = 'REMOVE'; 
    card.appendChild(removeCard);

    //Append card to the main body. 
    main.appendChild(card);
}

function sendBookForm() {
    let temp; 
    // create the new object 
    if (document.querySelector('select').value === 'read') {
        temp = true; 
    } 
    else {
        temp = false; 
    }

    const newBook = new Book(
        title = document.getElementById('bookName').value,
        author = document.getElementById('author').value, 
        pages = document.getElementById('pages').value, 
        isRead = temp,
    ); 
    // put it into the library 
    myLibrary.push(newBook);
    // clear the form for the next one 
    document.querySelector('form').reset();
    // save it in local storage
    localStorage.setItem('MyBooksLibrary', JSON.stringify(myLibrary));

    //Show it
    exitBookForm();
    showBooks(newBook);
}

function removeNode(e) {
    // console.log(e.target);
    // console.log(e.target.dataset.bookIndex);
    let bookIndex = parseInt(e.target.dataset.bookIndex);
    myLibrary.splice(bookIndex, 1);
    render(bookIndex);
    localStorage.setItem('MyBooksLibrary', JSON.stringify(myLibrary));
}

function render(index) {
    let mainNodeList = mainNode.childNodes; 
    // console.log(mainNodeList);
    let i = mainNodeList[index];
    mainNode.removeChild(i);
}

//Buttons to handle 
addBtn.addEventListener('click', showBookForm);
btnExitSection.addEventListener('click', exitBookForm);
btnAddSection.addEventListener('click', sendBookForm); 
mainNode.addEventListener('click', removeNode);