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
  FormControlLabel,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { customIcon } from "../../assets/PinMap";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

const AddUserDialog = () => {
  const [image, setImage] = useState(
    "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
  );

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <Grid container width={1} m={0}>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          style={{
            padding: 0,
            margin: 0,
          }}
          label="Nombre"
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <TextField
          fullWidth
          style={{
            padding: 0,
            margin: 0,
          }}
          label="Apellidos"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          style={{
            padding: 0,
            margin: 0,
          }}
          label="Telefono"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <DemoContainer sx={{ p: 0 }} components={["DatePicker"]}>
          <DatePicker
            label="Fecha de nacimiento"
            views={["day", "month", "year"]}
          />
        </DemoContainer>
      </Grid>

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
        <Grid container m={0} p={0}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              style={{
                padding: 0,
                margin: 0,
              }}
              label="Usuario"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              style={{
                padding: 0,
                margin: 0,
              }}
              label="Contraseña"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              style={{
                padding: 0,
                margin: 0,
              }}
              label="Confirmar Contraseña"
            />
          </Grid>
          <Grid item xs={12}>
            <Accordion sx={{ width: 1 }} variant="outlined">
              <AccordionSummary expandIcon={<ArrowDropDown />}>
                <Typography>Rol del usuario</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  padding: "4px",
                  margin: "0px",
                }}
              >
                {["item 1", "Item 2", "Item 3", "Item 4"].map((item, i) => (
                  <Grid key={i} item xs={6} p={0}>
                    <FormControlLabel
                      control={<Checkbox />}
                      sx={{
                        margin: 0,
                      }}
                      label={item}
                    />
                  </Grid>
                ))}
              </AccordionDetails>
            </Accordion>
          </Grid>
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
  );
};

export default AddUserDialog;
