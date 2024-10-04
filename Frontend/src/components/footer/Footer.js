import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 3,
      }}>
      <Typography
        variant={"h6"}
        color={"HighlightText"}
        sx={{
          justifyContent: "center",
          display: "flex",
          direction: "row",
          alignItems: "center",
          gap: "20px",
          fontSize: "18px",
          textTransform: "capitalize",
        }}>
        designer and developer by{" "}
        <Typography sx={{ color: "#ff7799", fontSize: "22px" }}>
          Djellal Ramzi
        </Typography>
        @2024
      </Typography>
    </Box>
  );
}
