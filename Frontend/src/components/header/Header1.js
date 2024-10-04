import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import { useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { ThemeContext } from "../../contexts/ModeContext";
import { useContext, useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const options = ["En", "Fr", "Ar"];
export default function Header1() {
  const theme = useTheme();
  const handelDarkMode = useContext(ThemeContext);
  function changerMode() {
    handelDarkMode();
  }
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
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

  return (
    <AppBar
      className={"appBar"}
      position="static"
      sx={{
        backgroundColor: "#2B3445",
      }}>
      <Container
        sx={{
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}>
        <Typography
          variant="body2"
          sx={{
            p: "3px 10px",
            mr: 2,
            bgcolor: "#D23F57",
            borderRadius: "12px",
            fontSize: "10",
            fontWeight: "bold",
            color: "#FFF",
          }}>
          Hot
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "12", color: "#FFF", fontWeight: "300" }}>
          free express shopping
        </Typography>
        <Box flexGrow={1} />
        <Stack
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#FFF",
          }}>
          <IconButton sx={{ ml: 1 }} onClick={changerMode} color="inherit">
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>

          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              fontSize: "medium",
              m: 0,
              p: 0,
            }}>
            <ListItemButton
              sx={{ p: 0, mx: 1 }}
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}>
              <ListItemText
                sx={{
                  ".MuiTypography-root": { fontSize: "16px", color: "#fff" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMoreIcon xs={{ fontSize: "medium" }} />
            </ListItemButton>
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

          <IconButton>
            <TwitterIcon sx={{ color: "#fff" }} />
          </IconButton>
          <IconButton>
            <FacebookIcon sx={{ color: "#fff" }} />
          </IconButton>
          <IconButton>
            <InstagramIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Stack>
      </Container>
    </AppBar>
  );
}
