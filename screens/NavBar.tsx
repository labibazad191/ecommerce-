import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Button,
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Menu as MenuIcon, MoreVert as MoreIcon, Home as HomeIcon, Notifications as NotificationsIcon } from '@mui/icons-material';
import styled from 'styled-components';

const StyledAvatar = styled(Avatar)`
  margin-right: 16px;
`;

const Navbar: React.FC = () => {
  const [moreAnchor, setMoreAnchor] = useState<HTMLButtonElement | null>(null);

  const handleMoreClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMoreAnchor(event.currentTarget);
  };

  const handleMoreClose = () => {
    setMoreAnchor(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <StyledAvatar alt="User Avatar" src="dummy-avatar.jpg" />
        <Typography variant="h6">Ecommerce</Typography>
        <div style={{ flexGrow: 1 }}></div>
        <IconButton color="inherit">
          <HomeIcon />
        </IconButton>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <IconButton color="inherit" onClick={handleMoreClick}>
          <MoreIcon />
        </IconButton>
        <Popover
          open={Boolean(moreAnchor)}
          anchorEl={moreAnchor}
          onClose={handleMoreClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItem>
            {/* Add more items as needed */}
          </List>
        </Popover>
        <Button color="inherit">
          Sign In
        </Button>
        <Button color="inherit">
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
