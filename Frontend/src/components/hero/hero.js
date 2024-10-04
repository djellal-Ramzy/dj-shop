import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "swiper/css";
import "swiper/css/pagination";
import Button from "@mui/material/Button";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Boxhero from "./Boxhero";
import { useTheme } from "@mui/material/styles";
import Main from "../main/main";
export default function Hero() {
  const theme = useTheme();
  return (
    <Box
      width="1"
      sx={{ pt: 3.5, ".css-fjcgqz": { marginBottom: "0px" } }}
      bgcolor={theme.palette.mode === "dark" ? "#1D2021" : "#F6F6F6"}>
      <Container
        sx={{
          display: "flex",
          flexFlow: "row nowrap",
          alignItems: "center",
          gap: 2,
          zIndex: "-2",
        }}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper">
          <SwiperSlide>
            <img src={require("../../image/banner-15.jpg")} alt="slider" />
          </SwiperSlide>
          <Box
            sx={{
              position: "absolute",
              top: "30%",
              left: "10%",
              transform: "translateY:-30%",
              zIndex: "1",
            }}>
            <Typography variant="h3" sx={{ color: "#222" }}>
              LIFESTYLE COLLECTION
            </Typography>
            <Typography
              variant="h2"
              sx={{ color: "#222", fontWeight: "400", my: "10px" }}>
              MEN
            </Typography>
            <Typography
              variant="h3"
              sx={{ color: "#222", fontWeight: "400", my: "10px" }}>
              SAL UP TO{" "}
              <Typography
                variant="h3"
                sx={{ color: "red", fontWeight: "400", display: "inline" }}>
                30% OFF
              </Typography>
            </Typography>
            <Typography variant="body1" sx={{ my: "10px", color: "#222" }}>
              get free shopping on orders over $99.00{" "}
            </Typography>
            <Button
              sx={{
                display: "block",
                bgcolor: "#040600a3",
                color: "#FFF",
                py: "10px",
                px: "50px",
                my: "10px",
                ":hover": { bgcolor: "#04060040" },
              }}>
              shop now
            </Button>
          </Box>
          <SwiperSlide>
            <img src={require("../../image/banner-25.jpg")} alt="slider2" />
          </SwiperSlide>
        </Swiper>

        <Box sx={{ display: { xs: "none", md: "block" }, minWidth: "26.7%" }}>
          <Box sx={{ position: "relative" }}>
            <img
              width="100%"
              src={require("../../image/banner-17.jpg")}
              alt="Image2"
            />

            <Stack
              sx={{
                position: "absolute",
                top: "50% ",
                left: 33,
                transform: "translateY(-50%)",
              }}>
              <Typography sx={{ color: "#283445" }}>NEW ARRIVALS</Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#222" }}>
                SUMMER
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#222" }}>
                SAL 20% OFF
              </Typography>
              <Link
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3",
                  color: "#283445",
                  ":hover": { color: "#d23f57" },
                }}
                underline="none"
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.");
                }}>
                Shop now
                <ArrowRightAltIcon fontSize="small" />
              </Link>
            </Stack>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img
              width="100%"
              src={require("../../image/banner-16.jpg")}
              alt="image1"
            />

            <Stack
              sx={{
                position: "absolute",
                top: "50% ",
                left: 33,
                transform: "translateY(-50%)",
              }}>
              <Typography sx={{ color: "#283445" }}>GAMING 4K</Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#222" }}>
                DESKTOPS &
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#222" }}>
                LAPTOP
              </Typography>
              <Link
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3",
                  color: "#283445",
                  ":hover": { color: "#d23f57" },
                }}
                underline="none"
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.");
                }}>
                Shop now
                <ArrowRightAltIcon fontSize="small" />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Container>

      <Boxhero />
      <Main />
    </Box>
  );
}
