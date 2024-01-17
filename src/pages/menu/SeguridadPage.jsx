import { Add, Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columnsData, rowsData } from "../../data/example";

const SeguridadPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card variant="outlined" style={{}}>
          <CardContent style={{}}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Usuarios
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
        </Card>
      </Grid>
    </Grid>
  );
};

export default SeguridadPage;
