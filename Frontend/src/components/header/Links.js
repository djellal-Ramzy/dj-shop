import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Nav({ title }) {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          position: "relative",
          ":hover": { cursor: "pointer" },
          ":hover .child3": {
            display: "inline-block",
          },
        }}>
        <Typography>{title}</Typography>
        <ExpandMoreIcon />
        <Box
          className="child3"
          sx={{
            position: "absolute",
            width: "170px",
            top: "100%",
            left: "50%",
            transform: " translate(-50%)",
            display: "none",
            zIndex: "30",
          }}>
          <Paper elevation={3} sx={{ mt: 3 }}>
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Dashboard" />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{
                    position: "relative",
                    ":hover .productsBox": { display: "inline-block" },
                  }}>
                  <ListItemButton
                    sx={{
                      display: "Flex",
                      flexFlow: "row wrap",
                      alignItems: "center",
                    }}
                    component="a"
                    href="#simple-list">
                    <ListItemText primary="Products" />
                    <Box />
                    <ChevronRightIcon />
                  </ListItemButton>
                  <Box
                    className="productsBox"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: "100%",
                      width: "150px",
                      display: "none",
                    }}>
                    <Paper elevation={4} sx={{ ml: 3 }}>
                      <nav aria-label="secondary mailbox folders">
                        <List>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemText primary="Add prodect" />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                              <ListItemText primary="Edit prodect" />
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </nav>
                    </Paper>
                  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Order" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Profile" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Paper>
        </Box>
      </Stack>
    </>
  );
}
