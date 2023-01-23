import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Book from "../Book/Book";


const BooksList = ({books, handleFavorite, favorites, handleShowMore}) => {
    return (
        <Container sx={{py: 4}} maxWidth="md">
            {books.length > 0 ? <Grid container spacing={4}>
                {books.map((book) => <Book key={book.id}
                                           handleFavorite={handleFavorite} isFavorite={favorites[book.id]}
                                           book={book} handleShowMore={handleShowMore}/>)}
            </Grid> : <div>No Book Founds</div>}
        </Container>
    );
}

export default BooksList;