import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  LinearProgress,
  Toolbar,
  Typography,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Close } from "@mui/icons-material";
import EditEventoDialog from "../../../../components/dialogs/EditEventoDialog";
import { TransitionDialog } from "../../../../components/FullDialogComponent";

const PosteDetalleEventoSec = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [evento, setevento] = useState(null);

  const handleClickOpen = (rows) => {
    setevento(rows);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        TransitionComponent={TransitionDialog}
      >
        <EditEventoDialog evento={evento} setevento={setevento} />
      </Dialog>
    </Box>
  );
};
PosteDetalleEventoSec.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PosteDetalleEventoSec;
