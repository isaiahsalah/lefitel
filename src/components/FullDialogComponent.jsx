import { Add, Close } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Dialog,
  Divider,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

export const TransitionDialog = React.forwardRef(function Transition(
  props,
  ref
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullDialogComponent = ({ label, icon, content }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button startIcon={icon} variant="outlined" onClick={handleClickOpen}>
        {label}
      </Button>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        TransitionComponent={TransitionDialog}
      >
        {content}
      </Dialog>
    </React.Fragment>
  );
};
FullDialogComponent.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  content: PropTypes.element.isRequired,
};
export default FullDialogComponent;
