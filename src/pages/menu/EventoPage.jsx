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
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import {
  Add,
  ArrowDownward,
  ArrowDropDown,
  Edit,
  EmojiObjects,
  WhereToVote,
} from "@mui/icons-material";

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
      sx={{
        height: { xs: "auto", md: "calc(100vh - 64px)" },
      }}
      m={0}
      alignItems={"stretch"}
      className="evento-page"
    >
      <Grid
        item
        sx={{
          maxHeight: { xs: "auto", md: "100%" },
        }}
        display={"flex"}
        flexDirection={"column"}
        xs={12}
        md={3}
      >
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
            <Grid
              component={Card}
              sx={{
                padding: 0,
                borderRadius: "4px",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                maxHeight: {
                  xs: "100%",
                  md: "calc(100vh - 170px)",
                },
                overflow: "auto",
              }}
              variant="outlined"
            >
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  padding: "6px",
                }}
              >
                <Grid
                  container
                  p={0}
                  m={0}
                  style={{ justifyContent: "stretch" }}
                  noValidate
                  autoComplete="off"
                >
                  {" "}
                  <Grid item xs={12} md={5}>
                    <Autocomplete
                      size="small"
                      style={{
                        padding: 0,
                        margin: 0,
                      }}
                      options={[
                        { label: "123", year: 1994 },
                        { label: "323", year: 1972 },
                      ]}
                      renderInput={(params) => (
                        <TextField
                          required
                          style={{
                            padding: 0,
                            margin: 0,
                            width: "100%",
                          }}
                          fullWidth
                          variant="outlined"
                          {...params}
                          label="Poste"
                        />
                      )}
                    />
                  </Grid>
                  <Grid style={{}} item xs={12} md={7}>
                    <TextField
                      fullWidth
                      style={{
                        width: "100%",
                        padding: 0,
                        margin: 0,
                      }}
                      variant="outlined"
                      multiline
                      size="small"
                      label="Comentarios"
                    />
                  </Grid>
                  <Grid
                    component={Card}
                    variant="outlined"
                    sx={{ margin: { xs: "2px", sm: "4px" }, padding: 2 }}
                    item
                    xs={12}
                  >
                    <Typography
                      display={"flex"}
                      color="text.secondary"
                      textAlign={"left"}
                    >
                      Imagen:
                    </Typography>
                    <img
                      width={"100%"}
                      style={{
                        aspectRatio: "1/1",
                        objectFit: "cover",
                        borderRadius: 4,
                      }}
                      src={`https://i.pinimg.com/564x/d2/d3/a9/d2d3a9174b19ddd1dad2603e142b058c.jpg`}
                      alt={"imagen"}
                      loading="lazy"
                    />
                  </Grid>
                  <Grid style={{}} item xs={12}>
                    <Typography textAlign={"left"} p={1}>
                      Observaciones:
                    </Typography>

                    <Accordion sx={{}} variant="outlined">
                      <AccordionSummary expandIcon={<ArrowDropDown />}>
                        <Typography>Fibra optica</Typography>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "left",
                          padding: "4px",
                          margin: "0px",
                        }}
                      >
                        <FormControlLabel
                          control={<Checkbox />}
                          sx={{
                            margin: "0px",
                          }}
                          label="Observación"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          sx={{
                            width: "100%",
                            margin: "0px",
                          }}
                          label="Poste haciendo fricción en fibra"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          sx={{
                            margin: "0px",
                          }}
                          label="Observación"
                        />
                      </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{}} variant="outlined">
                      <AccordionSummary expandIcon={<ArrowDropDown />}>
                        <Typography>Ferrreteria</Typography>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "left",
                          padding: "4px",
                          margin: "0px",
                        }}
                      >
                        <FormControlLabel
                          control={<Checkbox />}
                          sx={{
                            margin: "0px",
                          }}
                          label="Observación"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          sx={{
                            width: "100%",
                            margin: "0px",
                          }}
                          label="Poste haciendo fricción en fibra"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          sx={{
                            margin: "0px",
                          }}
                          label="Observación"
                        />
                      </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{}} variant="outlined">
                      <AccordionSummary expandIcon={<ArrowDropDown />}>
                        <Typography>Poste</Typography>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "left",
                          padding: "4px",
                          margin: "0px",
                        }}
                      >
                        <FormControlLabel
                          control={<Checkbox />}
                          sx={{
                            margin: "0px",
                          }}
                          label="Observación"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          sx={{
                            width: "100%",
                            margin: "0px",
                          }}
                          label="Poste haciendo fricción en fibra"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          sx={{
                            margin: "0px",
                          }}
                          label="Observación"
                        />
                      </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{}} variant="outlined">
                      <AccordionSummary expandIcon={<ArrowDropDown />}>
                        <Typography>Terreno </Typography>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "left",
                          padding: "4px",
                          margin: "0px",
                        }}
                      >
                        <FormControlLabel
                          control={<Checkbox />}
                          sx={{
                            margin: "0px",
                          }}
                          label="Observación"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          sx={{
                            width: "100%",
                            margin: "0px",
                          }}
                          label="Poste haciendo fricción en fibra"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          sx={{
                            margin: "0px",
                          }}
                          label="Observación"
                        />
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid display={"flex"} flexDirection={"column"} item xs={12} md={9}>
        <Card sx={{ flex: 1 }} variant="outlined" style={{}}>
          <CardContent style={{}}>
            <Box
              sx={{
                height: {
                  xs: "calc(100vh - 105px)",
                  md: "calc(100vh - 122px)",
                },
                width: {
                  xs: "calc(100vw - 100px)",
                  sm: "calc(100vw - 115px)",
                  md: "auto",
                },
              }}
            >
              <DataGrid
                //className="datagrid-content"
                {...data}
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
