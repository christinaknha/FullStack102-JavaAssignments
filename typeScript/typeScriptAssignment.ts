interface Book {
    id : number,
    title: string,
    author: string,
    // change published back to Date type
    published: Date,
    available: boolean
}

let book1 : Book = {
    id : 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    published: new Date("1960-07-11"),
    available: true 
}

let book2 : Book = {
    id : 2,
    title: "1984",
    author: "George Orwell",
    published: new Date("1949-06-08"),
    available: true 
}

let book3 : Book = {
    id : 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    published: new Date("1925-04-10"),
    available: true 
}

let book4 : Book = {
    id : 4,
    title: "Sarah's Key",
    author: "Tatiana de Rosnay",
    published: new Date("2011-10-25"),
    available: false 
}

let book5 : Book = {
    id : 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    published: new Date("1951"),
    available: false 
}


let books: Book[];
books = [book1, book2, book3]

// console.log(books)

function addBook(book: Book) : void {
    books.push(book);
    // console.log(books)
}

function findBookById(id: number): Book | undefined {
    for (let i = 0; i < books.length; i++){
        if (books[i].id == id){
            console.log(books[i])
            return(books[i])
        } else{
        }  
    }console.log(undefined)
     return undefined

}

function updateBook(book: Book): boolean {
    for (let i = 0; i < books.length; i++){
        if (books[i].id == book.id){
            if(books[i].available == false){
                books[i].available = true
            } else if(books[i]. available == true){
                books[i].available = false
            }
        console.log(true)
        return true
        }
    }console.log(false)
     return false

}

// 
function removeBook(id: number): boolean {
    for (let i = 0; i < books.length; i++){
        if (books[i].id == id){
            // console.log(books[i])
            books.splice(i,1);
            console.log(true)
            return true
        }
    }console.log("Book not found")
     return false

}

console.log(books)
addBook(book4)
console.log(books)
findBookById(2)
findBookById(5)
console.log(books)
addBook(book5)
console.log(books)
updateBook(book2)
updateBook(book4)
console.log(books)
removeBook(2)
console.log(books)
