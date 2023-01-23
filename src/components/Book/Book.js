import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Favorite from '@mui/icons-material/Favorite';
import {IconButton} from "@mui/material";

const Book = ({book,handleFavorite, isFavorite, handleShowMore}) => {
    const {title, moreInfo, thumbnail} = book;

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card
                sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
            >
                <CardMedia
                    component="img"
                    image={thumbnail}
                    alt="no image"
                />
                <CardContent sx={{flexGrow: 1}}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={()=>{handleShowMore(book.id)}}>Show more</Button>
                    <IconButton onClick={()=>{handleFavorite(book)}}>
                        <Favorite style={{color: isFavorite ? 'red' : '' }}/>
                    </IconButton>
                </CardActions>

            </Card>
        </Grid>

    );
}


export default Book;