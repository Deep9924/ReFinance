import React, { useState } from 'react'; //,  { useState, useEffect }
import { List, ListItem, ListItemButton, ListItemText, Divider, Typography, Rating } from '@mui/material'; //Button
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../firebase/AuthContext';
//import { useFavourites } from '../Context/FavouritesContext';
import axios from 'axios';

const LoggedInFavourites = () => { //{userData}
  const navigate = useNavigate();
  const { currentUser, userProfile } = useAuth();
  const [userData, setUserData] = useState(userProfile && userProfile.favourites);

  function handleAddorRemove(stockName) {
    if (userData.includes(stockName)) {
      axios
        .post(process.env.REACT_APP_LOCAL + "fav/removefav", {
          user_email: currentUser.email.toLowerCase(),
          user_favstock: stockName
        })
        .then(() => {
          let filteredArray = userData.filter(item => item !== stockName)
          setUserData(filteredArray);
        }
        )
        .catch((err) => console.log(err));
    }
  }

  return (

    <List>
      <Typography variant='h6' sx={{ ml: 2, mb: -1, fontWeight: "bold" }}>Favourites</Typography>
      {userProfile && userProfile.favourites.length === 0 ? (
        <List>
          <ListItem sx={{ mt: '3rem' }}>
            <Typography variant='body2' sx={{ ml: 1.4, fontWeight: "bold" }}>Add a stock to favourites to display here
            </Typography>
          </ListItem>
        </List>
      ) : (userProfile && userProfile.favourites.map((stockName) => {
        return (
          <div key={stockName}>
            <ListItem disablePadding>
              <ListItemButton >
                <ListItemText primary={stockName} onClick={() => { navigate('/stock', { state: { symbol: stockName } }) }} />
                <Rating
                  name="favourites"
                  max={1}
                  defaultValue={1}
                  size='large'
                  sx={{ ml: 2 }}
                  onClick={() => handleAddorRemove(stockName)} />
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