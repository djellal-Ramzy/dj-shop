import * as React from "react";
import Product from "./Card";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./styleMain.css";
import Button from "@mui/material/Button";
import { useContext, useState, useEffect, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CircularProgress from "@mui/material/CircularProgress";

// Import Swiper React components

import { useGetproduitByNameQuery } from "../../services/produit";

export default function Main(params) {
  const { data, error, isLoading } = useGetproduitByNameQuery(
    "prodects?populate=*"
  );
  let produitToRendered = [];
  data ? (produitToRendered = data.data) : (produitToRendered = []);

  const theme = useTheme();
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [displayedProduitType, setDisplayedProduitType] = useState("all");

  let MenTodos = useMemo(() => {
    return produitToRendered.filter((t) => {
      return t.prodectCategories == "Men";
    });
  }, [displayedProduitType]);
  let womenTodos = useMemo(() => {
    return produitToRendered.filter((t) => {
      return t.prodectCategories != "Men";
    });
  }, [displayedProduitType]);

  if (displayedProduitType == "men") {
    produitToRendered = MenTodos;
  } else if (displayedProduitType == "women") {
    produitToRendered = womenTodos;
  }
  return (
    <Container>
      <Box
        sx={{ my: 8 }}
        p={4}
        bgcolor={theme.palette.mode === "dark" ? "#1D2021" : "#F6F6F6"}>
        <Stack direction="row" alignItems={"center"} flexWrap={"wrap"} gap={3}>
          <Box flexGrow={1}>
            <Typography variant="h6">Select products</Typography>
            <Typography fontWeight="300" variant="body1">
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>
          <ToggleButtonGroup
            value={alignment}
            color={"error"}
            exclusive
            onChange={handleAlignment}
            sx={{
              ".Mui-selected ": {
                border: "1px solid hsla(233, 69, 96, 0.5) !important",
                bgcolor: "initial !important",
                color: " #e94660",
              },
            }}
            aria-label="text alignment">
            <ToggleButton
              onClick={() => {
                setDisplayedProduitType("all");
              }}
              sx={{ color: theme.palette.text.primary }}
              className="myBottom"
              value="left"
              aria-label="left aligned">
              All products
            </ToggleButton>
            <ToggleButton
              onClick={() => {
                setDisplayedProduitType("men");
              }}
              sx={{
                color: theme.palette.text.primary,
                mx: "16px !important",
              }}
              className="myBottom"
              value="center"
              aria-label="centered">
              Men category
            </ToggleButton>
            <ToggleButton
              onClick={() => {
                setDisplayedProduitType("women");
              }}
              sx={{ color: theme.palette.text.primary }}
              className="myBottom"
              value="right"
              aria-label="right aligned">
              Women category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        {data ? (
          <Stack
            direction={"row"}
            alignItems={"flex-start"}
            gap={3}
            flexWrap={"wrap"}
            sx={{ justifyContent: "space-around", mt: 6 }}>
            {produitToRendered.map((item, i) => {
              return <Product key={i} product={item} />;
            })}
          </Stack>
        ) : (
          <Box sx={{ display: "flex", justifyContent: "center", my: 30 }}>
            <CircularProgress />
          </Box>
        )}
      </Box>
    </Container>
  );
}
