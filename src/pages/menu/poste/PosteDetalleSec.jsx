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
import PosteDetalleEventoSec from "./detalle/PosteDetalleEventoSec";
import PosteDetalleDataSec from "./detalle/PosteDetalleDataSec";
import SimpleDialogComponent from "../../../components/SimpleDialogComp";
import InfoPosteDetalleDialog from "../../../components/dialogs/InfoPosteDetalleDialog";

const PosteDetalleSec = ({ poste, setposte }) => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
  });
  const [value, setValue] = useState(0);

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
                  <ButtonGroup
                    size="small"
                    variant="outlined"
                    aria-label="outlined primary button group"
                  >
                    <Button
                      startIcon={<ArrowBackIos />}
                      onClick={() => {
                        setposte(null);
                      }}
                    ></Button>
                    <FullDialogComponent
                      label="Editar Poste"
                      icon={<Edit />}
                      content={<EditPosteDialog />}
                    />
                    <FullDialogComponent
                      label="Nuevo Evento"
                      icon={<Add />}
                      content={<AddEventoDialog />}
                    />
                    <SimpleDialogComponent
                      label=""
                      title="Como funciona esta pantalla?"
                      icon={<QuestionMark />}
                      content={<InfoPosteDetalleDialog />}
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
                    label="Historial de Eventos"
                    {...a11yProps(1)}
                  />
                </Tabs>
              </Box>
              <CustomTabComponent value={value} index={0}>
                <PosteDetalleDataSec poste={poste} />
              </CustomTabComponent>
              <CustomTabComponent value={value} index={1}>
                <PosteDetalleEventoSec data={data} />
              </CustomTabComponent>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
PosteDetalleSec.propTypes = {
  poste: PropTypes.object.isRequired,

  setposte: PropTypes.func.isRequired,
};
export default PosteDetalleSec;
