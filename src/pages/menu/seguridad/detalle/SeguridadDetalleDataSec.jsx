import PropTypes from "prop-types";
import {
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { CellTower } from "@mui/icons-material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { customIcon } from "../../../../assets/PinMap";
import { ubicacionExample } from "../../../../data/example";

const SeguridadDetalleDataSec = () => {
  return (
    <Card
      sx={{
        height: { xs: "auto", md: "calc(100vh - 205px)" },
      }}
    >
      <Grid color="text.secondary" container alignItems={"start"}>
        <Grid
          item
          display={"flex"}
          alignItems={"center"}
          gap={1}
          xs={12}
          md={4}
        >
          <Grid
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            width={60}
            height={60}
          >
            <img
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                width: "100%",
              }}
              src={
                "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
              }
              alt={"imagen"}
              loading="lazy"
            />
          </Grid>

          <Grid display={"grid"} textAlign={"left"} lineHeight={1}>
            <Typography>User:</Typography>

            <Typography fontWeight={"bold"}>IsaiasSalas145</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} textAlign={"left"} lineHeight={1}>
          <Typography> Rol:</Typography>
          <Grid display={"flex"}>
            <Typography fontWeight={"bold"}>Administrador </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} textAlign={"left"} lineHeight={1}>
          <Typography>Telefono:</Typography>
          <Grid display={"flex"}>
            <Typography fontWeight={"bold"}>70881108 </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} textAlign={"left"} lineHeight={1}>
          <Typography>Nombre:</Typography>
          <Typography fontWeight={"bold"}>Isaias</Typography>
        </Grid>
        <Grid item xs={12} md={4} textAlign={"left"} lineHeight={1}>
          <Typography>Apellido:</Typography>
          <Typography fontWeight={"bold"}>Salas Montesinos</Typography>
        </Grid>

        <Grid item xs={12} md={4} textAlign={"left"} lineHeight={1}>
          <Typography>Fecha de nacimiento:</Typography>
          <Grid display={"flex"}>
            <Typography fontWeight={"bold"}>11/05/1998 </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SeguridadDetalleDataSec;
