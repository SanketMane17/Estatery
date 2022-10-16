import React from 'react'
import Grid from '@mui/material/Grid';
import PropertyCard from "./PropertyCard";
import { Box } from '@mui/material';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import "./Properties.css";

function Properties({ items }) {
  return (
    <>
      {items.length ?
        <>
          <Grid container spacing={4} className="properties">
            {items.map(item => {
              const { name, rent, address, beds, bathrooms, area, img } = item;
              return (<Grid item xs={12} sm={6} md={4} key={item.id}>
                <PropertyCard
                  name={name}
                  rent={rent}
                  address={address}
                  beds={beds}
                  bathrooms={bathrooms}
                  area={area}
                  img={img}
                />
              </Grid>)
            })}
          </Grid>
        </>
        : (<Box className="not-found"><SentimentDissatisfiedIcon /> Not found</Box>)}

    </>
  )
}

export default Properties