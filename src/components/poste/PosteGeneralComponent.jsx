import {
  AccountCircle,
  Add,
  ArrowDropDown,
  Edit,
  EmojiObjects,
  Grid3x3,
} from "@mui/icons-material";
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
  InputAdornment,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import {
  DataGrid,
  GridColumnMenu,
  GridToolbar,
  gridColumnMenuSelector,
} from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import PropTypes from "prop-types";
import FullDialogComponent from "../FullDialogComponent";
import AddPosteComponent from "../AddPosteComponent";

const PosteGeneralComponent = ({ setposte }) => {
  const { data, loading } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
  });

  return (
    <Grid
      container
      sx={{
        height: { xs: "auto", md: "calc(100vh - 64px)" },
        alignItems: "stretch",
        margin: 0,
      }}
    >
      <Grid display={"flex"} flexDirection={"column"} item xs={12} md={12}>
        <Card sx={{ flex: 1 }} variant="outlined" style={{}}>
          <CardContent style={{}}>
            <CardActions
              style={{
                padding: 0,
                display: "flex",
              }}
            >
              <Grid margin={0} flex={1} textAlign={"left"} padding={1}>
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
                  Postes registrados
                </Typography>
              </Grid>

              <ButtonGroup
                size="small"
                variant="outlined"
                aria-label="outlined primary button group"
              >
                <FullDialogComponent
                  label="Nuevo Poste"
                  icon={<Add />}
                  content={<AddPosteComponent />}
                />
              </ButtonGroup>
            </CardActions>
            <Box
              sx={{
                height: {
                  xs: "calc(100vh - 105px)",
                  md: "calc(100vh - 200px)",
                },
                width: {
                  xs: "calc(100vw - 100px)",
                  sm: "calc(100vw - 115px)",
                  md: "calc(100vw - 115px)",
                },
              }}
            >
              <DataGrid
                //className="datagrid-content"
                {...data}
                experimentalFeatures={{ lazyLoading: true }}
                rowsLoadingMode="server"
                hideFooterPagination
                rowHeight={38}
                disableRowSelectionOnClick
                slots={{
                  toolbar: GridToolbar,
                  loadingOverlay: LinearProgress,
                }}
                slotProps={{ toolbar: { showQuickFilter: true } }}
                onRowClick={(params, event, details) => {
                  setposte(params.row);
                }}
                hideFooter
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      {/*
  <TabsComponent
    items={[{ title: "uno" }, { title: "dos" }, { title: "tres" }]}
  />
  <Grid display={"flex"} flexDirection={"column"} item xs={12} md={4}>
    <Card
      style={{ flex: 1, display: "flex", flexDirection: "column" }}
      variant="outlined"
    >
      {" "}
      <CardContent
        style={{ display: "flex", flexDirection: "column", flex: 1 }}
      >
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          Registrados
          <hr />
        </Typography>

        <Grid container flexDirection={"column"} margin={0} flex={1}>
          <Typography
            variant="h1"
            fontWeight={"bold"}
            color="text.secondary"
            component="div"
          >
            2145
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
        <CardActions style={{ padding: 0, justifyContent: "right" }}>
          <Button fullWidth variant="contained">
            <Delete />
          </Button>
          <Button fullWidth variant="contained">
            <Edit />
          </Button>
          <Button fullWidth variant="contained">
            <Add />
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={12} md={8}>
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
  </Grid>*/}
    </Grid>
  );
};
PosteGeneralComponent.propTypes = {
  setposte: PropTypes.func.isRequired,
};
export default PosteGeneralComponent;
