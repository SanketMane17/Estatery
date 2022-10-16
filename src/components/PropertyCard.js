import * as React from 'react';
import Card from '@mui/material/Card';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Fab from '@mui/material/Fab';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import Divider from '@mui/material/Divider';
import "./PropertyCard.css";

export default function PropertyCard({ name, rent, address, beds, bathrooms, area, img }) {
    return (
        <Card className="property">
            <CardMedia
                component="img"
                image={img}
                alt={name}
            />
            <Box className="popular"><AutoAwesomeIcon className="icon"/>POPULAR</Box>
            <CardContent>
                <Box className="card-header">
                    <Typography gutterBottom variant="h6" component="div">
                        <span style={{ fontWeight: "bold" }}>${rent}</span><span style={{ fontSize: "16px" }}>/month</span>
                    </Typography>
                    {/* <FavoriteOutlinedIcon /> */}
                    <Fab disabled size='small'>
                        <FavoriteBorderOutlinedIcon />
                    </Fab>
                </Box>
                <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold" }}>
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {address}
                </Typography>
                <Divider className="divider" />
            </CardContent>
            <Box className="card-footer">
                <Box className="box">
                    <BedroomChildOutlinedIcon className="icon" />
                    {beds} Beds
                </Box>
                <Box className="box"><BathtubOutlinedIcon className="icon" /> {bathrooms} Bathrooms</Box>
                <Box className="box"><CompareArrowsOutlinedIcon className="icon" /> {area} m<sup>2</sup></Box>
            </Box>
        </Card>
    );
}
