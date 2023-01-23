import React, {useEffect, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Button from "@mui/material/Button";
import BooksList from "../../components/BooksList/BooksList";
import SearchAppBar from "../../components/SearchAppBar/SearchAppBar";
import BookModal from "../../components/BookModal/BookModal";
import {getBookInfo, getBooks} from "../../services/googleApiService";
import {MAX_RESULT} from "../../data/constants";
import Loader from "../../components/Loader/Loader";

const theme = createTheme();

const BooksPage = () => {
    const [books, setBooks] = useState([]);
    const [totalBooks, setTotalBooks] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [favorites, setFavorites] = useState({});
    const [page, setPage] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [currentBook, setCurrentBook] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const handleOpen = () => setIsOpen(true);

    const handleClose = () => {
        setIsOpen(false);
        setCurrentBook(null);
    }

    const handleShowMore = async (id) => {
        const book  = await getBookInfo(id);
        setCurrentBook(book);
        handleOpen();
    }

    const handleSearch = (searchTerm) => {
        setPage(0);
        setSearchTerm(searchTerm);
    }

    const handlePageChange = (page) => {
        setPage(page);
    }

    const handleShowFavorites = () => {
        setBooks(Object.values(favorites));
    }

    const addToFavorites = (book) => {
        const tmpFavorites = favorites;
        if (tmpFavorites[book.id]) {
            delete tmpFavorites[book.id];
        } else {
            tmpFavorites[book.id] = book;
        }
        setFavorites(({...tmpFavorites}));
    }


    useEffect(() => {
        const fetchBooks = async () => {

            const {books, totalItems} = await getBooks(searchTerm, page);
            setBooks([...books]);
            if (page === 0) {
                setTotalBooks(totalItems);
            }
        }
        setIsLoading(true);
        searchTerm && fetchBooks();
        setIsLoading(false);

    }, [searchTerm, page])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <SearchAppBar handleSearch={handleSearch}
                          pageCount={Math.round(totalBooks / MAX_RESULT)} handlePageChange={handlePageChange}/>
            <main>
                <Loader isLoading={isLoading}/>
                {Object.keys(favorites).length > 0 && <Button onClick={handleShowFavorites}>Show Favorites</Button>}
                <BooksList handleFavorite={addToFavorites} favorites={favorites} books={books} handleShowMore={handleShowMore}/>
                <BookModal book={currentBook} isOpen={isOpen} handleClose={handleClose}/>

            </main>
        </ThemeProvider>
    );
}

export default BooksPage;