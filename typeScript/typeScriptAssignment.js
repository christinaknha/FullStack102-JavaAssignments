var book1 = {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    published: new Date("1960-07-11"),
    available: true
};
var book2 = {
    id: 2,
    title: "1984",
    author: "George Orwell",
    published: new Date("1949-06-08"),
    available: true
};
var book3 = {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    published: new Date("1925-04-10"),
    available: true
};
var book4 = {
    id: 4,
    title: "Sarah's Key",
    author: "Tatiana de Rosnay",
    published: new Date("2011-10-25"),
    available: false
};
var book5 = {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    published: new Date("1951"),
    available: false
};
var books;
books = [book1, book2, book3];
// console.log(books)
function addBook(book) {
    books.push(book);
    // console.log(books)
}
function findBookById(id) {
    for (var i = 0; i < books.length; i++) {
        if (books[i].id == id) {
            console.log(books[i]);
            return (books[i]);
        }
        else {
        }
    }
    console.log(undefined);
    return undefined;
}
function updateBook(book) {
    for (var i = 0; i < books.length; i++) {
        if (books[i].id == book.id) {
            if (books[i].available == false) {
                books[i].available = true;
            }
            else if (books[i].available == true) {
                books[i].available = false;
            }
            console.log(true);
            return true;
        }
    }
    console.log(false);
    return false;
}
// 
function removeBook(id) {
    for (var i = 0; i < books.length; i++) {
        if (books[i].id == id) {
            // console.log(books[i])
            books.splice(i, 1);
            console.log(true);
            return true;
        }
    }
    console.log("Book not found");
    return false;
}
console.log(books);
addBook(book4);
console.log(books);
findBookById(2);
findBookById(5);
console.log(books);
addBook(book5);
console.log(books);
updateBook(book2);
updateBook(book4);
console.log(books);
removeBook(2);
console.log(books);
