import React from 'react'
import {
    Card,
    CardMedia,
    CardActions,
    CardContent,
    Button,
    Typography,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogContentText,
    DialogActions,


} from "@mui/material"
const DialogBox = () => {
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
                <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button size='small' color='primary'>
                        Share
                    </Button>
                    <Button size='small' color='primary'>
                        Delete
                    </Button>
                </CardActions>
            </Card>

            {/* ....................................... */}
            <Dialog open={true}>
                <DialogTitle>Are You Sure</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure to delete this products ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button>Cancel</Button>
                    <Button>Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DialogBox;
