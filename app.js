// Book Class: Represents a Book

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = authror;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        // pretend that this is local storage
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '344334'
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '42242'
            }
        ];

        const books = StoredBooks;
        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        // using backquotes for string to be able to use variables inside
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }
}

// Store Class: Handles Storage

// Event: Display Books

// Event: Add a Book

// Event: Remove a Book