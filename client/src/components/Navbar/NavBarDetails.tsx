import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Button, Menu, MenuItem, Link } from '@mui/joy';
import { AuthLogoutProps } from '../../Typescript-Interfaces/Types';
import { useState } from 'react';
import { User } from '@auth0/auth0-react';
import './Navbar.css';

type Props = {
  user: User;
  logout: (params: AuthLogoutProps) => void;
};

const NavBarDetails = ({ user, logout }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutSession = () => {
    logout({ returnTo: `${window.location.origin}` });
  };
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link
            component={RouterLink}
            underline="none"
            to="/equipments"
            sx={{ height: '100%' }}
          >
            <img
              className="logo-img"
              src="https://res.cloudinary.com/dpxwwazeb/image/upload/v1678122463/logo-hospitech_u8zhxu.png"
              alt="Logo HospitalTech"
            />
          </Link>
        </div>

        <Button
          id="menu-button"
          className="user-navbar"
          aria-controls={open ? 'navbar-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="plain"
          color="neutral"
          onClick={handleClick}
        >
          {user ? (
            <>
              {user.name}
              <Avatar
                alt={user.name}
                src={user.picture}
                sx={{ marginLeft: 1 }}
              />
            </>
          ) : (
            'NO LOOGED'
          )}
        </Button>
        <Menu
          id="navbar-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          aria-labelledby="menu-button"
        >
          {/* TODO: Create user details page
        <Link
          component={RouterLink}
          color='neutral'
          underline='none'
          disabled
          to='/'
        >
          <MenuItem onClick={handleClose}>My account</MenuItem>
        </Link> */}
          <Link
            component={RouterLink}
            color="neutral"
            underline="none"
            to="/equipments"
          >
            <MenuItem onClick={handleClose}>All Equipments</MenuItem>
          </Link>
          <Link
            component={RouterLink}
            color="neutral"
            underline="none"
            to="/create-equipment"
          >
            <MenuItem onClick={handleClose}>Add new equipment</MenuItem>
          </Link>
          <MenuItem onClick={logoutSession}>Logout</MenuItem>
        </Menu>
      </div>
      ;
    </>
  );
};

export default NavBarDetails;
