import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { LineChart } from "@mui/x-charts/LineChart";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
  useGridApiContext,
  useGridRootProps,
} from "@mui/x-data-grid";

import errorPng from "../../assets/images/error.png";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Add, Edit, EmojiObjects, WhereToVote } from "@mui/icons-material";
import {
  columnsData,
  markersData,
  pData,
  rowsData,
  timeData,
  uData,
} from "../../data/example";
import { useCallback, useState } from "react";
import { useDemoData } from "@mui/x-data-grid-generator";
import { GridToolbar } from "@mui/x-data-grid";

const customIcon = new Icon({
  iconUrl: errorPng,
  iconSize: [28, 28],
});

// eslint-disable-next-line react/prop-types
function GridCustomToolbar({ syncState }) {
  const rootProps = useGridRootProps();
  const apiRef = useGridApiContext();

  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <Button
        size="small"
        startIcon={<rootProps.slots.columnSelectorIcon />}
        onClick={() => syncState(apiRef.current.exportState())}
        {...rootProps.slotProps?.baseButton}
      >
        Recreate the 2nd grid
      </Button>
    </GridToolbarContainer>
  );
}

const EventoPage = () => {
  const { data, loading } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });
  const [savedState, setSavedState] = useState({
    count: 0,
    initialState: data.initialState,
  });

  const syncState = useCallback((newInitialState) => {
    setSavedState((prev) => ({
      ...prev,
      count: prev.count + 1,
      initialState: newInitialState,
    }));
  }, []);
  return (
    <Grid
      container
      sx={{ height: { md: "calc(100% - 76px)" } }}
      alignItems={"stretch"}
      className="evento-page"
    >
      <Grid display={"flex"} flexDirection={"column"} item xs={12} md={3}>
        <Card
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
          variant="outlined"
        >
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: 12,
            }}
          >
            <CardActions
              style={{
                padding: 0,
                display: "flex",
                alignItems: "start",
              }}
            >
              <Grid margin={0} flex={1} textAlign={"left"} padding={0}>
                <Typography
                  display={"flex"}
                  variant="h5"
                  fontWeight={"bold"}
                  color="text.secondary"
                  lineHeight={1}
                >
                  513
                </Typography>
                <Typography
                  lineHeight={1}
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                >
                  eventos sin resolver
                </Typography>
              </Grid>
              <ButtonGroup
                size="small"
                variant="outlined"
                aria-label="outlined primary button group"
              >
                <Button>
                  <EmojiObjects />
                </Button>
                <Button>
                  <Edit />
                </Button>
                <Button>
                  <Add />
                </Button>
              </ButtonGroup>
            </CardActions>

            <Card
              style={{ flex: 1, display: "flex", flexDirection: "column" }}
              variant="outlined"
            >
              <CardContent
                style={{ display: "flex", flexDirection: "column", flex: 1 }}
              >
                <Grid container flexDirection={"column"} margin={0} flex={1}>
                  <Typography
                    variant="h5"
                    fontWeight={"bold"}
                    color="text.secondary"
                    component="div"
                  >
                    Detalle
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    poste
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Grid>

      <Grid display={"flex"} flexDirection={"column"} item xs={12} md={9}>
        <Card sx={{ flex: 1 }} variant="outlined" style={{}}>
          <CardContent style={{}}>
            <Box sx={{ height: "calc(100vh - 145px)" }}>
              <DataGrid
                {...data}
                className="datagrid-content"
                experimentalFeatures={{ lazyLoading: true }}
                rowsLoadingMode="server"
                rowCount
                hideFooterPagination
                rowHeight={38}
                checkboxSelection
                disableRowSelectionOnClick
                slots={{ toolbar: GridToolbar }}
                slotProps={{ toolbar: { syncState, showQuickFilter: true } }}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      {/*<Grid item xs={12}>
        <Card variant="outlined">
          {" "}
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Eventos Pendientes en mapa
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
      </Grid>*/}
    </Grid>
  );
};

export default EventoPage;
