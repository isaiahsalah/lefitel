import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Dialog,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import CustomTabComponent from "../../../components/CustomTabComponent";
import {
  Add,
  ArrowBackIos,
  Close,
  Edit,
  QuestionAnswer,
  QuestionMark,
} from "@mui/icons-material";
import { useDemoData } from "@mui/x-data-grid-generator";
import FullDialogComponent, {
  TransitionDialog,
} from "../../../components/FullDialogComponent";
import AddEventoDialog from "../../../components/dialogs/AddEventoDialog";
import EditPosteDialog from "../../../components/dialogs/EditPosteDialog";
import EditEventoDialog from "../../../components/dialogs/EditEventoDialog";
import SimpleDialogComponent from "../../../components/SimpleDialogComp";
import InfoPosteDetalleDialog from "../../../components/dialogs/InfoPosteDetalleDialog";
import InfoSeguridadDetalleDialog from "../../../components/dialogs/InfoSeguridadDetalleDialog";
import EditUserDialog from "../../../components/dialogs/EditUserDialog";
import SeguridadDetalleDataSec from "./detalle/SeguridadDetalleDataSec";
import SeguridadDetalleBitacraSec from "./detalle/SeguridadDetalleBitacraSec";

const SeguridadDetalleSec = ({ user, setuser }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = (rows) => {
    setevento(rows);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
  });
  const [value, setValue] = useState(0);
  const [evento, setevento] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Grid
      container
      sx={{
        height: { xs: "auto", md: "calc(100vh - 64px)" },
        minHeight: { xs: "calc(100vh - 64px)", md: "" },
        alignItems: "stretch",
        margin: 0,
      }}
    >
      <Grid
        item
        sx={{
          maxHeight: { xs: "auto", md: "100%" },
        }}
        display={"flex"}
        flexDirection={"column"}
        xs={12}
        md={12}
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
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Box color="text.secondary">
                <Grid
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <ButtonGroup size="small" variant="outlined">
                    <Button
                      startIcon={<ArrowBackIos />}
                      onClick={() => {
                        setuser(null);
                      }}
                    ></Button>
                    <FullDialogComponent
                      label="Editar Usuario"
                      icon={<Edit />}
                      content={<EditUserDialog />}
                    />

                    <SimpleDialogComponent
                      label=""
                      title="Como funciona esta pantalla?"
                      icon={<QuestionMark />}
                      content={<InfoSeguridadDetalleDialog />}
                    />
                  </ButtonGroup>
                </Grid>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  scrollButtons
                  variant="scrollable"
                >
                  <Tab
                    sx={{ textTransform: "unset" }}
                    label="Detalle"
                    {...a11yProps(0)}
                  />
                  <Tab
                    sx={{ textTransform: "unset" }}
                    label="Bitacora"
                    {...a11yProps(1)}
                  />
                </Tabs>
              </Box>
              <CustomTabComponent value={value} index={0}>
                <SeguridadDetalleDataSec />
              </CustomTabComponent>
              <CustomTabComponent value={value} index={1}>
                <SeguridadDetalleBitacraSec />
              </CustomTabComponent>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        TransitionComponent={TransitionDialog}
      >
        <AppBar sx={{ position: "relative" }} variant="outlined" elevation={0}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <Close />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Editar Evento
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Guardar
            </Button>
          </Toolbar>
        </AppBar>
        <Box m={1}>
          <EditEventoDialog evento={evento} setevento={setevento} />
        </Box>
      </Dialog>
    </Grid>
  );
};
SeguridadDetalleSec.propTypes = {
  user: PropTypes.object.isRequired,

  setuser: PropTypes.func.isRequired,
};
export default SeguridadDetalleSec;
