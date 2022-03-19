function sortCount(arr) { //My helper function 
return arr.sort((a, b) => b.count - a.count) 
}

function getTotalBooksCount(books) {
  let count = 0;
  for(let i = 0; i < books.length; i++){
    count++;
  }
  return count;
}

function getTotalAccountsCount(accounts) {
  let count = 0;
  for(let i = 0; i < accounts.length; i++){
    count++;
  }
  return count;
}

function getBooksBorrowedCount(books) {
  let count = 0;
  for(let i = 0; i < books.length; i++){
    if(books[i].borrows[0].returned === false) {
      count++;
    }
  }
  return count;
}

function getMostCommonGenres(books) {
  const genres = {};
  for(let i in books){ //The project uses at least two of the following JavaScript features: for/in loops.
    const book = books[i]
    if(genres[book.genre]){
      genres[book.genre]++
    }
    else genres[book.genre] = 1
    }
  
  let countPerGenre = [];
  for(let i in genres){ //The project uses at least two of the following JavaScript features: for/in loops.
    countPerGenre.push({
      name: i,
      count: genres[i]
    })
     }
  
  countPerGenre = sortCount(countPerGenre)
  .filter((item, i) => i < 5)
  return countPerGenre
   }

  


   function getMostPopularBooks(books) {
    const result = books.map(book => { //The project makes at least one use of each of the following native array methods: map()
      return {
        name: book.title,
        count: book.borrows.length
      }
    })
    return sortCount(result)
      .filter((item, i) => i < 5)
  }

function getMostPopularAuthors(books, authorsList) {

  const authors = {}
  for (let i in books) {
    const book = books[i]
    if (authors[book.authorId]) {
      authors[book.authorId] += book.borrows.length
    } else {
      authors[book.authorId] = book.borrows.length
    }
  }

  let totalCount = []

  for (let i in authors) {
    const authorFound = authorsList.find(a => a.id == i)
    totalCount.push({
      name: `${authorFound.name.first} ${authorFound.name.last}`,
      count: authors[i]
    })


  }

  totalCount = sortCount(totalCount)
    .filter((item, i) => i < 5)
  return totalCount;

}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
