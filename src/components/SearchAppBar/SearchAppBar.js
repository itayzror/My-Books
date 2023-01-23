import React, {useState} from 'react';
import {styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from "@mui/material/Button";
import {IconButton, Pagination} from "@mui/material";

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));


const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const SearchAppBar = ({handleSearch, pageCount, handlePageChange}) => {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Search>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                            value={searchTerm}
                            onChange={e => {
                                setSearchTerm(e.target.value)
                            }}
                            onKeyDown={e => {
                                if(e.key === 'Enter'){
                                    handleSearch(searchTerm)
                                }
                            }}
                        />
                    </Search>
                    <IconButton onClick={() => {
                        handleSearch(searchTerm)
                    }} disabled={!searchTerm}>
                        <SearchIcon/>
                    </IconButton>
                    <Pagination count={pageCount} style={{marginLeft:'auto'}}
                                onChange={(e, value) => handlePageChange(value)}/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default SearchAppBar;