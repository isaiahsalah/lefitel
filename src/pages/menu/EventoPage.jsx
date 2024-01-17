import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { LineChart } from "@mui/x-charts/LineChart";

import logo from "../../assets/images/logo.png";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material";
const customIcon = new Icon({
  iconUrl: logo,
  iconSize: [38, 38],
});
const uData = [40, 30, 20, 27, 18, 23, 34];
const pData = [24, 13, 98, 39, 48, 38, 43];

const time = [
  new Date(2015, 1, 0),
  new Date(2015, 2, 0),
  new Date(2015, 3, 0),
  new Date(2015, 4, 0),
  new Date(2015, 5, 0),
  new Date(2015, 6, 0),
  new Date(2015, 7, 0),
];
const EventoPage = () => {
  return (
    <Grid container alignItems={"stretch"} className="evento-page">
      <Grid display={"flex"} flexDirection={"column"} item xs={12} md={4}>
        <Card
          style={{ flex: 1, display: "flex", flexDirection: "column" }}
          variant="outlined"
        >
          <CardContent
            style={{ display: "flex", flexDirection: "column", flex: 1 }}
          >
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Eventos Pendientes
              <hr />
            </Typography>

            <Grid container flexDirection={"column"} margin={0} flex={1}>
              <Typography
                variant="h1"
                fontWeight={"bold"}
                color="text.secondary"
                component="div"
              >
                513
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                postes
              </Typography>
            </Grid>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <hr />
            </Typography>
            <Button startIcon={<Add />} variant="contained">
              añadir
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={8}>
        <Card variant="outlined">
          {" "}
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Eventos Pendientes
            </Typography>
            <hr />
            <LineChart
              height={300}
              series={[
                { data: pData, label: "pv", id: "pvId" },
                { data: uData, label: "uv", id: "uvId" },
              ]}
              xAxis={[
                {
                  scaleType: "time",
                  data: time,
                  min: time[0].getTime(),
                  max: time[time.length - 1].getTime(),
                },
              ]}
              sx={{
                ".MuiLineElement-root, .MuiMarkElement-root": {
                  strokeWidth: 1,
                },
                ".MuiLineElement-series-pvId": {
                  strokeDasharray: "5 5",
                },
                ".MuiLineElement-series-uvId": {
                  strokeDasharray: "3 4 5 2",
                },
                ".MuiMarkElement-root:not(.MuiMarkElement-highlighted)": {
                  fill: "#fff",
                },
                "& .MuiMarkElement-highlighted": {
                  stroke: "none",
                },
              }}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card variant="outlined">
          {" "}
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Eventos Pendientes
            </Typography>
            <Typography
              variant="h3"
              fontWeight={"bold"}
              color="text.secondary"
              component="div"
            >
              513
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              postes
            </Typography>
            <MapContainer
              center={[-17.82594, -63.166498]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
              <Marker position={[-17.82594, -63.166498]} icon={customIcon}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EventoPage;
