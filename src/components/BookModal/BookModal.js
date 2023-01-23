import React from 'react';
import Box from "@mui/material/Box";
import {Modal} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookInfo = ({bookInfo}) => {
    return (
        <div>
            {Object.keys(bookInfo).map(key=>{
                if(typeof bookInfo[key] !== 'object') {
                   return <p key={key}>{key} : {bookInfo[key]}</p>
                }
                return null;
            })}
        </div>
    )
}

const BookModal = ({isOpen, handleClose, book}) => {
    return (<Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <BookInfo bookInfo={book?.volumeInfo}/>
        </Box>
    </Modal>)
}

export default BookModal;