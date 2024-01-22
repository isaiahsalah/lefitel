import { Add, AddBox, Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { columnsData, rowsData } from "../../data/example";
import { DataGrid } from "@mui/x-data-grid";
import TabsComponent from "../../components/TabsComponent";

const PostePage = () => {
  return (
    <Grid container alignItems={"stretch"}>
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
      </Grid>
    </Grid>
  );
};

export default PostePage;
