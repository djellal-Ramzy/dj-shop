import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import FiberDvrIcon from "@mui/icons-material/FiberDvr";
import CloseIcon from "@mui/icons-material/Close";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import useMediaQuery from "@mui/material/useMediaQuery";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import Drawer from "@mui/material/Drawer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import Nav from "./Links";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
export default function Header3() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const anchor = "top";
  const matches = useMediaQuery("(max-width:1200px)");
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack sx={{ padding: "40px 0" }} direction="row" space={2}>
      <Button
        sx={{
          display: "flex",
          flexFlow: "row  wrap",
          alignItems: "space-around",
          justifyContent: "justify-content: flex-start;",
          width: "300px",
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}>
        <GridViewRoundedIcon sx={{ mr: 2 }} />
        <Typography mx={1}>Categories</Typography>
        <Stack flexGrow={1}></Stack>
        <KeyboardArrowRightIcon />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          ".MuiPaper-root": {
            width: "300px",
            backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          },
        }}>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FiberDvrIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Electronics</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <MenuBookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Books</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SportsEsportsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Games</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DirectionsBikeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>BIKES</ListItemText>
        </MenuItem>
      </Menu>

      <Stack flexGrow={1} />
      {matches && (
        <Button onClick={toggleDrawer("top", true)}>
          <MenuIcon sx={{ color: theme.palette.text.primary }} />
        </Button>
      )}
      {!matches && (
        <Stack direction={"row"} alignItems={"center"} gap={4}>
          <Nav title={"Home"} />
          <Nav title={"Mega menu"} />
          <Nav title={"Full screen menu"} />
          <Nav title={"Pages"} />
          <Nav title={"User account"} />
          <Nav title={"Vendor account"} />
        </Stack>
      )}
      <Drawer
        sx={{
          ".css-1sozasi-MuiPaper-root-MuiDrawer-paper": { height: "100%" },
        }}
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}>
        <Box
          sx={{
            width: "400px",

            position: "relative",
            mx: "auto",
            my: "auto",
          }}>
          <CloseIcon
            sx={{
              cursor: "pointer",
              ":hover": { rotate: "70deg", trasition: "3s", color: "red" },
            }}
            onClick={toggleDrawer("top", false)}
          />
          {[
            { mainline: "Home", secandline: ["link1", "link2", "link3"] },
            { mainline: "Mega menu", secandline: ["link1", "link2", "link3"] },
            {
              mainline: "Full screen menu",
              secandline: ["link1", "link2", "link3"],
            },
            { mainline: "Pages", secandline: ["link1", "link2", "link3"] },
            {
              mainline: "User account",
              secandline: ["link1", "link2", "link3"],
            },
            {
              mainline: "Vendor account",
              secandline: ["link1", "link2", "link3"],
            },
          ].map((item) => {
            return (
              <Accordion
                key={item.mainline}
                elevation={0}
                sx={{ bgcolor: "initial" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header">
                  {item.mainline}
                </AccordionSummary>
                {item.secandline.map((item2, index) => {
                  return (
                    <List key={index} sx={{ py: 0, my: 0 }}>
                      <ListItem sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={item2} />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  );
                })}
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Stack>
  );
}
