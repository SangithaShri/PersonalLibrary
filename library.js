const books=[
];

document.getElementById("addBook").addEventListener('click',addBooks);
document.getElementById("addBook").addEventListener('click',removeBook);

function addBooks(){
    const names=document.getElementById("name").value;
    const author=document.getElementById("author").value;
    const year=document.getElementById("year").value;

    books.push(names);
    books.push(author);
    books.push(year);
    if(books!=null){
        alert("Book added!");
    }
    getSummary();
}
    
function getSummary(){
    console.log("Book Name:"+books[0]+", Author:"+books[1]+", Year Published:"+books[2]);
}

function removeBook(){
    for(let data in books){
        books.pop();
    }
    if(books==null){
        console.log("Library is empty");
    }
}
