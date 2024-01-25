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

const AddEventoDialog = () => {
  const [image, setImage] = useState(
    "https://i.pinimg.com/736x/ca/64/b1/ca64b142e07ff2ffbfc41b0be1796d8b.jpg"
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

      <Grid item xs={12} md={8}>
        <Autocomplete
          options={[
            { label: "123", year: 1994 },
            { label: "323", year: 1972 },
          ]}
          renderInput={(params) => (
            <TextField
              required
              style={{
                width: "100%",
              }}
              fullWidth
              {...params}
              label="Usuario"
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={12}>
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
          <Grid item xs={12} paddingInline={0} paddingBlock={1}>
            <Typography
              display={"flex"}
              color="text.secondary"
              textAlign={"left"}
              paddingInline={1}
              pb={0}
            >
              Observaciones:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Accordion sx={{ width: 1 }} variant="outlined">
              <AccordionSummary expandIcon={<ArrowDropDown />}>
                <Typography>Fibra optica</Typography>
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
          <Grid item xs={12}>
            <Accordion sx={{ width: 1 }} variant="outlined">
              <AccordionSummary expandIcon={<ArrowDropDown />}>
                <Typography>Ferreteria</Typography>
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
          <Grid item xs={12}>
            <Accordion sx={{ width: 1 }} variant="outlined">
              <AccordionSummary expandIcon={<ArrowDropDown />}>
                <Typography>Poste</Typography>
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
          <Grid item xs={12}>
            <Accordion sx={{ width: 1 }} variant="outlined">
              <AccordionSummary expandIcon={<ArrowDropDown />}>
                <Typography>Terreno</Typography>
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

export default AddEventoDialog;
