import React, { useEffect } from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';

import useStyles from './styles';

// Demo data
const demoCategories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top-rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const demoGenres = [
  { label: 'Comedy', value: 'comedy' },
  { label: 'Action', value: 'action' },
  { label: 'Horror', value: 'horror' },
  { label: 'Animation', value: 'animation' },
];

const blueLogo =
  'https://fontmeme.com/permalink/221001/be069656fc80f14eca77635f653be8b2.png';
const redLogo =
  'https://fontmeme.com/permalink/221001/788d1bef010fa114ccf62ca93eb5477e.png';

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      {/* App logo  */}
      <Link to="/" className={classes.imageLinks}>
        <img className={classes.image} src={blueLogo} alt="MovieVault logo" />
      </Link>
      <Divider />

      {/* Categories  */}
      <List>
        <ListSubheader>Categories</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img
                  src={theme.palette.mode === 'light' ? blueLogo : redlogo}
                  className={classes.genreImages}
                  height={30}
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />

      {/* Genres  */}
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoGenres.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img
                  src={theme.palette.mode === 'light' ? blueLogo : redlogo}
                  className={classes.genreImages}
                  height={30}
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
