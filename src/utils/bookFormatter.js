const bookFormatter = (book) => {
    const {title, publisher, publishedDate, authors, imageLinks} = book?.volumeInfo;
    return {
        title, moreInfo: {publisher, publishedDate, authors},
        thumbnail: imageLinks?.thumbnail, id: book.id
    }

}

export default bookFormatter;