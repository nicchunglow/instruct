import React from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<AppBar position="static" color="inherit">
			<Toolbar>
				<Button aria-controls="simple-menu" aria-haspopup="true" disableFocusRipple={true} onClick={handleClick}>
					<MenuIcon />
				</Button>
				<Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
					<MenuItem onClick={handleClose}>Profile</MenuItem>
					<MenuItem onClick={handleClose}>My account</MenuItem>
					<MenuItem onClick={handleClose}>Logout</MenuItem>
				</Menu>
				<Typography variant="h6">INSTRUCT</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
