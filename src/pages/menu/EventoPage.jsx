import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { LineChart } from "@mui/x-charts/LineChart";
import { DataGrid } from "@mui/x-data-grid";

import errorPng from "../../assets/images/error.png";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Add, WhereToVote } from "@mui/icons-material";
import {
  columnsData,
  markersData,
  pData,
  rowsData,
  timeData,
  uData,
} from "../../data/example";
const customIcon = new Icon({
  iconUrl: errorPng,
  iconSize: [28, 28],
});
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
              Pendientes
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
            <CardActions style={{ padding: 0 }}>
              <Button fullWidth startIcon={<Add />} variant="contained">
                solucionar
              </Button>
              <Button fullWidth startIcon={<Add />} variant="contained">
                añadir
              </Button>
            </CardActions>
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
              Histórico
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
                  data: timeData,
                  min: timeData[0].getTime(),
                  max: timeData[timeData.length - 1].getTime(),
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
        <Card variant="outlined" style={{}}>
          <CardContent style={{}}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Detalle
              <hr />
            </Typography>
            <Box>
              <DataGrid
                className="datagrid-content"
                rowHeight={34}
                rows={rowsData}
                columns={columnsData}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 7,
                    },
                  },
                }}
                pageSizeOptions={[7]}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Box>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
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
              Eventos Pendientes en mapa
              <hr />
            </Typography>
            <MapContainer center={[-17.82594, -63.166498]} zoom={6}>
              <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
              {markersData.map((mark, i) => (
                <Marker key={i} position={mark} icon={customIcon}>
                  <Popup>
                    <Grid container flexDirection={"column"} gap={1}>
                      Este es un popup del marker
                      <Button
                        size="small"
                        startIcon={<WhereToVote />}
                        variant="contained"
                        fullWidth
                      >
                        solucionar
                      </Button>
                    </Grid>
                  </Popup>
                </Marker>
              ))}
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
