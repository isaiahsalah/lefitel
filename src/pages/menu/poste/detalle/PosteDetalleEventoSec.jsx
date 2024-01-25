import { Box, LinearProgress } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import PropTypes from "prop-types";

const PosteDetalleEventoSec = ({ data, handleClickOpen }) => {
  return (
    <Box
      sx={{
        height: {
          xs: "calc(100vh - 210px)",
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
          handleClickOpen(params.row);
        }}
        hideFooter
      />
    </Box>
  );
};
PosteDetalleEventoSec.propTypes = {
  handleClickOpen: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default PosteDetalleEventoSec;
