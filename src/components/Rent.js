import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import Container from '@mui/material/Container';
import Searchbar from './Searchbar';
import "./Rent.css";
import Filters from './Filters';
import Properties from './Properties';
import properties from "../dummyData";

function Rent() {
    const [items, setItems] = useState(properties)
    const [filters, setFilters] = useState({
        location: "",
        date: "",
        price: "",
        type: ""
    });
    const [searchKey, setSearchKey] = useState("");

    return (
        <Container fixed>
            <Box className="top-area">
                <Typography variant="h5" gutterBottom className="heading-text">
                    Search properties to rent
                </Typography>
                <Searchbar
                    className="parent-search"
                    items={items}
                    setItems={setItems}
                    searchKey={searchKey}
                    setSearchKey={setSearchKey}
                />
            </Box>
            <Filters
                setItems={setItems}
                filters={filters}
                setFilters={setFilters}
            />
            <Properties
                items={items}
                searchKey={searchKey}
            />
        </Container>
    )
}

export default Rent