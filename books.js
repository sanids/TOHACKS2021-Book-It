const BOOK_API_KEY = "AIzaSyC8cOGK15VMe85mY71i6ApN1XXCHfOaUtc" // "AIzaSyC8cOGK15VMe85mY71i6ApN1XXCHfOaUtc";
const {google} = require('googleapis');
const { book } = require('ionicons/icons');

const booksapi = google.books({
    version: 'v1',
    auth: BOOK_API_KEY
})

// description, title, avg rating, author, buy link, category

module.exports = {
    getBooks: async function getBooks(tags) {
        let booksToReturn = [];
        let startIndex = 0;
        while (booksToReturn.length < 5){
            let res = await booksapi.volumes.list({q: tags, orderBy: "relevance", maxResults: 40, startIndex: startIndex});
            // console.log(res.data);
            let filteredbooks = res.data.items.filter(book => {
                return (book.volumeInfo.title && book.volumeInfo.averageRating && book.volumeInfo.description && book.volumeInfo.categories && book.volumeInfo.authors && book.volumeInfo.imageLinks)
            });
            booksToReturn.push(...filteredbooks)
            startIndex += 40;
        }
        return booksToReturn;
    }
}

"Biological Sciences"+"Pets & Animals"