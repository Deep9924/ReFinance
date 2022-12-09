import React from 'react'; //,  { useState, useEffect }
import { List, ListItem, ListItemButton, ListItemText, Divider, Typography, Rating } from '@mui/material'; //Button
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext';

const LoggedInFavourites = () => {
  const navigate = useNavigate();
  const { userFav, removeFromFavourites } = useProfile();

  function handleAddorRemove(stockName) {
    return removeFromFavourites(stockName);
  }

  return (

    <List>
      <Typography variant='h6' sx={{ ml: 2, mb: -1, fontWeight: "bold" }}>Favourites</Typography>
      {userFav && userFav.length === 0 ? (
        <List>
          <ListItem sx={{ mt: '3rem' }}>
            <Typography variant='body2' sx={{ ml: 1.4, fontWeight: "bold" }}>Add a stock to favourites to display here
            </Typography>
          </ListItem>
        </List>
      ) : (userFav && userFav.map((stockName) => {
        return (
          <div key={stockName}>
            <ListItem disablePadding>
              <ListItemButton >
                <ListItemText primary={stockName} onClick={() => { navigate(`/stock/${stockName}`) }} />
                <Rating
                  name="favourites"
                  max={1}
                  defaultValue={1}
                  size='large'
                  sx={{ ml: 2 }}
                  onClick={() => handleAddorRemove(stockName)} /> {/* handleAddorRemove(stockName) */}
                {/* <StarIcon style={{ color: "#ffcd3c" }} onClick={() => handleAddorRemove(stockName)}/> */}
              </ListItemButton>
            </ListItem>
            <Divider />
          </div>
        )
      })
      )}
    </List>
  )
}

export default LoggedInFavourites