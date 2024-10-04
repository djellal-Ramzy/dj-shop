import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Divider from "@mui/material/Divider";

export default function Boxhero() {
  return (
    <Container sx={{ mt: 6, pb: 8 }}>
      <Stack
        direction="row"
        alignItems="center"
        divider={
          useMediaQuery("(min-width:1000px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : (
            <Divider orientation="vertical" sx={{ display: "none" }} flexItem />
          )
        }
        gap={2}
        sx={{ flexFlow: "row Wrap" }}
        justifyContent={useMediaQuery("(min-width:600px)") ? "center" : "left"}>
        <Mybox
          icon={<ElectricBoltIcon />}
          title="Fat Delivery"
          subtitle="start from 10$"
        />
        <Mybox
          icon={<CreditScoreOutlinedIcon />}
          title="Money Guarantee"
          subtitle="start from 10$"
        />
        <Mybox
          icon={<AccessAlarmIcon />}
          title=" 365 Day"
          subtitle="start from 10$"
        />
        <Mybox
          icon={<WorkspacePremiumOutlinedIcon />}
          title="Payment"
          subtitle="start from 10$"
        />
      </Stack>
    </Container>
  );
}

const Mybox = ({ icon, title, subtitle }) => {
  const theme = useTheme();

  return (
    <Box
      width="250px"
      sx={{
        textAlign: "center",
        display: "flex",
        flexFlow: "row nowrap",
        alignItems: "center",
        justifyContent: "start",

        py: "1.6",
      }}
      gap={3}>
      {icon}
      <Box>
        <Typography
          variant="body1"
          sx={{ fontWeight: "300", color: theme.palette.text.primary }}>
          {title}
        </Typography>
        <Typography
          sx={{ fontWeight: "300", color: theme.palette.text.secondary }}
          variant="body1">
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};
