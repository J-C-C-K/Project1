const findAccountById = (accounts, id) => { //The project makes at least one use of an arrow function.
  //return accounts[i]
  for(let i = 0; i < accounts.length; i++){
    if(id === accounts[i].id){
      return accounts[i]
    }
  }
}
function sortAccountsByLastName(accounts) {
  //sort for the name by last name a-z
  return accounts.sort((nameA, nameB) => (nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase()) ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  //Get total number of book they have borrowed, does not matter if it is returned.
    return books.reduce((total, book) => { //The project makes at least one use of each of the following native array methods: reduce()
    const idCount = book.borrows.filter(borrow => borrow.id === account.id).length //
    //The project makes at least one use of each of the following native array methods: filter()
    return total + idCount
  }, 0)
}


function getBooksPossessedByAccount(account, books, authors) {
 
   return books.filter((book) => book.borrows.find(acc => acc.id === account.id && acc.returned === false))
  //The project makes at least one use of each of the following native array methods: find(), you can also us some() here
   .map(book => {book.author = authors.find(author => author.id === book.authorId) 
   return book})
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
