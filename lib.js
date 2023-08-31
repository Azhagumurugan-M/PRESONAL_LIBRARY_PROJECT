
let Book1={ 
Title:prompt("Enter the name of the book"), 
Author:prompt("Enter author name"),
 Year:prompt("Enter the year, when the book was published"),
   summary :function(){
return (this.Title + " book is written by " + this.Author);
},
 togglereadstatus:function()
 {
 return this.read;
}
 };

 let books = [];

books.push(Book1);
console.log(books);

let Book2={
Title:prompt("Enter the name of the book"),
Author:prompt("Enter author name"),
Year:prompt("Enter the year, when the book was published"),
read:confirm("Do you want read the book"),
summary :function(){
return (this.Title + " book is written by " + this.Author);
},
togglereadstatus:function()
{
return this.read;
}
};


 books.push(Book2);
 console.log(books);

let Book3={
Title:prompt("Enter the name of the book"),
Author:prompt("Enter author name"),
Year:prompt("Enter the year, when the book was published"),
read:confirm("Do you want read the book"),
summary :function(){
return (this.Title + " book is written by " + this.Author);
},
togglereadstatus:function()
{
return this.read;
}
};


 books.push(Book3);
 console.log(books);

let Book4={
Title:prompt("Enter the name of the book"),
Author:prompt("Enter author name"),
Year:prompt("Enter the year, when the book was published"),
read:confirm("Do you want read the book"),
summary :function(){
return (this.Title + " book is written by " + this.Author);
},
togglereadstatus:function()
{
return this.read;
}
};



// Adding books

function addBooks(Book4)
{
books.push(Book4);
console.log(books);
}

addBooks(Book4);

// removing last book
function removelastbook()
{
books.pop();
}

removelastbook();
console.log(books);

// adding book on front
function addbooktofront(Book4)
{
books.unshift(Book4);
}
addbooktofront(Book4);
console.log(books);

//Removing first book

function removefirstbook()
{
books.shift();
}
removefirstbook();
console.log(books);

// books summary

console.log(Book1.summary());

// getting all titles

function getAllTitles()
{
let Title=title=>title.Title;
const Titles=books.map(Title);
console.log(Titles);
}
getAllTitles();

// Geting books by author

function getBooksByAuthor()
{
let Author=author=>author.Author;
const Authors=books.map(Author);
console.log(Authors);
}
getBooksByAuthor();

//books published before year
function getTotalBooksPublishedBefore(year)
{
    let y;
y=books.map(year=>year.Year<year).reduce((prev,cuurentvalue)=>(prev+1,0));
console.log(y);
}
getTotalBooksPublishedBefore("2024");

//removing books by title

function removeBookByTitle(Title){
let index=books.findIndex(
function removing(){
if(books.tit==Title){
return true;
}
} )
books.splice(index,0);
console.log(books);
}
removeBookByTitle("Luna");

// read status
function getBooksByReadStatus(togglereadstatus)
{
let stsfil=books.map(sts=>sts.reads==togglereadstatus);
console.log(stsfil);
}
getBooksByReadStatus('NO');

//sublibrary
function getSubLibrary(start,end)
{
let sublib=books.slice(start,end);
console.log(sublib);
}
  getSubLibrary(1,2); 
