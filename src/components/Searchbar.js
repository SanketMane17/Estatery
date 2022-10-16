import React, { useEffect, useState } from 'react'
import {
    InputAdornment,
    TextField,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import properties from '../dummyData';
import "./Rent.css";

function Searchbar({ items, setItems, searchKey }) {
    const [debounceTimeout, setDebounceTimeout] = useState("");

    /* With debouncing */
    const debounceSearch = (e, debounceTimeout) => {
        const value = e.target.value;
        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }

        const timeout = setTimeout(() => {
            searchFilter(value);
        }, 500);
        setDebounceTimeout(timeout);
    };

    const searchFilter = (searchKey) => {
        if (!searchKey) {
            setItems(properties);
        } else {
            const searchItems = items.filter(item => {
                return item.name.search(new RegExp(searchKey, "i")) !== -1;
            });

            setItems(searchItems);
        }
    };


    /* Without debouncing */
    // useEffect(() => {
    //     const searchFilter = (searchKey) => {
    //         if (!searchKey) {
    //             setItems(properties);
    //         } else {
    //             const searchItems = items.filter(item => {
    //                 return item.name.search(new RegExp(searchKey, "i")) !== -1;
    //             });

    //             setItems(searchItems);
    //         }
    //     };

    //     searchFilter(searchKey);
    // }, [searchKey])


    return (
        <TextField
            className="serach-bar"
            size="small"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <Search color="primary" />
                    </InputAdornment>
                ),
            }}
            placeholder="Search with Search Bar"
            name={searchKey}
            onChange={(e) => debounceSearch(e, debounceTimeout)}
        />
    )
}

export default Searchbar