import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Stack from "@mui/material/Stack";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";

export default function Header2() {
  const theme = useTheme();
  const options = ["All Categories", "Car", "Clothes", "Electronic"];

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "22px",
    width: "auto",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),

      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  return (
    <Stack
      direction="row"
      sx={{
        padding: "10px 0",
        justifyContent: "space-between",
        alignItems: "center",
        my: "5px",
      }}>
      <Stack
        direction="column"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          minWidth: "20%",
        }}>
        <ShoppingCartIcon />
        <Typography variant="h6" sx={{ fontSize: "16px" }}>
          E-commerce
        </Typography>
      </Stack>
      <Stack
        direction="row"
        flexGrow={0.5}
        sx={{
          minWidth: "300px",
          alignItems: "center",
          border: "1px solid #777 ",
          "&:hover": { border: "1px solid #333" },
          borderRadius: "22px",
          justifyContent: "space-between",
        }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <List
          component="nav"
          aria-label="Device settings"
          sx={{
            borderRadius: " 0 22px 22px 0",
            padding: "0px",
            bgcolor:
              theme.palette.mode === "light"
                ? theme.palette.myColer.light
                : theme.palette.myColer.dark,
          }}>
          <ListItem
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}>
            <ListItemText
              secondary={options[selectedIndex]}
              sx={{
                width: "90px",
                textAlign: "center",
                "$:hover": { cursor: "pointer" },
              }}
            />
            <ExpandMoreIcon xs={{ fontSize: "medium" }} />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}>
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Stack>
      <Stack
        direction="row"
        sx={{ justifyContent: "flex-end", minWidth: "20%" }}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        <IconButton>
          <PersonIcon sx={{ mx: 2 }} />
        </IconButton>
      </Stack>
    </Stack>
  );
}
