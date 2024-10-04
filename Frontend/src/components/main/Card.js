import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import CloseIcon from "@mui/icons-material/Close";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./style.css";

// import required modules
import { Scrollbar } from "swiper/modules";
export default function Product({ product }) {
  const lienImages = "http://localhost:1337/";
  const [value, setValue] = React.useState(product.prodectRaiting);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Card
        sx={{
          maxWidth: 345,
          ":hover .MuiCardMedia-root": {
            scale: "1.3",
            transition: "0.22s",
            rotate: "2deg",
          },
        }}>
        <CardMedia
          sx={{ height: 277, mt: 6 }}
          image={product.imageProdects[0].url}
          title="green iguana"
        />
        <CardContent>
          <Stack
            direction="row"
            alignItems={"center"}
            flexWrap={"nowrap"}
            sx={{ justifyContent: "space-between" }}>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>

            <Typography gutterBottom variant="subtitle1" component="p">
              {product.prodectPrice}
            </Typography>
          </Stack>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              maxHeight: "4em",
              overflowY: "hidden",
              transition: " overflow-y 0.3s ease",
              ":hover": { overflowY: "auto" },
            }}>
            {product.prodectDescriotion}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Button size="large" onClick={handleClickOpen}>
            <ShoppingCartIcon
              fontSize="small"
              sx={{ textTransform: "capitalize", mr: "3px" }}
            />
            add to cards
          </Button>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
            }}>
            <Rating
              name="hover-feedback"
              precision={0.5}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
          </Box>
        </CardActions>
      </Card>
      <Dialog
        sx={{
          ".MuiPaper-elevation": {
            minWidth: { sm: "100%", md: "80%" },
            position: "relative",
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <CloseIcon
          sx={{
            position: "absolute",
            right: "5px",
            top: "5px",
            cursor: "pointer",
            ":hover": { rotate: "70deg", trasition: "3s", color: "red" },
          }}
          onClick={handleClose}
        />
        <Stack
          sx={{ flexDirection: { xs: "column ", sm: "column", lg: "row" } }}
          alignItems={"center"}
          flexWrap={"noWrap"}
          gap={3}>
          <Box
            sx={{
              p: 2,
              width: "400px",
            }}>
            <Swiper
              scrollbar={{
                hide: true,
              }}
              modules={[Scrollbar]}
              className="mySwiper">
              {product.imageProdects.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <img width="400px" src={`${item.url}`} alt="{item.title}" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
          <Box sx={{ textAlign: { sm: "center", lg: "left" } }}>
            <Typography
              variant={"h3"}
              sx={{
                textTransform: "capitalize",
                fontWeight: "300",
              }}>
              {" "}
              {product.title}
            </Typography>
            <Typography variant={"h5"} color="#ff7799" my={2}>
              {product.prodectPrice}$
            </Typography>
            <Typography sx={{ my: 2 }}>{product.prodectDescriotion}</Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              sx={{ justifyContent: { sm: "center", lg: "left" } }}
              gap={3}>
              {product.imageProdects.map((item, index) => {
                return (
                  <img
                    key={index}
                    width={"20%"}
                    height={"150px"}
                    src={item.url}
                    alt="{item.title}"
                  />
                );
              })}
            </Stack>
            <Button
              sx={{ my: 2, px: 2 }}
              variant="contained"
              endIcon={<ShoppingCartIcon />}>
              Buy Now
            </Button>
          </Box>
        </Stack>
      </Dialog>
    </Box>
  );
}
