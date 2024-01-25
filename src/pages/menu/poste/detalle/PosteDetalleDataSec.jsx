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

const PosteDetalleDataSec = ({ poste }) => {
  return (
    <Card
      sx={{
        height: { xs: "auto", md: "calc(100vh - 205px)" },
      }}
    >
      <Grid color="text.secondary" container alignItems={"start"}>
        <Grid container item xs={12} md={8}>
          <Grid
            item
            display={"flex"}
            alignItems={"center"}
            gap={1}
            xs={6}
            md={3}
          >
            <Grid
              border={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={50}
              width={40}
              height={40}
            >
              <CellTower fontSize="medium" />
            </Grid>

            <Grid display={"grid"} textAlign={"left"} lineHeight={1}>
              <Typography>Numero:</Typography>

              <Typography fontWeight={"bold"}>{poste.desk}</Typography>
            </Grid>
          </Grid>

          <Grid item xs={6} md={3} textAlign={"left"} lineHeight={1}>
            <Typography>Propietario:</Typography>
            <Typography fontWeight={"bold"}>Entel</Typography>
          </Grid>
          <Grid item xs={6} md={3} textAlign={"left"} lineHeight={1}>
            <Typography>Tipo de poste:</Typography>
            <Typography fontWeight={"bold"}>Madera</Typography>
          </Grid>
          <Grid item xs={6} md={3} textAlign={"left"} lineHeight={1}>
            <Typography>Tramo:</Typography>
            <Grid display={"flex"}>
              <Typography fontWeight={"bold"}>Santa Cruz </Typography>
              <Typography fontWeight={"bold"} paddingInline={1}>
                -
              </Typography>
              <Typography fontWeight={"bold"}> Cotoca</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} textAlign={"left"} lineHeight={1}>
            <Typography>Ferreteria de sujeción:</Typography>
            <Grid container m={0} p={0}>
              {["item 1", "Item 2", "Item 3", "Item 4"].map((item, i) => (
                <Grid key={i} item xs={12} md={6} p={0} m={0}>
                  <FormControlLabel
                    control={<Checkbox sx={{ p: "5px" }} />}
                    sx={{
                      margin: 0,
                      p: 0,
                    }}
                    label="Ferreteria de sujeción"
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              height: "100%",
            }}
            xs={12}
            md={12}
            paddingBlock={1}
            paddingInline={0}
          >
            <Grid container m={0} p={0}>
              <Grid item xs={12} textAlign={"left"}>
                <Typography>Ubicación:</Typography>
                <Grid display={"flex"}>
                  <Typography fontWeight={"bold"}>
                    Lat: {ubicacionExample[0]}{" "}
                  </Typography>
                  <Typography fontWeight={"bold"} paddingInline={1}>
                    -
                  </Typography>
                  <Typography fontWeight={"bold"}>
                    {" "}
                    Lat: {ubicacionExample[1]}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <MapContainer
                center={ubicacionExample}
                zoom={13}
                style={{ height: { xs: "400px", md: "calc(100vh - 470px)" } }}
                scrollWheelZoom={false}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
                <Marker position={ubicacionExample} icon={customIcon}>
                  <Popup>
                    <Grid container flexDirection={"column"} gap={1}>
                      {ubicacionExample}
                    </Grid>
                  </Popup>
                </Marker>
              </MapContainer>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          sx={
            {
              //maxHeight: "calc(100vh - 300px)",
            }
          }
          xs={12}
          md={4}
          paddingBlock={1}
          overflow={"hidden"}
        >
          <Grid display={"flex"} justifyContent={"space-between"}>
            <Typography>Imagen:</Typography>
          </Grid>

          <img
            style={{
              objectFit: "cover",
              borderRadius: 4,
              width: "100%",
              height: "calc(100vh - 270px)",
            }}
            src={
              "https://i.pinimg.com/736x/ca/64/b1/ca64b142e07ff2ffbfc41b0be1796d8b.jpg"
            }
            alt={"imagen"}
            loading="lazy"
          />
        </Grid>
      </Grid>
    </Card>
  );
};
PosteDetalleDataSec.propTypes = {
  poste: PropTypes.object.isRequired,
};
export default PosteDetalleDataSec;
