
function findAuthorById(authors, id) {
return authors.find((author) => author.id === id)

}

function findBookById(books, id) {
return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let avaliable = [];
  let unavaliable = [];
  let both = [];

  for(let i = 0; i < books.length; i++){
  if(books[i].borrows[0].returned === true){
    avaliable.push(books[i])
  }
   else unavaliable.push(books[i])

  }
both.push(unavaliable)
both.push(avaliable)

return both
}

function getBorrowersForBook(book, accounts) {
  let borrowers = [];
  accounts.map((account) => {
    book.borrows.find((borrow) => {
      if (borrow.id === account.id) {
        account["returned"] = borrow.returned
        borrowers.push(account)
      }

    })
  })
  borrowers = borrowers.sort((a, b) => b.count - a.count)
  .filter((item, i) => i < 10)
  return borrowers
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
