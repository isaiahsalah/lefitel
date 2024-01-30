import { ArrowDropDown, WhereToVote } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Button,
  Card,
  CardContent,
  Checkbox,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { customIcon } from "../../assets/PinMap";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers";
import PropTypes from "prop-types";

const AddSolucionDialog = () => {
  const [image, setImage] = useState(
    "https://i.pinimg.com/736x/ca/64/b1/ca64b142e07ff2ffbfc41b0be1796d8b.jpg"
  );

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <>
      <DialogTitle>{"Solucionar evento"}</DialogTitle>
      <DialogContent>
        <Grid container width={1} m={0}>
          <Grid
            item
            sx={{
              height: "100%",
            }}
            xs={12}
            md={6}
            paddingBlock={1}
            paddingInline={0}
          >
            <Grid item xs={12}>
              <TextField
                disabled
                fullWidth
                style={{
                  padding: 0,
                  margin: 0,
                }}
                type="number"
                label="Numero de poste"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                style={{
                  padding: 0,
                  margin: 0,
                }}
                label="Descripción"
              />
            </Grid>
            <Grid item xs={12}>
              <DemoContainer sx={{ p: 0 }} components={["DatePicker"]}>
                <DatePicker
                  sx={{ width: "100%" }}
                  label="Fecha de solucion"
                  views={["day", "month", "year"]}
                />
              </DemoContainer>
            </Grid>
          </Grid>

          <Grid
            item
            sx={{
              height: "100%",
            }}
            xs={12}
            md={6}
            paddingBlock={1}
          >
            <Grid display={"flex"} justifyContent={"space-between"}>
              <Typography
                display={"flex"}
                color="text.secondary"
                paddingInline={1}
                textAlign={"left"}
              >
                Imagen:
              </Typography>
              <Input fullWidth onChange={onImageChange} type={"file"} />
            </Grid>

            <img
              width={"100%"}
              style={{
                aspectRatio: "1/1",
                objectFit: "cover",
                borderRadius: 4,
              }}
              src={image}
              alt={"imagen"}
              loading="lazy"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {}}>Cancelar</Button>
        <Button onClick={() => {}}>Guardar</Button>
      </DialogActions>
    </>
  );
};

export default AddSolucionDialog;
