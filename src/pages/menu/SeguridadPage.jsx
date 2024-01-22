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
import { GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { useMemo } from "react";
const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

const SeguridadPage = () => {
  const { data } = useDemoData({
    dataSet: "Employee",
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  // Otherwise filter will be applied on fields such as the hidden column id
  const columns = useMemo(
    () =>
      data.columns.filter((column) => VISIBLE_FIELDS.includes(column.field)),
    [data.columns]
  );
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
                {...data}
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                columns={columns}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                  toolbar: {
                    showQuickFilter: true,
                  },
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SeguridadPage;
