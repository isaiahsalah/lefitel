import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import CustomTabComponent from "../CustomTabComponent";
import { CellTower } from "@mui/icons-material";

const PosteDetalleComponent = ({ poste, setposte }) => {
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

  useEffect(() => {
    console.log(poste);
  }, []);

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
              gap: 12,
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Box
                color="text.secondary"
                sx={{ borderBottom: 1, borderColor: "divider" }}
              >
                <Grid display={"flex"} gap={1} alignItems={"center"}>
                  <Grid
                    border={2}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    borderRadius={50}
                    width={40}
                    height={40}
                  >
                    <CellTower fontSize="medium" />
                  </Grid>

                  <Grid display={"grid"} textAlign={"left"} lineHeight={1}>
                    <Typography fontWeight={"bold"}>{poste.desk}</Typography>
                    <Typography>{poste.brokerName}</Typography>
                  </Grid>
                </Grid>
                <br />
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
                Item One
              </CustomTabComponent>
              <CustomTabComponent value={value} index={1}>
                Item Two
              </CustomTabComponent>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
PosteDetalleComponent.propTypes = {
  poste: PropTypes.object.isRequired,

  setposte: PropTypes.func.isRequired,
};
export default PosteDetalleComponent;
