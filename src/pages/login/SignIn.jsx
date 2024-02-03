import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardSigin from "../../components/CardSigin";

const company = import.meta.env.VITE_NAME_COMPANY;

const SignIn = () => {
  const urlBackground =
    "url(https://www.infocamaras.com.ar/wp-content/uploads/2022/01/Caracteristicas-del-Software...jpg)";

  return (
    <Box
      sx={{
        backgroundImage: urlBackground,
        width: "100%",
        minHeight: "100vh",
        backgroundSize: "cover",
        pb: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          flexWrap: "wrap",
          p: { xs: 0, md: 15 },
          pt: { xs: 10 },
        }}
      >
        <Typography
          variant="h3"
          color="textFielfWhite.main"
          sx={{ m: 2, textAlign: "center" }}
        >
          {company}
        </Typography>
        <CardSigin />
      </Box>
    </Box>
  );
};

export default SignIn;
