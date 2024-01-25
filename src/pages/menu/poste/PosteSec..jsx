import { Add } from "@mui/icons-material";
import {
  Box,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import PropTypes from "prop-types";
import FullDialogComponent from "../../../components/FullDialogComponent";
import AddPosteDialog from "../../../components/dialogs/AddPosteDialog";

const PosteSec = ({ setposte }) => {
  const { data } = useDemoData({
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
                paddingInline: 0,
              }}
            >
              <ButtonGroup
                size="small"
                variant="outlined"
                aria-label="outlined primary button group"
              >
                <FullDialogComponent
                  label="Nuevo Poste"
                  icon={<Add />}
                  content={<AddPosteDialog />}
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
                onRowClick={(params) => {
                  setposte(params.row);
                }}
                hideFooter
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
PosteSec.propTypes = {
  setposte: PropTypes.func.isRequired,
};
export default PosteSec;
