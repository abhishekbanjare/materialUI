import React from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Box,
    IconButton,
} from "@mui/material";



const Cards = () => {
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
        </Box>
    );
    // ..........................................................
    return (
        <div>
            <Card sx={{ maxWidth: 280, margin: "100px" }}>
                <CardMedia
                    component={"img"}
                    height='160'
                    image='https://images.unsplash.com/photo-1716871906497-a097b38e355b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='test image'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        Web Design
                    </Typography>
                    <Typography variant='body2'>
                        lorem ipsom dolor sit amet consectetur adipisicing elit. Id,
                        ratione.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' color='primary'>
                        Share
                    </Button>
                </CardActions>
            </Card>

            {/* ........................................................................ */}
            <Card sx={{ maxWidth: 280, margin: "100px" }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant='h5' component='div'>
                        be{bull}nev{bull}o{bull}lent
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                        adjective
                    </Typography>
                    <Typography variant='body2'>
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Learn More</Button>
                </CardActions>
            </Card>

            {/* ........................................................................ */}
            <Card sx={{ maxWidth: 300, margin: "100px" }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>

            {/* ............................................................................ */}

        </div>
    );
};

export default Cards;
