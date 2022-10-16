import React from 'react'
import { Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useSnackbar } from "notistack";
import properties from "../dummyData";

import "./Filters.css";

function Filters({ filters, setFilters, setItems }) {
    const { enqueueSnackbar } = useSnackbar();
    const handleFilterChange = (e) => {
        const target = e.target;
        const name = target.name;

        setFilters((prev) => ({
            ...prev,
            [name]: target.value
        }))
    }

    // Filtes 

    const filterByLocation = (properties, location) => {
        return properties.filter(property => {
            return property.address.search(new RegExp(location, "i")) !== -1;
        });
    }

    const filterByDate = (properties, date) => {
        let selectedDate = new Date(date);

        return properties.filter(property => {
            const availableDate = new Date(property.date);
            if (availableDate.getTime() >= selectedDate.getTime())
                return true;
            return false;
        });
    }

    const filterByPrice = (properties, price) => {
        const bounds = price.split("-");

        return properties.filter(property => property.rent >= bounds[0] && property.rent <= bounds[1]);
    }

    const filterByType = (properties, type) => {
        return properties.filter(property => property.type === type);
    }


    const applyFilters = (filters, properties) => {
        if (!validateFilters(filters)) return;
        const { location, date, price, type } = filters
        let newItems = [];

        if (location) {
            newItems = filterByLocation(newItems.length === 0 ? properties : newItems, location);
        }
        if (date) {
            newItems = filterByDate(newItems.length === 0 ? properties : newItems, date);
        }
        if (price) {
            newItems = filterByPrice(newItems.length === 0 ? properties : newItems, price);
        }
        if (type) {
            newItems = filterByType(newItems.length === 0 ? properties : newItems, type);
        }

        setItems(newItems);
    }

    const validateFilters = ({ location, date, price, type }) => {
        if (!location && !date && !price && !type) {
            enqueueSnackbar("Select at least one filter", { variant: "Warning" });
            return false;
        }
        return true;
    }

    return (
        <Box className="filters">
            <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={2}
                className="filter-bar"
                divider={<Divider orientation="vertical" flexItem />}
            >
                <Box id="filter-1">
                    <Typography variant="body2" color="text.secondary">
                        Location
                    </Typography>
                    <input
                        type="text"
                        name="location"
                        placeholder="Enter location"
                        className="filter-pill"
                        value={filters.location}
                        onChange={handleFilterChange}
                    />
                </Box>
                <Box>
                    <Typography variant="body2" color="text.secondary">
                        When
                    </Typography>
                    <Box display="flex" alignItems="center">
                        <input
                            type="text"
                            placeholder="Select Move-in Date"
                            className="filter-pill date-input"
                            onChange={(e) => console.log(e.target.value)}
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")}
                        />
                    </Box>
                </Box>
                <Box>
                    <Typography variant="body2" color="text.secondary">
                        Price
                    </Typography>
                    <select
                        name="price"
                        className="filter-pill"
                        value={filters.price}
                        onChange={handleFilterChange}
                    >
                        <option value="100-500">$100 - $500</option>
                        <option value="500-2000">$500 - $2000</option>
                        <option value="2000-3000">$2000 - $3000</option>
                    </select>
                </Box>
                <Box>
                    <Typography variant="body2" color="text.secondary">
                        Property Type
                    </Typography>
                    <select
                        name="type"
                        className="filter-pill"
                        value={filters.type}
                        onChange={handleFilterChange}
                    >
                        <option value="Houses">Houses</option>
                        <option value="Lands">Lands</option>
                        <option vlaue="Apartments">Apartments</option>
                    </select>
                </Box>
                <Button
                    variant="contained"
                    onClick={() => applyFilters(filters, properties)}
                >Search</Button>
            </Stack>
        </Box>
    )
}

export default Filters